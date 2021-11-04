import styled, { css } from "styled-components";
import { Text, CheckboxGroup } from "@wistia/vhs";
import { Tag } from "./Tag";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  connectHits,
  Index,
  Configure,
  RefinementList,
} from "react-instantsearch-dom";
import { MakeIcon } from "./MakeIcon";
import { CustomizeIcons } from "./CustomizeIcons";
import { AccessibilityIcons } from "./AccessibilityIcons";
import { useState } from "react";

const searchClient = algoliasearch(
  "GY1VC1ZXI5",
  "6d50b5b801bab7d3e1a830e660144d15"
);

const GRID = css`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
  align-items: center;
`;

const Header = styled.div`
  ${GRID};
  margin-bottom: 16px;
`;

const Media = styled.div`
  ${GRID}
  margin-bottom: 16px;
`;

const MediaInfoContainer = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

const Thumbnail = styled.div`
  background-image: url("thumbnails/${({ thumbnail }) => thumbnail}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 90px;
  height: 54px;
  border-radius: 4px;
  flex-shrink: 0;
`;

const MediaInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow: ellipsis;
  $ > * {
    line-clamp: 1;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  width: auto;
`;

const IconContainer = styled.div`
  display: flex;
  column-gap: 4px;
`;

const StyledSearchBox = styled(SearchBox)`
  width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 24px;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Filter = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const FilterTitle = styled(Text)``;

const FilterLabel = styled.label`
  display: flex;
  column-gap: 8px;
  align-items: center;
  font-size: 14px;
`;

const HitContainer = styled.div``;

export function Search() {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  function statusChange({ currentTarget }) {
    const status = currentTarget.value;
    setStatus(status !== "Either" ? status : "");
  }

  function typeChange({ currentTarget }) {
    const type = currentTarget.value;
    setType(type !== "Either" ? type : "");
  }

  const Hits = ({ hits, status }) => (
    <>
      <Header>
        <Text variant="overline">Media</Text>
        <Text variant="overline">Customizations</Text>
        <Text variant="overline">Accessibility</Text>
        <Text variant="overline">Status</Text>
        <Text variant="overline" align="right">
          Plays
        </Text>
      </Header>
      {/* {console.log(hits.filter((hit) => hit.inlcudes("Call To Action")))} */}
      {hits
        .filter((hit) => hit.active.includes(status) && hit.type.includes(type))
        .map((hit) => (
          <Media key={hit.objectID}>
            <MediaInfoContainer>
              <Thumbnail thumbnail={hit.thumbnail} />
              <MediaInfo>
                <Text variant="subtitle1">{hit.title}</Text>
                <Text variant="caption">
                  {hit.type} {hit.duration} | Created {hit.created}
                </Text>
              </MediaInfo>
            </MediaInfoContainer>
            <div>
              <IconContainer>
                <CustomizeIcons input={hit.customizations} />
                {/* {hit.customizations.split(",").map((customization) => (
                <MakeIcon input={customization.trim()} />
              ))} */}
              </IconContainer>
            </div>
            <IconContainer>
              <AccessibilityIcons input={hit.accessibility} />
            </IconContainer>
            <TagContainer>
              <Tag text={hit.active} />
            </TagContainer>
            <Text variant="subtitle2" align="right">
              {hit.plays}
            </Text>
          </Media>
        ))}
    </>
  );
  const CustomHits = connectHits(Hits);

  return (
    <>
      {/* <RefinementList attribute="title" /> */}

      <InstantSearch indexName="test_AllMedia" searchClient={searchClient}>
        <StyledSearchBox />
        <Layout>
          <Filters>
            <Filter>
              <FilterTitle variant="body2" bold={true}>
                {" "}
                Status{" "}
              </FilterTitle>
              <FilterLabel variant="body2">
                <input
                  type="radio"
                  value="Active"
                  name="status"
                  onChange={statusChange}
                />
                Active
              </FilterLabel>
              <FilterLabel variant="body2">
                <input
                  type="radio"
                  value="Inactive"
                  name="status"
                  onChange={statusChange}
                />
                Inactive
              </FilterLabel>
              <FilterLabel variant="body2">
                <input
                  type="radio"
                  value="Either"
                  name="status"
                  onChange={statusChange}
                  checked={status === ""}
                />
                Either
              </FilterLabel>
            </Filter>
            <Filter>
              <FilterTitle variant="body2" bold={true}>
                {" "}
                Type{" "}
              </FilterTitle>
              <FilterLabel variant="body2">
                <input
                  type="radio"
                  value="Video"
                  name="type"
                  onChange={typeChange}
                />
                Video
              </FilterLabel>
              <FilterLabel variant="body2">
                <input
                  type="radio"
                  value="Audio"
                  name="type"
                  onChange={typeChange}
                />
                Audio
              </FilterLabel>
              <FilterLabel variant="body2">
                <input
                  type="radio"
                  value="Either"
                  name="type"
                  onChange={typeChange}
                  checked={type === ""}
                />
                Either
              </FilterLabel>
            </Filter>
          </Filters>
          <HitContainer>
            <CustomHits status={status} />
          </HitContainer>
        </Layout>
      </InstantSearch>
    </>
  );
}

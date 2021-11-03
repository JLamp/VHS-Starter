import styled, { css } from "styled-components";
import { Text } from "@wistia/vhs";
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
  margin: 24px 0;
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

const Hits = ({ hits }) => (
  <>
    <Header>
      <Text variant="overline">Media</Text>
      <Text variant="overline">Customizations</Text>
      <Text variant="overline">Accessibility</Text>
      <Text variant="overline">Active</Text>
      <Text variant="overline" align="right">
        Plays
      </Text>
    </Header>
    {hits.map((hit) => (
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

export function Search() {
  return (
    <>
      <InstantSearch indexName="test_AllMedia" searchClient={searchClient}>
        <StyledSearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  );
}

import styled from "styled-components";
import { Icon, Text } from "@wistia/vhs";
import { SideNavItems } from "../constants/SideNavItems";

const SideNavContainer = styled.div`
  border-radius: 16px;
  background: grey;
  box-shadow: ${({ theme }) => theme.shadow.elevation2};
  display: flex;
  flex-direction: column;
  width: 288px;
  background: white;
  margin-left: 16px;
  height: 80vh;
  flex-shrink: 0;
  & :nth-child(${(props) => props.active + 2}) {
    background: ${({ theme }) => theme.color.brandBlue100};
    color: ${({ theme }) => theme.color.brandBlue500};
  }
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-top: 24px;
  & * {
    color: ${({ theme }) => theme.color.grey700};
  }
`;

const SideNavItem = styled(Text)`
  margin: 0 16px;
  padding: 0 16px;
  font-weight: 500;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const Divider = styled.div`
  height: 4px;
  background: ${({ theme }) => theme.color.grey100};
  margin: 8px 0;
`;

export function SideNav({ active }) {
  return (
    <SideNavContainer active={active}>
      <BackButton>
        <Icon type="arrow-left" size="md" style={{ marginRight: 8 }} />
        <Text variant="overline">Back to {SideNavItems.backTo}</Text>
      </BackButton>
      <Text
        variant="headline1"
        style={{ marginLeft: 32, marginTop: 16, marginBottom: 24 }}
      >
        {" "}
        {SideNavItems.title}{" "}
      </Text>
      {SideNavItems.items.map((item) =>
        item.length > 0 ? (
          <SideNavItem active={active}>{item}</SideNavItem>
        ) : (
          <Divider />
        )
      )}
    </SideNavContainer>
  );
}

SideNav.defaultProps = {
  active: 1,
};

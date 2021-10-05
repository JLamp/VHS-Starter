import styled from "styled-components";
import { WistiaLogo, Text, Icon } from "@wistia/vhs";

const NavItemsText = ["Content", "Analytics", "Help", "Account"];

const MainNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 80px;
  width: 100%;
  padding: 0 16px 0 8px;
  margin-bottom: 24px;
  box-shadow: ${({ theme }) => theme.shadow.elevation2};
  grid-area: header;
`;

const LogoContainer = styled.div`
  padding-left: 24px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const NavItemText = styled(Text)`
  font-weight: 500;
`;

export function MainNav() {
  return (
    <MainNavContainer>
      <LogoContainer>
        <WistiaLogo logotype={false} height={32} />
      </LogoContainer>
      <NavItems>
        <NavItem>
          <Icon type="search" size="md" />
        </NavItem>
        {NavItemsText.map((item) => (
          <NavItem key={item}>
            <NavItemText>{item}</NavItemText>
          </NavItem>
        ))}
      </NavItems>
    </MainNavContainer>
  );
}

import { VHSProvider } from "@wistia/vhs";
import { MainNav } from "./MainNav";
import { SideNav } from "./SideNav";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color.grey100};
  display: grid;
  grid-template-areas: "header header" "sidebar content";
  grid-template-columns: 320px;
  grid-template-rows: 80px;
  grid-row-gap: 16px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 24px;
  justify-self: center;
  padding-top: 24px;
`;

export function Layout({ children }) {
  return (
    <VHSProvider>
      <PageContainer>
        <MainNav />
        <SideNav />
        <ContentContainer>{children}</ContentContainer>
      </PageContainer>
    </VHSProvider>
  );
}

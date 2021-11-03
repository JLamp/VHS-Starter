import { VHSProvider } from "@wistia/vhs";
import { MainNav } from "./MainNav";
import { SideNav } from "./SideNav";
import styled from "styled-components";

const PageContainer = styled.div`
  background: ${({ theme }) => theme.color.grey100};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainContentArea = styled.div`
  display: flex;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 24px;
  justify-self: center;
  padding-top: 24px;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-self: center;
`;

export function Layout({ children }) {
  return (
    <VHSProvider>
      <PageContainer>
        <MainNav />
        <MainContentArea>
          <SideNav active={4} />
          <ContentContainer>
            <Content>{children}</Content>
          </ContentContainer>
        </MainContentArea>
      </PageContainer>
    </VHSProvider>
  );
}

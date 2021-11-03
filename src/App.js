import { Text, Button, Icon, Input, Checkbox } from '@wistia/vhs';
import styled from 'styled-components';
import { Layout } from './components/Layout';
import { Player } from './components/Player';
import { Search } from './components/Search';

const Header = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

const TitleAndButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 16px;
`;

const CommentsContainer = styled.div`
display: flex;
flex-direction: row;
width: 720px;
margin: 24px auto 0 auto;
`;

const CommentBoxContainer = styled.div`
width: 100%;
`;

const CheckboxAndButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 16px;
`;

const StyledCheckbox = styled(Checkbox)`
width: max-content;
`;



function App() {
  return (
    <Layout>
      {/* Header */}
      <Header>
        <TitleAndButton>
          <Text variant="headline1">All Media</Text>
        </TitleAndButton>
        <Search />
      </Header>
    </Layout>
    );
  }
  
  export default App;
  
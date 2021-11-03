import { Text, Button, Icon, Input, Checkbox } from '@wistia/vhs';
import styled from 'styled-components';
import { Layout } from './components/Layout';
import { Player } from './components/Player';

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
          <Text variant="headline1">Lenny Delivers a Video</Text>
          <Button icon={<Icon type="embed" size="md"/>}>Embed and Share</Button>
        </TitleAndButton>
        <Text variant="body2">Our trusty companion Lenny is sent on an epic quest to deliver a video. He tries his best.</Text>
      </Header>
      {/* Player */}
      <Player url="https://lamp.wistia.com/medias/ueu90j21tb" />
      {/* Comments */}
      <CommentsContainer>
        <Text variant="subtitle2" style={{width: 180}}>Lenny Lavigne</Text>
        <CommentBoxContainer>
          <Input type="multiline"></Input>
          <CheckboxAndButtonContainer>
            <StyledCheckbox label="Link comment to current time in video" />
            <Button variant="secondary">Post comment</Button>
          </CheckboxAndButtonContainer>
        </CommentBoxContainer>
      </CommentsContainer>
    </Layout>
    );
  }
  
  export default App;
  
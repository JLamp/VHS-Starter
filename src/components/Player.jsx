import styled from "styled-components";
import ReactPlayer from "react-player/wistia";

const PlayerWrapper = styled.div`
  margin-top: 24px;
  position: relative;
  padding-top: 56.25%;
`;

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export function Player({ url }) {
  return (
    <PlayerWrapper>
      <StyledPlayer url={url} width="100%" height="100%" controls={true} />
    </PlayerWrapper>
  );
}

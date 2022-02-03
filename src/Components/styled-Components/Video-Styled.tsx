import styled from "styled-components";

const Video = styled.video`
  position: absolute;
  z-index: -1;
  top: 25vh;
  left: 0;
  width: 100%;
  height: 60vh;
  object-fit: cover;
  /* border-radius: 0 0 20% 0%; */





  @media (max-width: 958px) {


    top: 15vh;
  }

`;

export const BetVideo = styled.video`
  position: absolute;
  z-index: -1;
  top: 120rem;
  left: 0;
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

export default Video;

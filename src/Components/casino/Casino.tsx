import React from "react";
import styled from "styled-components";
// import casinoVideo from "../../Video/pexels-pavel-danilyuk-7607440.mp4";
import Video, { BetVideo } from "../styled-Components/Video-Styled";
// import bgNavbar from '../Styled.Components/Navbar.Styled'

export default function Casino() {
  return (
    <>
      
        <div>

        </div>

      <TextSport>
        <SportH1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero
          ab natus reiciendis, officiis laboriosam a rerum, reprehenderit
          perferendis saepe aspernatur, iste blanditiis voluptates nostrum
          fugit! Repudiandae, fugiat. Quae, adipisci.
        </SportH1>

        <SportP>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque
          delectus ex? Repellendus repellat laborum, voluptates, placeat atque
          facere dignissimos commodi at tempore laboriosam dicta eaque, et est
          vel distinctio.
        </SportP>
      </TextSport>
    </>
  );
}

const TextSport = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 100%;
  margin-top: 20rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 10rem;
  color: white;
  font-family: "Source Sans Pro", sans-serif;

  @media (min-width: 844px) {
    margin-top: 3rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }

  @media (max-width: 765px) {
    margin-top: 13rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;

const SportH1 = styled.h1`
  font-weight: 900;
  font-size: 2.5rem;
  width: 100%;

  @media (min-width: 375px) and (max-width: 1000px) {
    margin-bottom: -1.5rem;
    font-size: 1.5rem;
  }
`;

const SportP = styled.p`
  font-weight: 900;
  margin-top: 2rem;
  width: 100%;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2rem;

  @media (min-width: 375px) and (max-width: 1000px) {
    margin-bottom: -1.5rem;
    font-size: 1rem;
  }
`;

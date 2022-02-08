import styled from "styled-components";





export const TextCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;

  font-family: "Source Sans Pro", sans-serif;
  background: rgb(14, 13, 13);
  background-image: linear-gradient(
    100deg,
    rgba(52, 47, 47, 0.7453483346463585) 100%,
    rgba(255, 255, 255, 1) 45%
  );
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (orientation: landscape) {
    display: flex;
    justify-content: start;
  }
`;

export const Div = styled.div`
  width: 40%;
  margin-left: 5rem;

  @media (min-width: 600px) and (max-width: 1500px) {
    width: 50%;
    margin-bottom: 9rem;
    text-align: start;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 9rem;
    text-align: center;
  }
`;

export const GonzoImg = styled.img`
  height: 800px;
  margin-top: auto;
  width: 40%;

  @media (max-width: 1000px) {
    height: auto;
  }

  @media (orientation: landscape) and (max-width: 1500px) {
    height: auto;
  }
`;

export const SlotImgStyled = styled.img`
  background: red;
`;

export const TextButton = styled.button`
  animation: fadeInLeft;
  animation-duration: 3s;
  margin-top: 30px;
  padding: 15px 45px;
  border: 2px solid #c1b0ad;

  text-align: center;
  text-transform: uppercase;
  background: transparent;
  color: white;
  border-radius: 1rem;
  letter-spacing: 0.2rem;
  font-weight: 900;
  &:hover {
    background: white;
    color: black;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    font-size: 1rem;
    line-height: 1.3rem;
    margin-top: 10px;
    padding: 5px 25px;
  }

  @media (min-width: 600px) and (max-width: 899px) {
    margin-top: 0;
    font-size: 1rem;
    text-align: center;
    line-height: 1.3rem;
    margin-top: 10px;
    padding: 10px 35px;
  }

  @media (orientation: landscape) and (max-width: 1000px) {
    margin-top: 10px;
    padding: 10px 35px;
  }
`;


export const HomeH1 = styled.h1`
  animation: fadeInLeft;
  animation-duration: 2s;
  font-weight: 900;
  font-size: 2.5rem;
  width: 100%;
  color: white;

  @media (min-width: 600px) and (max-width: 1030px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.4rem;
  }

  @media (orientation: landscape) and (max-width: 1500px) {
    font-size: 1.5rem;
    margin-top: 10rem;
    text-align: start;
  }
`;

export const HomeP = styled.p`
  animation: fadeInLeft;
  animation-duration: 2s;
  font-weight: 700;
  margin-top: 2rem;
  width: 100%;
  color: white;

  font-size: 1.5rem;
  text-align: start;
  line-height: 2rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    text-align: center;
    line-height: 1.4rem;
  }

  @media (orientation: landscape) and (max-width: 1000px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }
`;

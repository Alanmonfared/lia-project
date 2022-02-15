import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-template-rows: 500px 500px;
  background-color: white;
  max-width: 100%;
  background-color: transparent;
  row-gap: 100px;

  @media (orientation: landscape) and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: 400px 400px;

    background-color: white;
    max-width: 100%;
    background-color: transparent;
    row-gap: 100px;
  }

  @media (min-width: 350px) and (max-width: 1700px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    grid-template-rows: 400px 400px;
    grid-gap: 20px;

    background-color: white;
    max-width: 100%;
    background-color: transparent;
    row-gap: 100px;
  }
`;

export const GridImage = styled.img`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);

  background-image: linear-gradient(
    100deg,
    rgba(20, 40, 40, 0.7453483346463585) 80%,
    rgba(255, 255, 255, 1) 45%
  );
`;

export const Item = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  border-radius: 0.2rem;
  box-shadow: 5px 5px 15px gray;

  &:hover {
    transform: scale(1.03);
  }
`;

export const GridCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1Grid = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  margin-top: 1rem;
  color: black;
  font-size: 1.5rem;
  border-bottom: 0.4px solid lightgray;
  padding-bottom: 1rem;
`;

export const GridButton = styled.button`
  animation: fadeInLeft;
  animation-duration: 3s;
  margin-top: 17px;
  padding: 15px 45px;
  border: 2px solid #c1b0ad;

  text-align: center;
  text-transform: uppercase;
  background: transparent;
  color: black;
  border-radius: 1rem;
  letter-spacing: 0.2rem;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background: gray;
    color: white;
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

export const DivGrid = styled.div`
  width: 100%;
  display: block;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
`;

import styled from "styled-components";

export const Mobile = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  height: 800px;
  margin-bottom: auto;
  width: 100%;

  @media (min-width: 764px) and (max-width: 1000px) {
    width: 80%;
    margin-left: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 375px) and (max-width: 764px) {
    width: 80%;
    margin-left: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DivMobile = styled.div`
  background-color: #424242b2;
  padding: 2rem 2rem 2rem;
  color: white;
`;

export const Button = styled.button`
  border-radius: 1rem;
  border: none;
  font-weight: 900;
  letter-spacing: 0.1rem;
  animation: fadeInLeft;
  animation-duration: 2s;
  margin-top: 23px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)}
  

  &:hover {
    background-position: right center; 
    color: #fff;
    text-decoration: none;
    box-shadow: 0 0 15px gray;

  }
 
`;

export const MobileH1 = styled.h1`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  text-align: center;
  animation: fadeInLeft;
  animation-duration: 2s;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-right: 0;
    width: 400px;
  }
`;

export const MobileP = styled.p`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  animation: fadeInLeft;
  animation-duration: 2s;

  margin-top: 1.5rem;
  width: 700px;

  @media (min-width: 375px) and (max-width: 1000px) {
    margin-bottom: 1rem;
    font-size: 1rem;
    width: 100%;
  }

  @media (max-width: 765px) {
    margin-left: 0;
    margin-right: 0;
    width: 400px;
  }
`;

export const MobileImage = styled.img`
  position: relative;
  z-index: -1;
  -webkit-box-reflect: below 0px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
  animation: fadeInRight;
  animation-duration: 2s;
  @media (max-width: 1110px) {
    display: none;
  }
`;

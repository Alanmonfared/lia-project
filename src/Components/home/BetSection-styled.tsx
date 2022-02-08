import styled from "styled-components";
import betImg from "../../Components/media/images/imgbin_gold-coin-stock-photography-stock-xchng-png.png";


export const BetSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 15rem;

  width: 80%;
  height: 25%;
  background-repeat: no-repeat;
  background-image: url(${betImg});
  background-size: 35%;
  background: cover;
  display: table;

  @media (orientation: landscape) and (max-width: 1000px) {
    margin-top: 2rem;
    height: 100vh;
    width: 100%;
    align-items: center;
  }

  @media (max-width: 957px) {
    width: 100%;
    margin-top: 42rem;
    background-size: 85%;
  }
`;

export const Bet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 5rem;
  padding-right: 15rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: auto;
  background-color: #424242b2;

  @media (orientation: landscape) and (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 5rem;

    margin: auto;
    text-align: center;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 5rem;
    padding-bottom: 2rem;

    text-align: center;
  }
`;

export const BetH1 = styled.h1`
  color: white;
  width: 100%;
  line-height: 5rem;
  font-weight: 900;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const BetP = styled.p`
  color: white;
  font-weight: 700;
`;






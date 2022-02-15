import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui-libary/button/buttons";

export default function () {
    const navigate = useNavigate();
    
  return (
    <>
      <Mobile>
        <DivMobile>
          <MobileH1>Casino Online hos LeoVegas</MobileH1>
          <MobileP>
            Välkommen till ett prisbelönt svenskt online casino! Här hittar du
            Sveriges bästa utbud av online casinospel i din mobil, surfplatta
            och dator. I vårt online casino finns ett brett, exklusivt sortiment
            av populära och nya spel inom slots. Detta gäller även vårt utbud av
            Live Casino-spel där vi erbjuder bland annat Blackjack, Roulette och
            Baccarat. Några av våra mest populära slots just nu är bland annat
            Starburst och Book of Dead.
          </MobileP>

          <Button
            onClick={() => {
              navigate("/casino");
            }}
          >
            Gå till casino
          </Button>
        </DivMobile>
        <div>
          <MobileImage
            src="https://casinoexpo.se/uploads/img/leovegas-mobil.jpg"
            alt="mobile"
          />
        </div>
      </Mobile>
    </>
  );
}






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

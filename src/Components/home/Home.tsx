import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MobileImage } from "./Home-Styled";
import Gonzo from "../media/images/imgbin_slot-machine-gonzos-quest-online-casino-online-gambling-png.png";
import betImg from "../../Components/media/images/imgbin_gold-coin-stock-photography-stock-xchng-png.png";
import SotImage from "../../Components/media/images/wanted-dead-or-a-wild-slot-logo.webp";
// import TestCard from '../home/Card'
// import DataFetch from '../DataFetch'
import useAxios, { Edges } from "../hooks/useAxios";
// import { EditorSettings } from "typescript";

// import Tilt from "react-parallax-tilt";

// const {change, setChange} = useState()

export default function Home() {
  const navigate = useNavigate();

  const { data, isError, isLoading } = useAxios();
  if (data == null) return null;
  if (isLoading) return <h2>Loading</h2>;
  // if (isError) return <p>erro</p>
  console.log(data);
  return (
    <>
      <TextCard>
        <Div>
          <div>
            <HomeH1>
              Lorem ipsumanimi perferendis! Quaerat, adipisci placeat illo
              laboriosam t?
            </HomeH1>
            <HomeP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              assumenda consequatur est aliquid iusto ducimus? Animi ratione
              dolore repellendus quia nesciunt dolor cum laudantium, aliquid
              maiores? Nostrum unde.
            </HomeP>
            <div>
              <TextButton>Spela</TextButton>
            </div>
          </div>
        </Div>
        <GonzoImg src={Gonzo} alt="Gonzo" />
      </TextCard>
      {/* <DataFetch    /> */}
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
        {/* <Border></Border> */}
        <div>
          <MobileImage
            src="https://casinoexpo.se/uploads/img/leovegas-mobil.jpg"
            alt="mobile"
          />
        </div>
      </Mobile>

      <div>
        <H1Grid>Populära</H1Grid>

            
            

        {data.games[0].casino.edges.map((edge: Edges, idx: number) => {
          return (
            <Fragment key={idx}>
              <div>{edge.node.slug ?? ""}</div>
              <div>{edge.node.image.icon.src}</div>
              <div>{edge.node.url}</div>
            </Fragment>
          );
        })}

        {/* <div>
              <TestCard title={""} date={22} />
              <TestCard title={""} date={22} />
              <TestCard title={""} date={22} />
              <TestCard title={""} date={22} />
        </div> */}

        {/*        
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>{date} days ago</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
            temporibus omnis illum maxime quod deserunt eligendi dolor
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats>
          <CardStats>
            <LinkText href="#">website</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">github</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper> */}

        <GridCard>
          <Grid>
            <Item>
              <SlotImgStyled src={SotImage} alt="Slots" />

              <h1>Lorem ipsum d ?</h1>
            </Item>
            <Item>
              <SlotImgStyled src={SotImage} alt="Slots" />

              <h1>ssss </h1>
            </Item>
            <Item>
              <SlotImgStyled src={SotImage} alt="Slots" />

              <h1>Lorem ipsum ?</h1>
            </Item>
            <Item>
              <SlotImgStyled src={SotImage} alt="Slots" />

              <h1>Lorem ipsum ?</h1>
            </Item>
            <Item>
              <img alt="" height="100px" />
              <SlotImgStyled src={SotImage} alt="Slots" />

              <h1>Lorem ipsum ?</h1>
            </Item>
            <Item>
              <img alt="" height="100px" />
              <SlotImgStyled src={SotImage} alt="Slots" />

              <h1>Lorem ipsum ?</h1>
            </Item>
            <Item>
              <img alt="" height="100px" />
              <SlotImgStyled src={SotImage} alt="Slots" />

              <h1>Lorem ipsum ?</h1>
            </Item>
            <Item>
              <img alt="" height="100px" />
              <SlotImgStyled src={SotImage} alt="Slots" />

              <h1>Lorem ipsum ?</h1>
            </Item>
          </Grid>
        </GridCard>
      </div>

      {/* <BetVideo autoPlay loop muted >
          <source src={betVideo} type="video/mp4" />
          </BetVideo>
        */}

      <BetSection>
        <Bet>
          <BetH1>Betting hos LeoVegas</BetH1>
          <BetP>
            Välkommen till LeoVegas sports betting - det bästa sättet att spela
            odds på online. Spelplanen är redo, poängtavlan väntar på att
            matchen ska starta, och vi är alltid redo att förse dig med de
            senaste oddsen. Här hittar du en pålitlig och användarvänlig
            sportsbook som finns tillgänglig via din mobil, surfplatta eller
            dator. Hos oss kan du spela på Premier League, Champions League, NHL
            såväl som de stora svenska ligorna Allsvenskan och SHL. Är du
            intresserad av E-sport har vi även något för dig, där vi till
            exempel erbjuder senaste oddsen för matcher inom CS:GO. Hos oss kan
            du sortera oddsen efter liga, turnering eller de mest populära
            matcherna, välja live betting eller före matchstart. Du kan även
            filtrera för att endast kunna se livestreamade event. Hos oss finns
            ett stort utbud av sportsbetting i toppklass.
          </BetP>

          <div>
            <Button
              onClick={() => {
                navigate("/sport");
              }}
            >
              Gå till betting
            </Button>
          </div>
        </Bet>
      </BetSection>
    </>
  );
}

// Text card.....................................................

const TextCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25%;

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

const Div = styled.div`
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
  /* margin-bottom: 2rem; */
  width: 40%;

  @media (max-width: 1000px) {
    height: auto;
  }

  @media (orientation: landscape) and (max-width: 1500px) {
    height: auto;
  }
`;

const SlotImgStyled = styled.img`
  background: red;
`;

const TextButton = styled.button`
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

const HomeH1 = styled.h1`
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

const HomeP = styled.p`
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

// Mobile.............................................................................

const Mobile = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 10rem;
  height: 50%;

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

const DivMobile = styled.div`
  background-color: #424242b2;
  padding: 2rem 2rem 2rem;
  color: white;
`;

const Button = styled.button`
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

const MobileH1 = styled.h1`
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

const MobileP = styled.p`
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

// const Border = styled.div`
//   border-left: 3px solid black;
//   background: linear-gradient(to right, #da22ff 0%, #9733ee 51%, #da22ff 100%);
//   height: 300px;
//   position: absolute;
//   left: 50%;
//   margin-left: -3px;
// `;

//Grid........................................................................Grid

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 400px 400px;
  grid-gap: 15px;
  background-color: white;
  height: 250%;
  max-width: 100%;
  margin-top: 8rem;
  background-color: transparent;

  padding-bottom: 2rem;
  color: white;
  row-gap: 6rem;

  @media (min-width: 350px) and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 350px 350px;
    grid-gap: 5px;
  }

  @media (orientation: landscape) and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 165px 165px;
    grid-gap: 5px;
  }
`;

const Item = styled.div`
  text-align: center;
  display: table-cell;
  margin-bottom: 20rem;
  background-color: black;
  padding-top: 3rem;
  padding-bottom: 25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem;
  box-shadow: 20px 20px 20px gray;
`;

const GridCard = styled.div`
  display: flex;
  display: column;

  justify-content: center;
  align-items: center;
  width: 100%;
`;

const H1Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10rem;
  font-size: 3rem;
`;

// Bet...................................................................................Bet

const BetSection = styled.section`
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

const Bet = styled.div`
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

const BetH1 = styled.h1`
  color: white;
  width: 100%;
  line-height: 5rem;
  font-weight: 900;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const BetP = styled.p`
  color: white;
  font-weight: 700;
`;

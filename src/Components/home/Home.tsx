import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAxios, { Edges } from "../hooks/useAxios";
import {
  MobileImage,
  Mobile,
  MobileP,
  MobileH1,
  Button,
  DivMobile,
} from "./MobileSectionStyled";
import Gonzo from "../media/images/imgbin_slot-machine-gonzos-quest-online-casino-online-gambling-png.png";
import { BetSection, Bet, BetH1, BetP } from "./BetSectionStyled";
import {
  Grid,
  H1Grid,
  GridCard,
  Item,
  GridImage,
  GridButton,
  DivGrid,
} from "./GridSectionStyled";

import {
  TextCard,
  Div,
  HomeH1,
  HomeP,
  TextButton,
  GonzoImg,
} from "./GonzoSection";

export default function Home() {
  const navigate = useNavigate();

  const removeDash = (txt: string) => {
    return txt.replaceAll("-", " ");
  };

  const { data, isError, isLoading } = useAxios();
  if (data == null) return null;
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <p>erro</p>;

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

      {/* {data.games[0].casino.edges.map((edge: Edges, idx: number) => {
        return (
          <Fragment key={idx}>
            <div>{edge.node.slug ?? ""} </div>
            <img src={edge.node.image.icon.src} alt="image" />
            <img src={edge.node.image.icon} alt="image" />
            <img  slug={games.node.slug} alt="" />

            <div>{edge.node.image.icon.src}</div>

            <div>{edge.node.url}</div>
          </Fragment>
        );
      })} */}

      <div>
        <Grid>
          <DivGrid>
            <h1>Senaste</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              maxime nesciunt temporibus molestias accusamus, totam molestiae
              quam vel neque eveniet facilis quasi distinctio reiciendis nulla
              impedit ipsam. Aspernatur, harum repellendus.
            </p>
          </DivGrid>
          {data.games[3].newest.edges.map((edge: Edges, idx: number) => {
            return (
              <GridCard key={idx}>
                <Item>
                  <GridImage src={edge.node.image.icon.src} alt="image" />
                  <H1Grid>{removeDash(edge.node.slug.slice(0, 11))} </H1Grid>
                  <GridButton>Spela</GridButton>
                </Item>
              </GridCard>
            );
          })}
        </Grid>
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

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
import Game from "../home/Games";
import {
  TextCard,
  Div,
  HomeH1,
  HomeP,
  TextButton,
  GonzoImg,
} from "./GonzoSection";
import { Grid, DivGrid } from "../home/GridSectionStyled";

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

      <Grid>
        <DivGrid>
          <h1>Senaste</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            ut voluptate voluptatibus! Pariatur, eveniet eum quam quos vitae
            sequi molestiae. Facere quas perferendis distinctio obcaecati illo
            quisquam rerum reiciendis eveniet?
          </p>
        </DivGrid>
        {data.games[3].newest.edges.map((edge: Edges, idx: number) => {
          return <Game key={`${edge.node.url}${idx}`} game={edge.node} />;
        })}
      </Grid>

      <BetSection>
        <Bet>
          <BetH1>Lorem ipsum dolor sit amet consectetur</BetH1>
          <BetP>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente reprehenderit facilis assumenda provident alias veniam officia, hic, animi explicabo enim eaque id numquam quos vitae necessitatibus magnam in magni? Quisquam.
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

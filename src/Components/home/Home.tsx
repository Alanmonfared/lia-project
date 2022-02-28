"use strict";

import styled from "styled-components";
import useAxios, { Edges } from "../hooks/useAxios";
import useTest, { GamesInfo } from "../hooks/useTest";
import Game from "../../Contexts/Games";
import GonzoSection from "./home-sections/GonzoSection";
import { Grid, DivGrid } from "../ui-libary/grid/GridSectionStyled";
import BetSection from "./home-sections/BetSection";
import MobileSection from "./home-sections/MobileSection";
// import Games from "../../Contexts/Games";

export default function Home() {
  const { data, isError, isLoading } = useAxios();

  // const {data, isError, isLoading  } = useTest();

  if (data == null) return null;
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <p>erro</p>;

  // console.log(data);
  return (
    <>
      <GonzoSection />
      <MobileSection />

      <Grid>
        <DivGrid>
          <h1>Senaste</h1>
          {/* <div> {data.games.imageSrc} </div> */}
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

      <BetSection />
    </>
  );
}

{
  /* {data.games[0]((GamesInfo: GamesInfo, idx:number )  =>{ 
  console.log(GamesInfo +'gggg')
  return <div key={idx}>  <h1>{GamesInfo.name}</h1> </div>
})} */
}

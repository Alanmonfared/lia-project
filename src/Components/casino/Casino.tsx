import React from "react";
import styled from "styled-components";
import useAxios, { Edges } from "../hooks/useAxios";
// import casinoVideo from "../../Video/pexels-pavel-danilyuk-7607440.mp4";
import {
  Grid,
  GridCard,
  Item,
  GridImage,
  H1Grid,
  GridButton,
} from "../home/GridSectionStyled";

import Casinos from "../../View/Casino";
// import Video, { BetVideo } from "../styled-Components/Video-Styled";
// import bgNavbar from '../Styled.Components/Navbar.Styled'

export default function Casino() {
  const { data, isError, isLoading } = useAxios();
  if (data == null) return null;
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <p>erro</p>;

  const removeDash = (txt: string) => {
    return txt.replaceAll("-", " ");
  };

  return (
    <>
       <Grid>
        {data.games[0].casino.edges.map((edge: Edges, idx: number) => {
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
    </>
  );
}

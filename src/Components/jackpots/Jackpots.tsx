import React from "react";
import styled from "styled-components";
import useAxios, { Edges } from "../hooks/useAxios";
import {
  Grid,
  GridCard,
  Item,
  GridImage,
  H1Grid,
  GridButton,
  DivGrid,
} from "../ui-libary/grid/GridSectionStyled";
import Game from "../../Contexts/Games";

export default function Jackpots() {
  const { data, isError, isLoading } = useAxios();
  if (data == null) return null;
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <p>erro</p>;

  return (
    <>
      <Container>
        <Grid>
          <DivGrid>
            <h1>Jackpots</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem ut voluptate voluptatibus! Pariatur, eveniet eum quam
              quos vitae sequi molestiae. Facere quas perferendis distinctio
              obcaecati illo quisquam rerum reiciendis eveniet?
            </p>
          </DivGrid>
          {data.games[2].jackpots.edges.map((edge: Edges, idx: number) => {
            return <Game key={`${edge.node.url}${idx}`} game={edge.node} />;
          })}
        </Grid>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 30px;
`;

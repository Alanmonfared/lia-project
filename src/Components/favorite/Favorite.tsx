import React from "react";
import { Grid, DivGrid } from "../ui-libary/grid/GridSectionStyled";
import Game from "../../Contexts/Games";
import { GlobalStates } from "../../Contexts/GlobalState";
import styled from "styled-components";

export default function Favorite() {
  // const { favGames } = useContext(ContextState); alternativ
  const { favGames } = GlobalStates();
  return (
    <>
      <Container>
        <div>
          <div>
            <h1>Mina favoriter</h1>
          </div>
        </div>
      </Container>
      <Grid>
        {favGames &&
          favGames.map((game, idx) => (
            <DivGrid key={idx}>
              <Game key={`${game.url}${idx}`} game={game} />
            </DivGrid>
          ))}
      </Grid>
    </>
  );
}

// favGames.length > 0 för att checka att en arry inte är tom innan en mappning. alternativ

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

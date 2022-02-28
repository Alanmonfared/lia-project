import React from "react";
import { GlobalStates } from "../Contexts/GlobalState";
import { useLocation } from "react-router-dom";
// import { Grid, DivGrid } from "../ui-libary/grid/GridSectionStyled";
import Game from "../Contexts/Games";
import { Node } from "../Components/hooks/useAxios";

export default function GameDetails() {
  const { favGames } = GlobalStates();
  const location = useLocation();

  let { state } = location;
  if (state == null) return <div>Nothing to display</div>;

  const game = state as Node;
  // const game: Node = {};

  console.log("state");

  return <Game game={game} />;
}

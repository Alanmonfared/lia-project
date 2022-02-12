import React from "react";
import { createContext, useContext, useReducer } from "react";
import useAxios from "../../Components/hooks/useAxios";
import { Node } from "../hooks/useAxios";
import {
  initState,
  ReduceState,
  ContextProviderProps,
  GlobalStates,
} from "../../Contexts/GlobalState";
// import Game from "../home/Games";

// export type ReduceState = {
//   favGames: Array<Node>;
// };
// export const initState = {
//   favGames: [],
// };

export default function Favorite() {
  // const dispatch = GlobalDispatcher();
  const state = GlobalStates();
  // const { favGames } = useContext(ContextState) as typesFavorite;
  // const ContextState = createContext<ReduceState>(initState);
  
  // const { data, isError, isLoading } = useAxios();
  // const [state, dispatch] = useReducer(gameReducer, initState);
  
  // const [state, dispatch] = useReducer(initState);
  console.log(state,  'funka')
  
  return (
    <div>
      <h1>favoriter</h1>
      {state.favGames.map((node: Node, idx: number) => {
        <img key={`${node.image.icon.src}${idx}`} alt="" />;
        <h1> {node.slug} </h1>
      })}
      {/* key={`${node.image.icon.src}${idx}`} */}
    </div>
  );
}

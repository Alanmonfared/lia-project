import React, { createContext, useContext, useReducer } from "react";
import { Node } from "../Components/hooks/useAxios";

// export const initialValues = {
//   returnValue: true,
//   AddFav: () => {},
//   RemoveFav: () => {},
// };

// export const AppContext = createContext(initialValues);

export const initState = {
  favGames: [],
};

export type ReduceState = {
  favGames: Array<Node>;
};

type Action =
  | { type: "ADD_FAV"; game: Node }
  | { type: "REMOVE_FAV"; url: string };

export function gameReducer(state: ReduceState, action: Action): ReduceState {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favGames: [...state.favGames, action.game],
      };

    case "REMOVE_FAV":
      return {
        ...state,
        favGames: state.favGames.filter((game) => game.url !== action.url),
      };

    default:
      return state;
  }
}

// console.log('', state)
export const ContextState = createContext<ReduceState>(initState);

const Dispatcher = createContext<(action: Action) => void>(() => {});

export const GlobalStates = (): ReduceState => {
  return useContext(ContextState);
};

export const GlobalDispatcher = () => {
  return useContext(Dispatcher);
};

export type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProviderProps = (props: ContextProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, initState);

  return (
    <ContextState.Provider value={state}>
      <Dispatcher.Provider value={dispatch}>
        {props.children}
      </Dispatcher.Provider>
    </ContextState.Provider>
  );
};

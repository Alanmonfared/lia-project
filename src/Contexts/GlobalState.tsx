import React, { createContext, useReducer } from "react";
// const { data, isError, isLoading } = useAxios();






export const initialValues = {
  returnValue: true,
  AddFav: () => {},
  RemoveFav: () => {},
};

export const AppContext = createContext(initialValues);

type initState = {
  returnValue: boolean;

};

type Action = {
  type: "ADD_FAV" | "REMOVE_FAV";
};

export function gameReducer(state: initState, action: Action) {
  switch (action.type) {
    case "ADD_FAV":
      return {
        returnValue: true,
      };

    case "REMOVE_FAV":
      return {
        returnValue: false, 
      };

    default:
      return state;
  }
}

  const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialValues);

  return (
    <AppContext.Provider
      value={{
        returnValue: state.returnValue,
       
        AddFav: () => dispatch({ type: "ADD_FAV" }),
        RemoveFav: () => dispatch({ type: "REMOVE_FAV" }),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export default AppProvider;

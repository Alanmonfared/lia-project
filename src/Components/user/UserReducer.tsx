import React, { useReducer, createContext, useContext } from "react";

export type State = {
  id: any | null;
  firstname: string | null;
  lastname: string;
  email: string;
  password: string;
  textInfo: string;
  isError: boolean;
  login: string;
  // gamesList: Array<T>,
  // profile: {};
  loggedIn: boolean;
};

export const initialState: State = {
  // profile: {},
  id:"",
  loggedIn: false,
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  textInfo: "",
  isError: false,
  login: "",
  // gamesList: [],
};

type Action =
  | { type: "ADD_FIRSTNAME"; payload: string }
  | { type: "ADD_LASTNAME"; payload: string }
  | { type: "ADD_EMAIL"; payload: string }
  | { type: "ADD_PASSWORD"; payload: string }
  | { type: "LOGIN_SUCCESS"; payload: string }
  | { type: "LOGIN_USER"; payload: string }
  | { type: "LOGIN_FAILED"; payload: string }
  | { type: "LOGIN_ERROR"; payload: boolean };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_FIRSTNAME":
      return {
        ...state,
        firstname: action.payload,
      };
    case "ADD_LASTNAME":
      return {
        ...state,
        lastname: action.payload,
      };
    case "ADD_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "ADD_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        textInfo: action.payload,
        isError: false,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        textInfo: action.payload,
        isError: true,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isError: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        loggedIn: true,
      };
    // case "LOGIN_USER":
    //   return {
    //     ...state,
    //     profile: action.payload,
    //     loggedIn: true,
    //   };
  }
};





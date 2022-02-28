import React, { Link } from "react-router-dom";
import { useState, useReducer, ChangeEvent } from "react";
import styled from "styled-components";
import { Button } from "../ui-libary/button/buttons";
import { reducer, initialState } from "../user/UserReducer";
import login from "../hooks/useAxiosUser";
import useAxiosUser from "../hooks/useAxiosUser";
import axios from "axios";

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const {data, isError, isLoading} = useAxiosUser();

  // const [isLoading, setLoading] = useState<boolean>(false);
  // const [isError, setError] = useState<boolean>(false);

  //  const [data, setData] = <Response | null>(null);

  // console.log(state)

  const handleEmailChange = (
    event: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    dispatch({
      type: "ADD_EMAIL",
      payload: event.target.value,
    });
  };
  const handlePasswordChange = (
    event: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    dispatch({
      type: "ADD_PASSWORD",
      payload: event.target.value,
    });
  };

  

   const setProfile = () => {
    return {
      type: "ADD_LOGIN",
      payload: state.login,
    };
  };
  const handleLogin = () => {
    let user = {
      
      id:state.id,
      email: state.email,
      password: state.password,
    };

    axios
      .post(`https://leovegasapi.lm.r.appspot.com/api/user/login${user.id}`)
      .then((response) => {

        console.log(response);
      })
      .catch((error) => {
        console.log(error, "Funkar ej ");
      });

    console.log(user);
    if (state.firstname === state.firstname && state.password === state.password) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: 'Incorrect username or password'
      });
    }
  };

  return (
    <Card>
      <Form>
        <Text>Välkomen!</Text>
        <UserInput
          type="email"
          id="email"
          placeholder="e-post"
          // value={email}
          onChange={handleEmailChange}
          required
        />
        <UserInput
          type="password"
          placeholder="Lösenord"
          id="passsword"
          onChange={handlePasswordChange}
          required
        />

        <Button type="button" onClick={handleLogin}>
          Logga in
        </Button>

        <RegisterLink to="/register">Skapa nytt konot</RegisterLink>
      </Form>
    </Card>
  );
}

export const Card = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RegisterLink = styled(Link)`
  margin: 1rem;
  text-decoration: none;
  color: black;
  font-size: 20px;
  &:hover {
    background: lightgray;
  }
`;

export const Form = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 700px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px 50px;
  box-shadow: 1px 0px 10px 1px lightgray;
`;

export const Text = styled.span`
  color: #444;
  font-size: 24px;
  padding-bottom: 16px;
`;

export const UserInput = styled.input`
  height: 40px;
  padding: 0 15px;
  border: 2px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #444;
  font-size: 16px;
  &:focus {
    border-color: #ddd;
  }
  &:hover {
    border-color: #ddd;
  }
`;

// export const Button = styled.button`
//   height: 40px;
//   text-align: center;
//   align-items: center;
//   border-radius: 4px;
//   font-weight: bold;
//   font-size: 16px;
//   border: 0;
//   color: #fff;
//   background-color: #00A878;
//   margin-top: 5px;
//   margin-bottom: 16px;
//   cursor: pointer;
// `;

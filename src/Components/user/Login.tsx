import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import useAxiosUser from "../hooks/useAxiosUser";



export default function Login() {
  // const {data, isError, isLoading} = useAxiosUser();
  // if (data == null) return null;
  // if (isLoading) return <h1>Loading</h1>;
  // if (isError) return <p>erro</p>;

  return (
    <>
    <LoginForm/>

    </>
  )
}



// const [message, setMessage] = useState("");
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       setMessage("its working" + id);
//     } else {
//       setMessage("no id");
//     }
//   });

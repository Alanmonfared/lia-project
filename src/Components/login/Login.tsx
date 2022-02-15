import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "./login-sections/LoginForm";


export default function Login() {
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

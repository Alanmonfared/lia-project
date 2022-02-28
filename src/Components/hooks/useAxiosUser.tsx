import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import { reducer, initialState } from "../user/UserReducer";

export default function useAxiosUser() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<Response | null>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  //  const setProfile = (id) => {
  //   return {
  //     type: state.login,
  //     payload: id,
  //   };
  // };

  useEffect(() => {
    setLoading(true);
    axios
      .post("https://leovegasapi.lm.r.appspot.com/api/user/login")
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
        setLoading(false);
        setError(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error, "paloghi");
        setLoading(false);
        setError(true);
        setData(null);
      });
    return () => {};
  }, []);

  return { data, isError, isLoading };
}

// useEffect(() => {
//   login();
// }  , []);

// const login = () => {
// const [state, dispatch] = useReducer(reducer, initialState);
//   setLoading(true);

//   axios
//     .post("https://leovegasapi.lm.r.appspot.com/api/user/addUser")

//     .then((response) => {
//       setData(response.data);
//       console.log(response.data);
//     })

//     .catch((error) => {
//       console.log(error, "paloghi");
//       setLoading(false);
//       setError(true);
//       setData(null);
//     });

//   return () => {};
// };

import axios from "axios";
import { useState, useEffect } from "react";

type Games = {
  casino: Conection;
  live: Conection;
  jackpots: Conection;
  leojackpot: Conection;
};

type Conection = {
  edges: Array<Edges>;
  pageinfo: PageInfo;
};

type Data = {
  [key: number | string]: Games;
};

type PageInfo = {
  first: number;
  slug: string;
  top: number;
};

type Node = {
  slug: string;
  image: {
    icon: {
      src: string;
    };
  };

  url: string;
  attrs: {};
  jackpot: {
    currency: string;
    displayValue: string;
  };
};

type Response = {
  status: string;
  data: Data;
  game: Games
};

export type Edges = {
  node: Node;
};

const useAxios = () => {
  //Min anpassade "axiosHook" kommer att ha 3 state, Response, error och Lodaing.

  // const [response, setResponse] = useState<[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [games, setGames] = useState<Response | null>(null);

  //Den den här funktionen ska anropas en gång när vi laddar komponenten där vi använder den här useEffect

  useEffect(() => {
    setLoading(true);
    axios
      .get(" https://www.leovegas.com/api/public-casino/bymarket/se ")
      .then((response) => {
        // console.log(response.data.status);
        setGames(response.data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
        setGames(null);
      });

    return () => {};
    // Måste man retunera en objekt, är det nödvändigt?
  }, []);

  return { games, isError, isLoading };
  //Returnera , och som const påståenden. Const-påståendet säkerställer att variabeln är skrivskyddad och inte kan tilldelas om.responsesisLoadingisError
};

export default useAxios;
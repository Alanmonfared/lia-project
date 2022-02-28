"use strict"
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

type Categories = {
  casino: Conection;
  live: Conection;
  jackpots: Conection;
  newest: Conection;
  leojackpot: Conection;
};

type Conection = {
  gamesInfo: GamesInfo;
};

export type Data = {
  [key: number | string]: Categories;
};

export type GamesInfo = {
  id: number;
  slug: string;
  name: string;
  imageSrc: string;
  urlSrc: string;
  tableSrc: string;
  availableSeats: string;
  tagsList: [];
  categories: Array<Categories>;
};

type Response = {
  games: GamesInfo;
  status: string;
};

export default function useTest() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<Response | null>(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(" https://leovegasapi.lm.r.appspot.com/api/games")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setError(false);
        console.log(response, "kkkk");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
        setData(null);
      });

    return () => {};
  }, []);

  return { data, isError, isLoading };
}

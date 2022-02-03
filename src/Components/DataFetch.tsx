import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

type Games = {
  casino: string;
  live: string;
  jackpots: string;
  leojackpot: string
};

type Data = {
  first:number;
  total:number

};

type Response = {
  status: string;
  data: Data;
  games: Games;
  edges: edges
};



type edges = {
  slug: string;
  image: string;
  icon: string
  url: string;
  attrs:string;

}

const Fetch = () => {
  const [games, setGames] = useState<any | null>(null);

  useEffect(() => {
    axios
    .get(" https://www.leovegas.com/api/public-casino/bymarket/se ")
    .then((response) => {
      // console.log(response.data.status);
      setGames(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  if (games == null) return null;
  console.log(games,  'funkar');
  // console.log(games);
  return (
    <>

{/* 
      {/* <ul>
        {games[0].casino.edges.map((game) => (
          <li key={game.slug}>{game.title}</li>
        ))}
      </ul> */} 

      {/* <h1 key={games.slug}> {games}</h1> */}
      {/* <h1>aiofjaiofaio</h1> */}
      {/* {games.map(game => console.log(game))} */}
    </>
  );
};

export default Fetch;

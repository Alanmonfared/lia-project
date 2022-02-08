import { createContext } from "react";
// import useAxios from "../Components/hooks/useAxios";
import typesFavorite from '../Types/types'




console.log(typesFavorite);

export type MyFavoriteProps = {
    game: {[key: string]: typeof typesFavorite[]};
    updateGames: (game: {[key: string]: typeof typesFavorite[]}) => void;

}



const GamesContext = createContext< MyFavoriteProps>({

    game: {},
    updateGames: (game: {[ key: string]: typeof typesFavorite[] }) => {} 

});


export const GamesContextConsumer = GamesContext.Consumer;
export const GamesContextProvider = GamesContext.Provider;
export default GamesContext;

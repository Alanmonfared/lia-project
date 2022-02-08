export type Games = {
    casino: Conection;
    live: Conection;
    jackpots: Conection;
    newest: Conection;
    leojackpot: Conection;
  };
  
  export type Conection = {
    edges: Array<Edges>;
    pageinfo: PageInfo;
  };
  
  export type Data = {
    [key: number | string]: Games;
  };
  
  export type PageInfo = {
    first: number;
    slug: string;
    top: number;
  };
  
  export type Node = {
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
  
  export type Response = {
    status: string;
    games: Data;
  };
  
  export type Edges = {
    node: Node;
  };
 
const typesFavorite = () => {
    return ( 

        <>
        </>


     );
}
 
export default typesFavorite ;
  
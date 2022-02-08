import React from "react";
import useAxios, { Edges } from "../Components/hooks/useAxios";

export default function Live() {
  const removeDash = (txt: string) => {
    return txt.replaceAll("-", " ");
  };
  const { data, isError, isLoading } = useAxios();
  if (data == null) return null;
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <p>erro</p>;
  return (
    <>
      <div>
        {data?.games[0].casino.edges.map((edge: Edges, idx: number) => {
          return (
            <div key={idx}>
              <div>
                <img src={edge.node.image.icon.src} alt="image" />
                <h1>{removeDash(edge.node.slug.slice(0, 11))} </h1>
                <button>Spela</button>
              </div>
            </div>
          );
        })}
      </div>
    
    
    
    
    
    
    
    </>
  );
}

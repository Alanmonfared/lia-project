import React from "react";

export default function Slots() {
  return (
    <>
      <div>
        {data?.games[2].jackpots.edges.map((edge: Edges, idx: number) => {
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

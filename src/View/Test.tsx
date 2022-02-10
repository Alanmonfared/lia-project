import { useContext } from "react";
import { AppContext } from "../Contexts/GlobalState";
import GlobalState from "../Contexts/GlobalState";
import useAxios, { Edges } from "../Components/hooks/useAxios";

const Test: React.FunctionComponent = () => {
  const context = useContext(AppContext);
  const { returnValue, AddFav, RemoveFav } = context;

  // const state = GlobalState();
  // const foundGame = state.data.find( dataGames => dataGames.slug )
  const { data, isError, isLoading } = useAxios();

  console.log(context);

  return (
    <div>
      {returnValue && (
        <div>
          {data?.games[3].newest.edges.map((edge: Edges, idx: number) => {
            return (
              <div key={idx}>
                <div>
                  <img src={edge.node.image.icon.src} alt="image" />
                  <h1>{edge.node.slug} </h1>
                  <button>Spela</button>
                  <button onClick={AddFav}>Add</button>
                  <button onClick={RemoveFav}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <button onClick={AddFav}>Add</button>
      <button onClick={RemoveFav}>Remove</button>
    </div>
  );
};

export default Test;

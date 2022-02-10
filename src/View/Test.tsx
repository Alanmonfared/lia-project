import { useContext } from "react";
import { AppContext } from "../Contexts/GlobalState";
import GlobalState from "../Contexts/GlobalState";

const Test: React.FunctionComponent = () => {
  const context = useContext(AppContext);
  const { returnValue, AddFav, RemoveFav } = context;

  // const state = GlobalState();
  // const foundGame = state.data.find( dataGames => dataGames.slug )

  console.log(context);

  return (
    <div>
      {returnValue && (
        <div>
            <h1>Favoriter syns här</h1>
        </div>
      )}
      <button onClick={AddFav}>Add</button>
      <button onClick={RemoveFav}>Remove</button>
    </div>
  );
};

export default Test;

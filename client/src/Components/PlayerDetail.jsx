import { useContext, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
const PlayerDetail = () => {
  //external
  const { id } = useParams();
  const { players, getItem } = useContext(PlayerContext);
  //internal
  const[player, setPlayer] = useState({});
  useEffect(() => {
    getItem(id, setPlayer);
  }, [id, players, getItem]);

  return (
    <>
      {player !== {} && (
        <div className="card container mt-3 text-center">
          <h1 className="card-title">{player.name}</h1>
          <hr />
          <div className="card-body">
            <p className="card-text">
              Preferred position: <span>{player.position}</span>
            </p>
            <p className="card-text">
              Game 1: <span>{player.game1}</span>
            </p>
            <p className="card-text">
              Game 2: <span>{player.game2}</span>
            </p>
            <p className="card-text">
              Game 3: <span>{player.game3}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default PlayerDetail;

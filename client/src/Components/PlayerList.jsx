import { Link } from "react-router-dom";
import icoDelete from "../assets/trash-can-solid.svg";
//import icoEdit from "../assets/pen-clip-solid.svg";
import { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import IconButton from "./IconButton";
const PlayerList = () => {
  const { players, deleteItem } = useContext(PlayerContext);
  const renderItem = () =>
    players.map((player, index) => (
      <tr key={`Player${index}`}>
        <td><Link to={`/players/${player._id}`}>{player.name}</Link></td>
        <td>{player.position}</td>
        <td>
          <IconButton
            icon={icoDelete}
            typeStyle={"danger"}
            action={() => deleteItem(player._id)}
          />
        </td>
      </tr>
    ));
  return (
    <table className="table container text-center" style={{ width: "22rem" }}>
      <thead>
        <tr>
          <th scope="col">Team Name</th>
          <th scope="col">Preferred Position</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>{renderItem()}</tbody>
    </table>
  );
};

export default PlayerList;

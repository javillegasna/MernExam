import { Link, useNavigate } from "react-router-dom";
//import icoEdit from "../assets/pen-clip-solid.svg";
import { useContext } from "react";
import PetContext from "../contexts/PetContext";
import GenericButton from "./GenericButton";
const PetList = () => {
  const navigate = useNavigate()
  const { pets, deleteItem } = useContext(PetContext);
  const renderItem = () =>
    pets.map((pet, index) => (
      <tr key={`Player${index}`}>
        <td><Link to={`/players/${pet._id}`}>{pet.name}</Link></td>
        <td>{pet.type}</td>
        <td>
          <GenericButton action={()=>navigate(`/pets/${pet._id}`)} message={"details"} typeStyle={"primary"}/>
          {" | "}
          <GenericButton action={()=>navigate(`/pets/${pet._id}/edit`)} message={"edit"} typeStyle={"primary"}/>
          {" | "}
          <GenericButton action={()=>deleteItem(pet._id)} message={"adopt"} typeStyle={"danger"}/>
        </td>
      </tr>
    ));
  return (
    <table className="table table-striped table-hover container text-center" >
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>{renderItem()}</tbody>
    </table>
  );
};

export default PetList;

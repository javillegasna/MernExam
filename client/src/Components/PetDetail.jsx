import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PetContext from "../contexts/PetContext";
import icoHome from "../assets/house-solid.svg";
import icoLike from "../assets/thumbs-up-solid.svg";
import IconButton from "./IconButton";
const PetDetail = () => {
  //external
  const { id } = useParams();
  const { pets, getItem, deleteItem, putItem} = useContext(PetContext);
  //internal
  const [pet, setPet] = useState({});
  const [button,setButton] = useState(false);
  //effects
  useEffect(() => {
    getItem(id, setPet);
  }, [id, pets, getItem]);
  return (
    <>
      {pet !== {} && (
        <>
          <div className="card container mt-3">
            <div className=" row">
              <div className="col">
                <h2 className="card-body" style={{ fontSize: "30px" }}>
                  Details about: {pet.name}
                </h2>
              </div>
              <div className="col d-flex">
                <span className="ms-auto">
                  <IconButton
                    icon={icoHome}
                    action={() => deleteItem(pet._id)}
                    message={`Adopt ${pet.name}`}
                    typeStyle={"danger"}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="card container mt-3 ">
            <div className="card-body container">
              <div className="row m-3">
                <div className="col">Pet type:</div>
                <div className="col-10">{pet.type}</div>
              </div>
              <div className="row m-3">
                <div className="col">Description:</div>
                <div className="col-10">{pet.description}</div>
              </div>
              <div className="row m-3">
                <div className="col">Skills:</div>
                <div className="col-10">
                  <p>{pet.skill1}</p>
                  <p>{pet.skill2}</p>
                  <p>{pet.skill3}</p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="row">
              <div className="col">
              <IconButton
                    disable={button}
                    icon={icoLike}
                    action={() => {putItem(id,{...pet,likes:pet.likes+1}); setButton(true)}}
                    message={`Like ${pet.name}`}
                    typeStyle={"success"}
                  />
              </div>
              <div className="col">
              {pet.likes} like(s)
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default PetDetail;

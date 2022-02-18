import { useContext, useState } from "react";
import ProductsContext from "../contexts/PlayerContext";
import { useNavigate, useParams } from "react-router-dom";
const PlayerFrm = () => {
  const navigate = useNavigate();
  //Parameters URL
  const { id } = useParams();
  //Context
  const { postItem } = useContext(ProductsContext);
  //Estates
  const [player, setPlayer] = useState({
    name: "",
    position: "",
    game1: "Undecided",
    game2: "Undecided",
    game3: "Undecided",
  });
  const [errors, setErrors] = useState({
    name: false,
    position: false,
    game1: false,
    game2: false,
    game3: false,
  });
  const [msgErrors, setMsgErrors] = useState({
    name: "Min 2 characters long",
    position: "",
    game1: "Is required",
    game2: "Is required",
    game3: "Is required",
  });
  //Utilities
  //update data model if it´s an object
  //const updateErrors=(dataToUpdate,value)=>dataToUpdate.reduce((acc, keyError)=>({...acc,[keyError]:value}),{...errors});
  const handlerUpdateList = (action, value, dataToUpdate, target) => {
    const tags = Object.keys(dataToUpdate);
    const newTarget = tags.reduce(
      (acc, tag) => ({ ...acc, [tag]: value }),
      { ...target }
    );
    action(newTarget);
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const errorsBack = await postItem(player);
    //errors
    if(errorsBack){
      //Error states
      handlerUpdateList(setErrors, true, errorsBack, errors);
      //Message to the backend
      setMsgErrors(Object.keys(errorsBack).reduce((acc,tag)=>({...acc,[tag]:errorsBack[tag].message}),{...msgErrors}));
    }else{
      handlerUpdateList(setErrors, false, player, errors);
      navigate("/")
    }
  };

  return (
    <form
      className="container border border-primary rounded-3 mt-3"
      style={{ width: "20rem" }}
      onSubmit={handlerSubmit}
    >
      <h2>Add Player</h2>
      <fieldset>
        <label className="form-label" htmlFor="title">
          Player Name:
        </label>
        <input
          className={`form-control ${errors.name && "border-danger"}`}
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setPlayer({ ...player, name: e.target.value });
            //it's necessary consider the specific situation to replicate the backend
            handlerUpdateList(setErrors,e.target.value.length <2,{name:""},errors);
          }}
          value={player.name}
        />
        {errors.name && <p className="text-danger">{msgErrors.name}</p>}
      </fieldset>

      <fieldset>
        <label className="form-label" htmlFor="price">
          Preferred Position:
        </label>
        <input
          className={`form-control ${errors.position && "border-danger"}`}
          type="text"
          name="position"
          id="position"
          onChange={(e) => {
            setPlayer({ ...player, position: e.target.value });
          }}
          value={player.position}
        />
        {errors.position && <p className="text-danger">{msgErrors.position}</p>}
      </fieldset>
      <button className="btn btn-primary mb-3 container">
        {id ? "Update" : "Create"}
      </button>
    </form>
  );
};
export default PlayerFrm;

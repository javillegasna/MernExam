import { useContext, useEffect, useState } from "react";
import PetContext from "../contexts/PetContext";
import { useNavigate, useParams } from "react-router-dom";
import IconButton from "./IconButton";
import icoEdit from "../assets/pen-clip-solid.svg";
const PetEditFrm = () => {
  //params to url
  const {id} = useParams()
  const navigate = useNavigate();
  //Context
  const { putItem , getItem } = useContext(PetContext);
  //Estates
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
    likes: 0,
  });
  const [errors, setErrors] = useState({
    name: false,
    type: false,
    description: false,
    skill1: false,
    skill2: false,
    skill3: false,
    likes: false,
  });
  const [msgErrors, setMsgErrors] = useState({
    name: "Name is required",
    type: "Min 2 characters long",
    description: "Min 2 characters long",
    skill1: "",
    skill2: "",
    skill3: "",
    likes: "",
  });

  useEffect(() => {
    getItem(id,setPet)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Utilities
  //update data model if it´s an object
  //const updateErrors=(dataToUpdate,value)=>dataToUpdate.reduce((acc, keyError)=>({...acc,[keyError]:value}),{...errors});
  const handlerUpdateList = (action, value, dataToUpdate, target) => {
    const tags = Object.keys(dataToUpdate);
    const newTarget = tags.reduce((acc, tag) => ({ ...acc, [tag]: value }), {
      ...target,
    });
    action(newTarget);
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    if(!errors.name&&!errors.type&&!errors.description){
      const errorsBack = await putItem(id,pet);
      //errors
      if (errorsBack) {
        //Error states
        handlerUpdateList(setErrors, true, errorsBack, errors);
        //Message to the backend
        setMsgErrors(
          Object.keys(errorsBack).reduce(
            (acc, tag) => ({ ...acc, [tag]: errorsBack[tag].message }),
            { ...msgErrors }
          )
        );
      } else {
        handlerUpdateList(setErrors, false, pet, errors);
        navigate("/");
      }
    }
  };

  return (
   <div className="p-3">
   <h2 className="container">Edit {pet.name}</h2>
    <form
      className="container border border-primary rounded-3 mt-3 p-3"
      onSubmit={handlerSubmit}
    >
      <div className="row">
        <div className="col">
          <fieldset className="m-2">
            <label className="form-label" htmlFor="name">
              Pet Name:
            </label>
            <input
              className={`form-control ${errors.name && "border-danger"}`}
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setPet({ ...pet, name: e.target.value });
                //it's necessary consider the specific situation to replicate the backend
                handlerUpdateList(
                  setErrors,
                  e.target.value.length <= 0,
                  { name: "" },
                  errors
                );
              }}
              value={pet.name}
            />
            {errors.name && <p className="text-danger">{msgErrors.name}</p>}
          </fieldset>

          <fieldset className="m-2">
            <label className="form-label" htmlFor="type">
              Pet Type:
            </label>
            <input
              className={`form-control ${errors.type && "border-danger"}`}
              type="text"
              name="type"
              id="type"
              onChange={(e) => {
                setPet({ ...pet, type: e.target.value });
                //it's necessary consider the specific situation to replicate the backend
                handlerUpdateList(
                  setErrors,
                  e.target.value.length < 3,
                  { type: "" },
                  errors
                );
              }}
              value={pet.type}
            />
            {errors.type && <p className="text-danger">{msgErrors.type}</p>}
          </fieldset>

          <fieldset className="m-2">
            <label className="form-label" htmlFor="description">
              Pet Description:
            </label>
            <input
              className={`form-control ${
                errors.description && "border-danger"
              }`}
              type="text"
              name="description"
              id="description"
              onChange={(e) => {
                setPet({ ...pet, description: e.target.value });
                //it's necessary consider the specific situation to replicate the backend
                handlerUpdateList(
                  setErrors,
                  e.target.value.length < 3,
                  { description: "" },
                  errors
                );
              }}
              value={pet.description}
            />
            {errors.description && (
              <p className="text-danger">{msgErrors.description}</p>
            )}
          </fieldset>
        </div>
        <div className="col">
          <p>Skills (Optional):</p>
          <fieldset className="m-2">
            <label className="form-label" htmlFor="skill1">
              Skill 1:
            </label>
            <input
              className={`form-control ${errors.skill1 && "border-danger"}`}
              type="text"
              name="skill1"
              id="skill1"
              onChange={(e) => {
                setPet({ ...pet, skill1: e.target.value});
              }}
              value={pet.skill1}
            />
          </fieldset>

          <fieldset className="m-2">
            <label className="form-label" htmlFor="skill2">
              Skill 2:
            </label>
            <input
              className={`form-control ${errors.skill2 && "border-danger"}`}
              type="text"
              name="skill2"
              id="skill2"
              onChange={(e) => {
                setPet({ ...pet, skill2: e.target.value});
              }}
              value={pet.skill2}
            />
          </fieldset>

          <fieldset className="m-2">
            <label className="form-label" htmlFor="skill3">
              Skill 1:
            </label>
            <input
              className={`form-control ${errors.skill3 && "border-danger"}`}
              type="text"
              name="skill3"
              id="skill3"
              onChange={(e) => {
                setPet({ ...pet, skill3: e.target.value});
              }}
              value={pet.skill3}
            />
          </fieldset>
        </div>
      </div>

      <IconButton icon={icoEdit} typeStyle={"primary"} message={"Edit Pet"} />
    </form>
   </div>
  );
};
export default PetEditFrm;

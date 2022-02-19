import { useContext, useState } from "react";
import PetContext from "../contexts/PetContext";
import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton";
import icoUpload from "../assets/upload-solid.svg";
const PetAddFrm = () => {
  const navigate = useNavigate();
  //Context
  const { postItem } = useContext(PetContext);
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
    const validationsBack = await postItem(pet);
    const errorsBack=validationsBack.errors?validationsBack.errors:validationsBack.keyPattern;
    console.log(errorsBack)
    //errors
    if (errorsBack) {
      //Error states
      handlerUpdateList(setErrors, true, errorsBack, errors);
      //Message to the backend
      validationsBack.errors?
      setMsgErrors(
        Object.keys(errorsBack).reduce(
          (acc, tag) => ({ ...acc, [tag]: errorsBack[tag].message }),
          { ...msgErrors }
        )
      ):handlerUpdateList(setMsgErrors, "Name must be unique", errorsBack, msgErrors);
    } else {
      handlerUpdateList(setErrors, false, pet, errors);
      navigate("/");
    }
  };

  return (
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

      <IconButton icon={icoUpload} typeStyle={"primary"} message={"Add Pet"} />
    </form>
  );
};
export default PetAddFrm;

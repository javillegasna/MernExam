import axios from "axios";
import { useState } from "react";
import API_URL from "../utils/constants";
import PetContext from "./PetContext";

const PetState = (props) => {
  const [pets, setPets] = useState([]);
  //http actions
  const deleteItem = (id) => {
    axios
      .delete(`${API_URL}/pet/${id}`)
      .then((res) =>
        setPets(pets.filter((pet) => res.data._id !== pet._id))
      )
      .catch((err) => console.log(err));
  };
  const getItems = (set) => {
    axios
      .get(`${API_URL}/pet/`)
      .then((res) => {
        set(res.data.pet);
      })
      .catch((err) => console.log(err));
  };
  const getItem = (id, set) => {
    axios
      .get(`${API_URL}/pet/${id}`)
      .then((res) => {
        const{name,
        type,
        description,
        skill1,
        skill2,
        skill3,
        likes}=res.data.pet
        set({name,
          type,
          description,
          skill1,
          skill2,
          skill3,
          likes});
      })
      .catch((err) => console.log(err));
  };
  const postItem = (data) =>
    axios
      .post(`${API_URL}/pet/`, data)
      .then((res) => {
        const { pet } = res.data;
        setPets([pet, ...pets]);
      })
      .catch((err) => err.response.data.data.errors);
  const putItem = (id, data) =>
    axios
      .put(`${API_URL}/pet/${id}`, data)
      .then((res) => {
        const { pet } = res.data;
        const filteredItems = pets.filter(
          //importan to change for de name used on api
          (pet) => res.data.pet._id !== pet._id
        );
        setPets([pet, ...filteredItems]);
      })
      .catch((err) => err.response.data.data.errors);

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,
        deleteItem,
        getItems,
        getItem,
        postItem,
        putItem,
      }}
    >
      {props.children}
    </PetContext.Provider>
  );
};

export default PetState;

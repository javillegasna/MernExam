import React, { useContext, useEffect } from "react";
import PetList from "../Components/PetList";
import PetContext from "../contexts/PetContext";
import Header from "../layout/Header";

const Main = () => {
  const { setPets, getItems } = useContext(PetContext);
  useEffect(() => {
    getItems(setPets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <Header route={"/pets/new"} message={"add a pet to the shelter"} />
      <div className="card container">
        <h2 className="card-body" style={{ fontSize: "20px" }}>
          These pets are looking for a good home
        </h2>
      </div>
      <PetList/>
    </main>
  );
};

export default Main;

import React, { useContext, useEffect } from "react";
import PetContext from "../contexts/PetContext";

const Main = () => {
  const { products, setProducts, getItems } = useContext(PetContext);
  useEffect(() => {
    getItems(setProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(products);
  return (
    <>
    <h1>App is running</h1>
    </>
  );
};

export default Main;

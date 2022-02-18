import React, { useContext, useEffect } from "react";
import ProductsContext from "../contexts/ProductsContext";

const Main = () => {
  const { products, setProducts, getItems } = useContext(ProductsContext);
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

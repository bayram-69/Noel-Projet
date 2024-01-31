import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Productlist from "../components/Productlist";
import CreateProduct from "../components/CreateProduct";

function ProductsPage() {
  const products = useLoaderData();

  const [update, setUpdate] = useState(false);
  const [production, setProduction] = useState(products);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`).then((res) => {
      setProduction(res.data);
      setUpdate(false);
    });
  }, [update]);

  return (
    <div>
      <Productlist products={production} />
      <CreateProduct setUpdate={setUpdate} />
    </div>
  );
}

export default ProductsPage;

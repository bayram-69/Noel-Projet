import { useLoaderData } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

function SingleProductPage() {
  const products = useLoaderData();

  return (
    <div>
      <SingleProduct products={products} />
    </div>
  );
}

export default SingleProductPage;

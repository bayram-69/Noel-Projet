import { useLoaderData } from "react-router-dom";
import Manufacturerlist from "../components/Manufacturerlist";

function ManufacturerPage() {
  const products = useLoaderData();
  return (
    <div>
      <Manufacturerlist products={products} />
    </div>
  );
}

export default ManufacturerPage;

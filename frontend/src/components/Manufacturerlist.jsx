import { useLoaderData } from "react-router-dom";
import { useState } from "react";

function Manufacturerlist() {
  const products = useLoaderData();
  const [selectedManufacturer, setSelectedManufacturer] = useState("All");

  const allManufacturers = [
    "France",
    "United-Kingdom",
    "Spain",
    "Germany",
    "Danemark",
    "USA",
  ];

  const handleClick = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  const filteredProducts = products.filter((p) =>
    selectedManufacturer === "All"
      ? true
      : p.production_country === selectedManufacturer
  );

  return (
    <div className="productList">
      <div className="manufacturerContainer">
        <div className="filtered">
          <div>
            <div className="">
              <h2>Filters </h2>
              <p>Filter by manufacturer:</p>
              <select
                value={selectedManufacturer}
                className="filteredSelect"
                onChange={(e) => handleClick(e.target.value)}
              >
                <option value="All">All</option>
                {allManufacturers.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {filteredProducts.map((p) => (
          <ul key={p.id}>
            <li className="manufacturer">
              <h1>{p.name}</h1>
              <p>{p.production_country}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Manufacturerlist;

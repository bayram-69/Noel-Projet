import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useForm } from "react-hook-form";

function CreateProduct({ setUpdate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      category_id: data.category,
      fav: 0,
      manufacturer_id: data.manufacturer,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/product`, productData)
      .then(() => {
        setUpdate(true);
        reset();
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div className="form">
      <h2 className="form-h2">Add products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputProduct">
          <div className="inputProduct">
            <input
              type="text"
              name="name"
              required
              placeholder="Product Name"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("name", {
                required: "This field is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name?.message}</span>
            )}
          </div>

          <div className="inputProduct">
            <input
              type="number"
              name="quantity"
              required
              placeholder="Quantity"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("quantity", {
                required: "This field is required",
                valueAsNumber: "A number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
                min: {
                  value: 1,
                  message: "Quantity must be at least 1",
                },
              })}
            />
            {errors.quantity && (
              <span className="text-red-500">{errors.quantity?.message}</span>
            )}
          </div>

          <div className="inputProduct">
            <input
              type="number"
              name="price"
              required
              placeholder="Price"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("price", {
                required: "This field is required",
                valueAsNumber: "A number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
                min: {
                  value: 1,
                  message: "Price must be at least 1",
                },
              })}
            />
            {errors.price && (
              <span className="text-red-500">{errors.price?.message}</span>
            )}
          </div>

          <div className="inputProduct">
            <select
              name="category"
              required
              className="inputProducts"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("category", {
                required: "Ce champ est obligatoire",
                valueAsNumber: "Un nombre est obligatoire",
              })}
            >
              <option value="">---</option>
              <option value="1">book</option>
              <option value="2">toy</option>
              <option value="3">plsuh</option>
              <option value="4">high-tech</option>
              <option value="5">sport</option>
              <option value="6">food</option>
              <option value="7">clothes</option>
              <option value="8">other</option>
              <option value="9">game</option>
              <option value="10">video game</option>
              <option value="11">multimedia</option>
              <option value="12">kitchen</option>
              <option value="13">jewel</option>
            </select>
            {errors.category_id && (
              <span className="text-red-500">
                {errors.category_id?.message}
              </span>
            )}
          </div>

          <div className="inputProduct">
            <select
              name="manufacturer"
              required
              className="inputProducts"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("manufacturer", {
                required: "Ce champ est obligatoire",
                valueAsNumber: "Un nombre est obligatoire",
              })}
            >
              <option value="">---</option>
              <option value="1">France</option>
              <option value="2">Unided-Kingdom</option>
              <option value="3">Spain</option>
              <option value="4">Germany</option>
              <option value="5">Danemark</option>
              <option value="6">USA</option>
            </select>
            {errors.manufacturer_id && (
              <span className="text-red-500">
                {errors.manufacturer_id?.message}
              </span>
            )}
          </div>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

CreateProduct.propTypes = {
  setUpdate: PropTypes.func.isRequired,
};

export default CreateProduct;

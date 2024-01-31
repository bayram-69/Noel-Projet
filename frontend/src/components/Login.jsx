/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import axios from "axios";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { setAuth } = useOutletContext();
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, data)
        .then((res) => {
          setAuth(res.data);
          localStorage.setItem("accessVisible", true);
          navigate("/products");
        })
        .catch((error) => {
          setErr(error.response.data.message);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="santalist">Complete the following fields</h1>
      <div className="login-container">
        <div className="name-login">
          <label htmlFor="mail">Your email</label>
          <input
            className="input-login"
            type="email"
            name="mail"
            {...register("mail", { required: "Please enter your email" })}
          />
          {errors.mail && (
            <p role="alert" className="">
              {errors.mail?.message}
            </p>
          )}
        </div>

        <div className="name-login">
          <label htmlFor="password">Your password</label>
          <input
            className="input-login"
            type="password"
            name="password"
            {...register("password", {
              required: "Please enter your password",
            })}
          />
          {errors.password && (
            <p role="alert" className="">
              {errors.password?.message}
            </p>
          )}
          {err ? (
            <p role="alert" className="">
              {err}
            </p>
          ) : null}
        </div>
        <button type="submit" className="button-login">
          Log in
        </button>
      </div>
    </form>
  );
}

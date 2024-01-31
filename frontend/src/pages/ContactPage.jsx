/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import noel from "../assets/noel-1.png";

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        data
      );

      if (response.status === 201) {
        toast.success(response.data.message);
        reset();
        navigate("/products");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="contactPage">
      <div>
        <img src={noel} alt="père noel" />
      </div>
      <div className="contact-container">
        <div className="santalist">
          <h2 className="">Contact Us</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="name-login">
              <label htmlFor="name" className="">
                Your name:
              </label>
              <input
                className="input-login"
                type="text"
                name="name"
                {...register("name", {
                  required: "This field is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                })}
              />
              {errors.name && <span className="">{errors.name.message}</span>}
            </div>

            <div className="name-login">
              <label htmlFor="email" className="">
                Your email:
              </label>
              <input
                className="input-login"
                type="email"
                {...register("email", {
                  pattern: {
                    value: /[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}/,
                    message:
                      "Please enter a valid email address like name@example.com",
                  },
                  required: "This field is required",
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="name-login">
            <label htmlFor="message" className="">
              Message:
            </label>
            <textarea
              className="text-contact"
              {...register("message", {
                required: "This field is required",
                minLength: { value: 7, message: "Minimum 7 characters" },
              })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>
          <button type="submit" className="button-contact">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

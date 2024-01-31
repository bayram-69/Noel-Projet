/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, data)
      .then((res) => console.info(res.data));
    localStorage.setItem("accessVisible", true);
    navigate("/login");
  };

  return (
    <div className="registration">
      <h1 className="santalist">Complete the following fields</h1>
      <form
        className="registration-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="name-registration">
          <label htmlFor="firstname" className="">
            Firstname
          </label>
          <input
            className="input-registration"
            name="firstname"
            type="text"
            placeholder="John"
            {...register("firstname", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Your first name must be at least 2 characters long",
              },
              pattern: {
                value: /[A-Za-z]+$/,
                message: "Your first name should only contain letters",
              },
            })}
          />
          {errors.firstname && (
            <p role="alert" className="">
              {errors.firstname?.message}
            </p>
          )}
        </div>

        <div className="name-registration">
          <label htmlFor="lastname" className="">
            Last Name
          </label>
          <input
            className="input-registration"
            name="lastname"
            type="text"
            placeholder="Doe"
            {...register("lastname", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Your last name must be at least 2 characters long",
              },
              pattern: {
                value: /[A-Za-z]+$/,
                message: "Your last name should only contain letters",
              },
            })}
          />
          {errors.lastname && (
            <p role="alert" className="">
              {errors.lastname?.message}
            </p>
          )}
        </div>

        <div className="name-registration">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            className="input-registration"
            name="email"
            type="email"
            placeholder="johndoe99@doe.fr"
            {...register("mail", {
              required: "This field is required",
              pattern: {
                value: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/,
                message:
                  "Your email does not have the correct syntax, e.g., johndoe@doe.fr",
              },
            })}
          />
          {errors.email && (
            <p role="alert" className="">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="name-registration">
          <label htmlFor="confirm-email" className="">
            Confirm Email
          </label>
          <input
            className="input-registration"
            name="confirm-email"
            type="email"
            placeholder="johndoe99@doe.fr"
            {...register("confirmEmail", {
              required: "You must confirm your email",
              validate: (value) =>
                value === watch("mail") || "Emails do not match",
            })}
          />
          {errors.confirmemail && (
            <p role="alert" className="">
              {errors.confirmemail?.message}
            </p>
          )}
        </div>

        <div className="name-registration">
          <label htmlFor="password" className="l">
            Password
          </label>
          <input
            className="input-registration"
            name="password"
            type="password"
            placeholder="**********"
            {...register("password", {
              required: "This field is required",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message:
                  "Your password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special character",
              },
            })}
          />
          {errors.password && (
            <p role="alert" className="">
              {errors.password?.message}
            </p>
          )}
        </div>

        <div className="name-registration">
          <label htmlFor="confirm-password" className="">
            Confirm Password
          </label>
          <input
            className="input-registration"
            name="confirm-password"
            type="password"
            placeholder="**********"
            {...register("confirmPassword", {
              required: "You must confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmpassword && (
            <p role="alert" className="">
              {errors.confirmpassword?.message}
            </p>
          )}
        </div>
        <div className="name-registration">
          <label htmlFor="birthdate" className="">
            Date of Birth
          </label>
          <input
            className="input-registration"
            name="birthdate"
            type="date"
            {...register("birthdate", {
              required: "This field is required",
              pattern: {
                value:
                  /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/,
                message:
                  "You must provide a date in the correct format, e.g., YYYY/MM/DD",
              },
            })}
          />
          {errors.birthdate && (
            <p role="alert" className="">
              {errors.birthdate?.message}
            </p>
          )}
        </div>

        <button type="submit" className="button-registration">
          Submit
        </button>
      </form>
    </div>
  );
}

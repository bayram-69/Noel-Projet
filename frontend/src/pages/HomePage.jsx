import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Snowfall from "react-snowfall";
import perenoel from "../assets/noel1.png";

function HomePage({ auth }) {
  return (
    <div>
      <Snowfall snowflakeCount={100} />
      <div className="image-homepage">
        <img src={perenoel} alt="père noel" />
      </div>
      <div className="waviy">
        <span style={{ "--i": 1 }}>W</span>
        <span style={{ "--i": 2 }}>E</span>
        <span style={{ "--i": 3 }}>L</span>
        <span style={{ "--i": 4 }}>C</span>
        <span style={{ "--i": 5 }}>O</span>
        <span style={{ "--i": 6 }}>M</span>
        <span style={{ "--i": 7 }}>E</span>
      </div>
      <p className="presentation">
        Welcome to our Santa website, where the magic of the holidays comes to
        life.
        <br />
        Choose gifts, add them to your basket, create your favorites list, and
        above all communicate your wishes directly to Santa Claus.
        <br />A magical experience just a click away for unforgettable parties!
      </p>
      {auth?.token ? (
        <div className="link">
          <NavLink to="/products">My product</NavLink>
          <NavLink to="/manufacturers">Manufacturer</NavLink>
          <NavLink to="/santalist">My santaList</NavLink>
          {auth.role === "admin" ? (
            <NavLink className="" to="/admin">
              Administration
            </NavLink>
          ) : null}
        </div>
      ) : (
        <div className="link-button">
          <NavLink className="link-button" to="/login">
            Login in
          </NavLink>
          <NavLink className="" to="/registration">
            Registration
          </NavLink>
        </div>
      )}
    </div>
  );
}

HomePage.propTypes = {
  auth: PropTypes.shape().isRequired,
};

export default HomePage;

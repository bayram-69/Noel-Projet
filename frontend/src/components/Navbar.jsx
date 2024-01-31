import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/logos/logo5.jpg";

function Navbar({ auth }) {
  return (
    <div className="header">
      <NavLink className="m-2" to="/products">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>

      <div className="link">
        <NavLink to="/products">My product</NavLink>
        <NavLink to="/manufacturers">Manufacturer</NavLink>
        <NavLink to="/santalist">My santaList</NavLink>
        <NavLink to="/favorite">Favorites</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {auth.role === "admin" && (
          <NavLink className="" to="/admin">
            Administration
          </NavLink>
        )}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  auth: PropTypes.shape().isRequired,
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/logos/logo.png";

function Navbar({ auth }) {
  return (
    <div className="header">
      <NavLink to="/products">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>

      <div className="link">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/manufacturers">Manufacturers</NavLink>
        <NavLink to="/santalist">Santalist</NavLink>
        <NavLink to="/favorite">Favorites</NavLink>
        <NavLink to="/game">Game</NavLink>
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

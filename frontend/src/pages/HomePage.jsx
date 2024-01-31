import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import perenoel from "../assets/perenoel.png";

function HomePage({ auth }) {
  return (
    <div>
      <img className="" src={perenoel} alt="père noel" />
      {auth?.token ? (
        <div className="link">
          <NavLink to="/products">My product</NavLink>
          <NavLink to="/manufacturers">Manufacturer</NavLink>
          <NavLink to="/santalist">My santaList</NavLink>
          {auth.role === "admin" && (
            <NavLink className="" to="/admin">
              Administration of site
            </NavLink>
          )}
        </div>
      ) : (
        <div className="link">
          <NavLink className="" to="/login">
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

export default HomePage;

HomePage.propTypes = {
  auth: PropTypes.shape().isRequired,
};

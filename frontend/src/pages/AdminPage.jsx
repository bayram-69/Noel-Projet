import React from "react";
import PropTypes from "prop-types";
import CreateProduct from "../components/CreateProduct";

function AdminPage({ setUpdate }) {
  return (
    <div>
      <div className="addProduct">
        <CreateProduct setUpdate={setUpdate} />
      </div>
    </div>
  );
}

export default AdminPage;

AdminPage.propTypes = {
  setUpdate: PropTypes.func.isRequired,
};

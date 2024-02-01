import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Snowfall from "react-snowfall";
import Navbar from "./components/Navbar";

import BasketContextProvider from "./context/BasketCount";

import "./App.css";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [auth, setAuth] = useState({});
  return (
    <BasketContextProvider>
      <Snowfall snowflakeCount={100} />
      <Navbar auth={auth} setAuth={setAuth} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      <Outlet context={{ auth, setAuth }} />
    </BasketContextProvider>
  );
}

export default App;

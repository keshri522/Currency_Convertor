import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  // this function will redricts user to login page when clicked
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="container box">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="text-dark display-4">
              Welcome to Currency Converter
            </h1>
            <button onClick={handleClick} className="btn btn-success p-2 mt-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

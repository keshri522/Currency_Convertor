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
      <div className="container mts">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="text-dark display-4">
              Welcome to Currency Converter
            </h1>
            <div className="mt-5">
              <h5>
                {" "}
                <h5 className="line">
                  This Webapplication is a currency converter tool, allowing
                  users to convert between different currencies.Users can use
                  this tool to get real-time exchange rates and perform currency
                  conversions.
                </h5>
              </h5>
            </div>
            <button onClick={handleClick} className="btn btn-success p-2 mt-3">
              Get Started
            </button>
          </div>
          <div className="col-md-6">
            <div className="mt-5 d-flex justify-content-center">
              <div className="display-5">
                <i
                  type="button"
                  onClick={() => {
                    window.open("https://github.com/keshri522", "_blank");
                  }}
                  class="fa-brands fa-github"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

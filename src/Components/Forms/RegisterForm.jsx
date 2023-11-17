import React from "react";

const RegisterForm = () => {
  return (
    <div className="container">
      <div className="row box">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control transparent"
              id="floatingName"
              placeholder="Your Name"
            ></input>
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control transparent"
              id="floatingEmail"
              placeholder="name@example.com"
            ></input>
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control transparent"
              id="floatingPassword"
              placeholder="Password"
            ></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control transparent"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
            ></input>
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>
          <a className="margin" href="#alreadyLogin">
            Already have an account?
          </a>
          <button
            className="btn btn-outline-success mt-3 w-100 p-1"
            type="submit"
          >
            Sign Up
          </button>
          <div className="d-flex justify-content-between change mt-3">
            <button className="btn btn-outline-warning w-100 p-1">
              <i className="fab fa-github icons"></i> Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

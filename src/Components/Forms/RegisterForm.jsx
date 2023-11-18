import React from "react";
import { Link } from "react-router-dom";
const RegisterForm = ({ formdata, hanldeChange, SignupUser, loading }) => {
  // accepting the props here
  return (
    <div className="container">
      <div className="row box">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              name="name"
              type="text"
              className="form-control transparent"
              id="floatingName"
              placeholder="Your Name"
              value={formdata.name}
              onChange={hanldeChange}
            ></input>
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="email"
              type="email"
              value={formdata.email}
              onChange={hanldeChange}
              className="form-control transparent"
              id="floatingEmail"
              placeholder="name@example.com"
            ></input>
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="password"
              type="password"
              value={formdata.passwprd}
              onChange={hanldeChange}
              className="form-control transparent"
              id="floatingPassword"
              placeholder="Password"
            ></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="cpassword"
              type="password"
              value={formdata.cpassword}
              onChange={hanldeChange}
              className="form-control transparent"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
            ></input>
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>
          <Link className="margin nav-link" to="/login">
            Already have an account?
          </Link>
          {/* condtionally rendering the button based on loading props */}
          {loading ? (
            <button
              onClick={SignupUser}
              className="btn btn-outline-success mt-3 w-100 p-1"
              type="submit"
            >
              Processing...
            </button>
          ) : (
            <button
              onClick={SignupUser}
              className="btn btn-outline-success mt-3 w-100 p-1"
              type="submit"
            >
              Sign Up
            </button>
          )}
          <div className="d-flex justify-content-between change mt-3">
            <button className="btn btn-outline-warning w-100 p-1">
              <i className="fab fa-github icons"></i> Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

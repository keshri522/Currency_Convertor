import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
const RegisterForm = ({ formdata, hanldeChange, SignupUser, loading }) => {
  const navigate = useNavigate();
  // this function will allow user to login or singup using the google auth
  const login = useGoogleLogin({
    // here token i dycrypeted if i want to get the details of user based on login i need to use jwt-dcode for this
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        // sending all the response which is user data to localStorage to access globally and also make the data persistent
        // console.log(res); just for debugging
        if (res.status === 200) {
          // if wwill work only successful status code
          localStorage.setItem("RegisterData", JSON.stringify(res.data));
          localStorage.setItem("loading", JSON.stringify(1));
          navigate("/dashboard"); // redircetto the home page
        }
      } catch (error) {
        // console.log(error.message);
        toast.error(error.message);
      }
    },
  });

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
            <button
              onClick={() => login()}
              className="btn btn-outline-warning w-100 p-1"
            >
              <i className="fab fa-github icons"></i> Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

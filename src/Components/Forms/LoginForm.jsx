import React from "react";
import { Link } from "react-router-dom";
const LoginForm = ({ SiginpUser, loading, formdata, hanldeChange }) => {
  return (
    <div className="container">
      <div className="row box">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              name="email"
              type="email"
              value={formdata.email}
              className="form-control transparent"
              id="floatingInput"
              onChange={hanldeChange}
              placeholder="name@example.com"
            ></input>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="password"
              type="password"
              value={formdata.password}
              className="form-control transparent"
              id="floatingPassword"
              placeholder="Password"
              onChange={hanldeChange}
            ></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="d-flex justify-content-between">
            <Link className="nav-link" to="/forgotpassword">
              Forgot Password?
            </Link>
            <Link to="/register" className="nav-link">
              Don't have an account?
            </Link>
          </div>
          {/* condtionally rendering of singin button based on the loading props */}
          {loading ? (
            <button
              onClick={SiginpUser}
              className="btn btn-outline-danger mt-3 w-100 p-2"
              type="submit"
            >
              Signing...
            </button>
          ) : (
            <button
              onClick={SiginpUser}
              className="btn btn-outline-danger mt-3 w-100 p-2"
              type="submit"
            >
              Sign In
            </button>
          )}
          <div className="mt-3">
            <button className="btn btn-outline-warning w-100 p-2">
              {/* font awesome icons */}
              <i className="fab fa-google icons"></i> Sign In with Google
            </button>
          </div>
          <div className="mt-3">
            <button className="btn btn-outline-dark w-100 p-2">
              <i className="fab fa-github icons"></i> Sign In with Gtihub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

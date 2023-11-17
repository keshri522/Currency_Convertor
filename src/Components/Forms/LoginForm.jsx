import React from "react";

const LoginForm = () => {
  return (
    <div className="container">
      <div className="row box">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control transparent"
              id="floatingInput"
              placeholder="name@example.com"
            ></input>
            <label htmlFor="floatingInput">Email address</label>
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
          <div className="d-flex justify-content-between">
            <a href="#forgotPassword">Forgot Password?</a>
            <a href="#createAccount">Don't have an account?</a>
          </div>
          <button
            className="btn btn-outline-primary mt-3 w-100 p-1"
            type="submit"
          >
            Sign In
          </button>
          <div className="mt-3">
            {/* Include Google Icons */}
            <button className="btn btn-outline-warning w-100 p-1">
              <i className="fab fa-google icons"></i> Sign In with Google
            </button>
          </div>
          <div className="mt-3">
            <button className="btn btn-outline-dark w-100 p-1">
              <i className="fab fa-github icons"></i> Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

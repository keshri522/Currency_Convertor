import React from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import ToggleModeButton from "../Mode/ToggleMode";
const Nav = () => {
  return (
    <>
      <div className="container-fluid  p-3">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-around">
            <ToggleModeButton></ToggleModeButton>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

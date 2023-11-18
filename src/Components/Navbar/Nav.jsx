import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import ToggleModeButton from "../Mode/ToggleMode";
const Nav = () => {
  const [boolean, Setboolean] = useState();

  const gettingdata = () => {
    let data = localStorage.getItem("loading");
    if (data) {
      Setboolean(data);
    } else {
      Setboolean("");
    }
  };
  useEffect(() => {
    gettingdata();
  }, [boolean]);

  return (
    <>
      <div className="container-fluid  p-3">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-around">
            <ToggleModeButton></ToggleModeButton>
            {/* conditionlly showing the login button based on localstroge but i can do this with hte help of redux useSelector hook  */}

            {boolean ? (
              <Link className="nav-link" to="/login">
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
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

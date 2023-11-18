import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleModeButton from "../Mode/ToggleMode";

const Nav = () => {
  const navigate = useNavigate();
  const [data, Setdata] = useState({});
  const [boolean, setBoolean] = useState(getDataFromLocalStorage());
  // this function first get the data from local storage
  function getDataFromLocalStorage() {
    const data = localStorage.getItem("loading");
    return data || "";
  }
  useEffect(() => {
    const user = localStorage.getItem("RegisterData");
    if (user) {
      Setdata(JSON.parse(user));
    } else {
      Setdata(null);
    }
  }, []);
  const handleStorageChange = () => {
    setBoolean(getDataFromLocalStorage());
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [boolean]); // changes or run theuse effect based on boolean changes
  const deleteUser = () => {
    // To remove specific items from localStorage
    localStorage.removeItem("RegisterData");
    localStorage.removeItem("loading");
    // after deeting redirects to home page
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-around">
            <ToggleModeButton></ToggleModeButton>
            {boolean ? (
              <Link onClick={deleteUser} className="nav-link" to="/login">
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
            {data && (data.given_name || data.name) ? (
              <h5>{data.given_name || data.name}</h5>
            ) : (
              <Link className="nav-link" to="/register">
                Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

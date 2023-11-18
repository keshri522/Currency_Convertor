import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

import Register from "../auth/Register";
import UpdatePassword from "../Forms/UpdatePassword";
import Login from "../auth/Login";
import ForgotPassword from "../Forms/ForgotPassword";
import ChangePassowrd from "../Forms/ChangePassword";
// creating a function path that will redircts user based on the therei endpoints

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/forgotpassword"
          element=<ForgotPassword></ForgotPassword>
        ></Route>
        <Route
          path="/changepassword"
          element={<ChangePassowrd></ChangePassowrd>}
        ></Route>
        <Route
          path="/updatepassword"
          element={<UpdatePassword></UpdatePassword>}
        ></Route>
      </Routes>
    </>
  );
};
export default Path;

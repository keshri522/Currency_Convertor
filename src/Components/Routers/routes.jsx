import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
// creating a function path that will redircts user based on the therei endpoints

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
      </Routes>
    </>
  );
};
export default Path;

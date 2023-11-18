import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// this is simle form that ask user to enter the email addres while forgot password
const UpdatePassword = () => {
  const navigate = useNavigate();

  const [password, Setpassword] = useState({
    element1: "",
    element2: "",
  });
  // this method or function will change old password to nbew password once user try to forgot the password
  const ChangePassword = async (e) => {
    e.preventDefault();

    try {
      // first verify the confirm and password are matched
      if (password.element1 !== password.element2) {
        toast.error("Passwords do not match");
        return;
      }
      // first need to find the old localstorgage password and modify with new password
      const Oldpassword = localStorage.getItem("RegisterData");
      if (Oldpassword) {
        const newPassword = JSON.parse(Oldpassword);
        newPassword.password = password.element1;
        newPassword.cpassword = password.element2;
        // after saving send to the localstorage
        localStorage.setItem("RegisterData", JSON.stringify(newPassword));
        navigate("/");
        toast.success("Successfully updated password");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    Setpassword({ ...password, [e.target.name]: e.target.value });
  };
  console.log(password);
  // console.log(email);
  // console.log(localemail.email); // just for debugging
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center box">
          <div className="col-md-6">
            <input
              name="element1"
              type="password"
              className="form-control transparent remove p-3  mb-3"
              placeholder="Enter new Password"
              onChange={handleChange}
              value={password.element1}
            />
            <input
              name="element2"
              type="password"
              className="form-control transparent remove p-3 mt-2 "
              placeholder="Enter new Password"
              onChange={handleChange}
              value={password.element2}
            />

            <div>
              {/* once the email is present in localstroage is verifefd then i will redirects to the updatepassword page */}
              <button
                onClick={ChangePassword}
                className="btn btn-warning w-100 mt-4 p-2"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;

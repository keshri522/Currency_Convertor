import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// this is simle form that ask user to enter the email addres while forgot password
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [localemail, Setlocalemail] = useState("");

  // this function will check if the email is present in the local stroage then only go to the update password page otherwise throw and errro to ui
  const ChekcPassword = (e) => {
    // first get the email from local stroage
    const data = localStorage.getItem("RegisterData");
    if (data) {
      Setlocalemail(JSON.parse(data)); // adding the email
    } else {
      Setlocalemail("");
    }

    // now matching the email
    if (localemail.email !== email) {
      toast.error("Invaild Credentials!");
    } else {
      // redirecting to the update password page
      navigate("/updatepassword");
    }
  };
  const handleChange = (e) => {
    Setemail(e.target.value);
  };
  // console.log(email);
  // console.log(localemail.email); // just for debugging
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center box">
          <div className="col-md-6">
            <input
              type="text"
              name="email"
              className="form-control transparent remove "
              placeholder="Enter your email address"
              onChange={handleChange}
              value={email}
            />
            <div>
              {/* once the email is present in localstroage is verifefd then i will redirects to the updatepassword page */}
              <button
                onClick={ChekcPassword}
                className="btn btn-primary w-100 mt-3 p-2"
              >
                Verify Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

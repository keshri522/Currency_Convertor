import React from "react";
// this is simle form that ask user to enter the email addres while forgot password
const ForgotPassword = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center box">
          <div className="col-md-6">
            <input
              type="text"
              name=""
              className="form-control transparent remove "
              placeholder="Enter your email address"
            />
            <div>
              {/* once the email is present in localstroage is verifefd then i will redirects to the updatepassword page */}
              <button className="btn btn-primary w-100 mt-3 p-2">
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

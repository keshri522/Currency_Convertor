import React from "react";
// this is simle form that ask user to enter the email addres while forgot password
const ChangePassowrd = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center box">
          <div className="col-md-6">
            <input
              type="password"
              name=""
              className="form-control transparent remove "
              placeholder="Enter new Password"
            />
            <input
              type="password"
              name=""
              className="form-control transparent remove "
              placeholder="Confirm Password"
            />
            <div>
              <button className="btn btn-warning w-100 mt-3 p-2">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassowrd;

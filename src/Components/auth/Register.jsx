import React, { useState } from "react";
import RegisterForm from "../Forms/RegisterForm";
import { toast } from "react-toastify";

const Register = () => {
  const [loading, Setloading] = useState(false); // for showing the condtional rendering based on the state
  // this is the parent component that handles all the functions of its child component, which is the login page
  const [formdata, Setformdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // this function will first verify all the form validation then if done then send the details to the local storage for further verification
  const SignupUser = async (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regular expression for email validation
    e.preventDefault(); // preventing the form from being refreshed on click
    // validating the forms first
    try {
      if (
        formdata.name.length === 0 ||
        formdata.email.length === 0 ||
        formdata.password.length === 0 ||
        formdata.cpassword.length === 0
      ) {
        toast.error("Please fill in all the fields");
        return;
      }
      // this is for email format validation
      if (!emailRegex.test(formdata.email)) {
        toast.error("Invalid email format");
        return;
      }

      // check if both passwords are the same then only proceed
      if (formdata.password !== formdata.cpassword) {
        toast.error("Password and Confirm Password should be the same");
        return;
      }

      // If all validations pass, you can proceed with further actions, such as storing data in localStorage.
      Setloading(true);
      localStorage.setItem("RegisterData", JSON.stringify(formdata));
      setTimeout(() => {
        // to show some lading effect with some delay
        Setloading(false);
      }, 1000);
    } catch (error) {
      // console.log(error);
      Setloading(false);
      toast.error("Something went wrong");
    }
  };

  const hanldeChange = (e) => {
    const { value, name } = e.target; // destructuring the object from e.target
    Setformdata({ ...formdata, [name]: value });
    // console.log(name, value); // just for debugging
  };

  return (
    <>
      {/* Sending all the data as props to the child */}
      <RegisterForm
        SignupUser={SignupUser}
        loading={loading}
        formdata={formdata}
        Setformdata={Setformdata}
        hanldeChange={hanldeChange}
      ></RegisterForm>
    </>
  );
};

export default Register;

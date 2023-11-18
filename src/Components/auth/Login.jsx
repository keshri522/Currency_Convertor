import React, { useState } from "react";
import LoginForm from "../Forms/LoginForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // this function will return all the data which is present in local stroage for validation
  const navigate = useNavigate();
  const [userdata, Setuserdata] = useState([]);

  const [loading, Setloading] = useState(false); // for showing the condtional rendering based on the state
  // this is the parent component that handles all the functions of its child component, which is the login page
  const [formdata, Setformdata] = useState({
    email: "",
    password: "",
  });
  // this function will first verify all the form validation then if done then send the details to the local storage for further verification
  const SiginpUser = async (e) => {
    e.preventDefault(); // preventing the form from being refreshed on click
    // validating the forms first
    try {
      if (formdata.email.length === 0 || formdata.password.length === 0) {
        toast.error("Please fill in all the fields");
        return;
      }

      // first need to validate that email is present or not
      let data = localStorage.getItem("RegisterData");
      if (data) {
        Setuserdata(JSON.parse(data));
      }
      // now checking the email and the password both are same or not
      const emailCheck = userdata.email;
      // same for the password field
      const passwordcheck = userdata.password; // means the password matches with local stroage password
      // here i am vaalidating the emails and password from the local storage
      if (emailCheck !== formdata.email) {
        toast.error("Invalid Credentials");
        return;
      }
      if (passwordcheck !== formdata.password) {
        toast.error("Invalid Credentials");
        return;
      }
      // If all validations pass, you can proceed with further actions, such as storing data in localStorage.
      Setloading(true);

      setTimeout(() => {
        // to show some lading effect with some delay
        Setloading(false);
        toast.success("Login Suceessfully");
        navigate("/");
      }, 1000);
    } catch (error) {
      //   console.log(error); just for debugging
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
      <LoginForm
        SiginpUser={SiginpUser}
        loading={loading}
        formdata={formdata}
        hanldeChange={hanldeChange}
      ></LoginForm>
    </>
  );
};

export default Login;

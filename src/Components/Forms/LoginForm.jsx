import { Link, useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
const LoginForm = ({ SiginpUser, loading, formdata, hanldeChange }) => {
  const navigate = useNavigate();
  // this function will allow user to access the credentials direct from the google auth no need  to sign up..
  const login = useGoogleLogin({
    // here token i dycrypeted if i want to get the details of user based on login i need to use jwt-dcode for this
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        // sending all the response which is user data to localStorage to access globally and also make the data persistent
        // console.log(res); just for debugging
        if (res.status === 200) {
          // if wwill work only successful status code
          localStorage.setItem("RegisterData", JSON.stringify(res.data));
          localStorage.setItem("loading", JSON.stringify(1));
          navigate("/dashboard");
        }
      } catch (error) {
        // console.log(error.message);
        toast.error(error.message);
      }
    },
  });

  return (
    <div className="container">
      <div className="row box">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              name="email"
              type="email"
              value={formdata.email}
              className="form-control transparent"
              id="floatingInput"
              onChange={hanldeChange}
              placeholder="name@example.com"
            ></input>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="password"
              type="password"
              value={formdata.password}
              className="form-control transparent"
              id="floatingPassword"
              placeholder="Password"
              onChange={hanldeChange}
            ></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="d-flex justify-content-between">
            <Link className="nav-link" to="/forgotpassword">
              Forgot Password?
            </Link>
            <Link to="/register" className="nav-link">
              Don't have an account?
            </Link>
          </div>
          {/* condtionally rendering of singin button based on the loading props */}
          {loading ? (
            <button
              onClick={SiginpUser}
              className="btn btn-outline-danger mt-3 w-100 p-2"
              type="submit"
            >
              Signing...
            </button>
          ) : (
            <button
              onClick={SiginpUser}
              className="btn btn-outline-danger mt-3 w-100 p-2"
              type="submit"
            >
              Sign In
            </button>
          )}
          <div className="mt-3">
            <button
              // here using google login on onclick events
              onClick={() => login()}
              className="btn btn-outline-warning w-100 p-2"
            >
              {/* font awesome icons */}
              <i className="fab fa-google icons"></i> Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

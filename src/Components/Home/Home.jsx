import { useNavigate } from "react-router-dom";
import Currency from "../assest/change.png";
const Home = () => {
  // const navigate = useNavigate();
  // this function will navigate the User to home page
  // const hanldeNaviggate = () => {
  //   navigate("/dashboard"); // navigating to dashboard
  // };
  return (
    <>
      <div className="box">
        <div className="col-md-12 text-center">
          {/* <img className="img img-fluid size" src={Currency} alt="" /> */}
          <h2 className="text-white">
            Welcome to Currency Convertor Appication
          </h2>
          <br />
          <button className="btn btn-outline-warning p-2">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Home;

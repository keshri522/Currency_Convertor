import "./App.css";
import { ToastContainer } from "react-toastify"; // added globally
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Components/Navbar/Nav";
import Path from "./Components/Routers/routes";
function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Nav></Nav>
      <Path></Path>
    </div>
  );
}

export default App;

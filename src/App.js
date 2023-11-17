import "./App.css";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/Forms/LoginForm";
import RegisterForm from "./Components/Forms/RegisterForm";

import ToggleModeButton from "./Components/Mode/ToggleMode";
function App() {
  return (
    <div className="App">
      <ToggleModeButton></ToggleModeButton>
      {/* <Home></Home> */}
      {/* <LoginForm></LoginForm> */}
      <RegisterForm></RegisterForm>
    </div>
  );
}

export default App;

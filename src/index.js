import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google"; // warpping with this to my app
import { HashRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // warrping the app to the google auth to show the or access the with google login and pass the cleint id in environment variable
  <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    <HashRouter>
      <App />
    </HashRouter>
  </GoogleOAuthProvider>
);

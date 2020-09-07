import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./myCssFiles/style.css";
import "./myCssFiles/navbar.css";
import "./favison/css/style.css";
import "./favison/css/responsive.css";
import "./myCssFiles/form.css";
import "./myCssFiles/card.css";
import "./myCssFiles/userForm.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Token " + token;
  }
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js' 
const io = require("socket.io-client");



ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

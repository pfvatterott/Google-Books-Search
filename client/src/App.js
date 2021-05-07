import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavBar from "./components/Navbar"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import API from "./utils/API";
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css';



function App() {
  return (
    <Router>
    <div>
      <CustomNavBar />
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </div>
    </Router>
  );
}


export default App;

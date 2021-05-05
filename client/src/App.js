import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomNavBar from "./components/Navbar"
import API from "./utils/API";
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css';


function App() {
  return (
    <BrowserRouter>
    <div>
      <CustomNavBar />

    </div>
    </BrowserRouter>
  );
}


export default App;

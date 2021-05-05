import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomNavBar from "./components/Navbar"
import Books from "./pages/Books"
import API from "./utils/API";
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css';


function App() {
  return (
    <BrowserRouter>
    <div>
      <CustomNavBar />
      <Books />
    </div>
    </BrowserRouter>
  );
}


export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer } from 'react-materialize';
import CustomNavBar from "./components/Navbar"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Home from "./pages/Home"
import "./style.css"
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css';

function App() {

  return (
    <Router>
    <div className="appParent">
      <CustomNavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
      <Footer className="footer"
        copyrights="© 2021 Copyright Paul Vatterott"

      >
        <h5 className="white-text">
          Powered By Google Books
        </h5>
        <a className="grey-text text-lighten-4" href="https://github.com/pfvatterott">
          My Github
        </a>
        <br></br>
        <a className="grey-text text-lighten-4" href="https://paul-vatterott.com">
          My Portfolio
        </a>
      </Footer>
    </div>
    </Router>
  );
}


export default App;

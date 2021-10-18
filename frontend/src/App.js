import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>  
      <Router>   
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Signup" exact component={Signup}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/Feed" exact component={Feed}/>
          <Route path="/Profile/:id" exact component={Profile}/>
        </Switch>
      </Router>
    </>
  );
};

export default App;


import React from 'react';
import './App.css';
import SearchAppBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Signup from  "./pages/Signup"


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <SearchAppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </div>
    </Router>

    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import SearchAppBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <SearchAppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>

    </div>
  );
};

export default App;

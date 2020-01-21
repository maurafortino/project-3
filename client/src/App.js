import React from 'react';
import './App.css';
import NavigationBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import HowItWorks from "./pages/HowItWorks/works";
import HomeSearchbar from './components/Searchbar/HomeSearchbar';


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <NavigationBar />
        <HomeSearchbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/HowItWorks" component={HowItWorks}/>
        </Switch>
      </div>
    </Router>

    </div>
  );
};

export default App;

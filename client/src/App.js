import React from 'react';
import './App.css';
import NavigationBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Signup from  "./pages/Signup";
import UserPage from "./pages/Users";
import HowItWorks from "./pages/HowItWorks/works";
import PickASubject from "./pages/PickASubject/Subjects";
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/users/:id" component={UserPage} /> */}
          <Route exact path="/HowItWorks" component={HowItWorks}/>
          <Route exact path="/users" component={UserPage}/>
        </Switch>
      </div>
    </Router>

    </div>
  );
};

export default App;

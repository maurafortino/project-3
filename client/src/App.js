import React from 'react';
import './App.css';
import NavigationBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import SignUp from  "./pages/Signup";
import Profile from "./pages/UserPage/UserPage";
import UserPage from "./pages/Users";
import HowItWorks from "./pages/HowItWorks/works";
import PickASubject from "./pages/PickASubject/Subjects";
// import HomeSearchbar from './components/Searchbar/HomeSearchbar';
import Chemistry from './pages/Chemistry/chemistry';
import FormPropsTextFields from "./pages/SellABook/SellBook";


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <NavigationBar />
        {/* <HomeSearchbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/HowItWorks" component={HowItWorks}/>
          <Route exact path="/users" component={UserPage}/>
          <Route exact path="/PickASubject" component={PickASubject}/>
          <Route exact path="/books/:subject" component={Chemistry}/>
          <Route exact path="/UserPage" component={Profile}/>
          <Route exact path="/SellABook" component={FormPropsTextFields}/>
        </Switch>
      </div>
    </Router>

    </div>
  );
};

export default App;

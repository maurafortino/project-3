import React from 'react';
import './App.css';
import SearchAppBar from "./components/Navbar";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
         <SearchAppBar /> 
      <div className="content">
       <Route exact path="/" component={Home}></Route>
      </div>
      </HashRouter>

    </div>
  );
}

export default App;

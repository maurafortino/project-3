import React from 'react';
import SignUpPage from "./pages/Signup";
import {HashRouter, Route, NavLink} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <HashRouter>
          <NavLink path to="/signup">Sign Up</NavLink>


        <div class="content">
          <Route path ="/signup" component={SignUpPage}/>
          </div>
      </HashRouter>
      </div>
  );
}

export default App;

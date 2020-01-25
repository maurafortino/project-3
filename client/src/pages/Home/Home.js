import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";



class Home extends Component {
    render() {
        return (


            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="buttons-div col-12">
                        <button type="button" className="btn btn-dark btn-lg"><Link to="/login">Login</Link></button>
                        <button type="button" className="btn btn-dark btn-lg"><Link to="/signup">Sign up</Link></button>
            
                    </div>
                </div>


            </div>
        );
    }
};

export default Home;
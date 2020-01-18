import React, { Component } from "react";
import "./home.css"

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                    <div className="buttons-div col-12">
                        <button type="button" className="btn btn-dark btn-lg">Login</button>
                        <button type="button" className="btn btn-dark btn-lg">Sign up</button>
                        <div className="description">
                            <p className="lead">A simple and easy way for students to exchange textbooks without the expensive cost.</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        )
    };
};

export default Home;
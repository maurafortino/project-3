import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SearchAppBar from "../../components/Navbar"
import "./home.css"

class Home extends Component {
    render() {
        return (
            <div>
                <SearchAppBar/>
                <div className="container-fluid">
                    <div className="buttons-div">
                        <Button size="large" variant="contained" color="primary" href="#contained-buttons"> Login </Button>
                        <Button size="large" variant="contained" color="primary" href="#contained-buttons"> Signup </Button>
                    </div>
                    <div className="description">
                        <p>A simple and easy way for students to exchange textbooks without the expensive cost.</p>
                    </div>
                </div>
            </div>
        )
    };
};

export default Home;
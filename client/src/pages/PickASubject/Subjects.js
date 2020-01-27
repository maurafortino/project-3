import React, { Component } from "react";
import "./subjects.css";
import AllSubjects from "../../components/SubjectList/SubjectList";



class Subjects extends Component {
    render() {
        return (


            <div className="container-fluid2">
               <AllSubjects />

            </div>
        );
    }
};

export default Subjects;
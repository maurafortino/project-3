import React, { Component } from "react";
import API from "../utils/API";


class UserPage extends Component {
    state = {
        users: [],
        firstName: "",
        lastName: "",
        zipCode: "",
        major: "",
        email: "",
        password: "",
      };

      componentDidMount() {
        this.loadUsers();
      };
    
      loadUsers = () => {
        API.getUsers()
        .then(res =>
          this.setState({users: res.data, firstName: "", lastName: "", zipCode: "", major: "", email: "", password: "", })
          )
        .catch(err => console.log(err));
      };
    render() {
        return (
            <div>
            {this.state.users.length ? (
              <ul>
                {this.state.users.map(user => (
                  <li key={user._id}>
                    {user.firstName}
                    <br/>
                    {user.lastName}
                    <br/>
                    {user.major}
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
        )
    };
};

export default UserPage;
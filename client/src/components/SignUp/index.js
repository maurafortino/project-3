import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import API from "../../utils/API";
import "./index.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Book Exchange
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


class SignUp extends Component {

  state = {
    users: [],
    firstName: "",
    lastName: "",
    zipCode: "",
    major: "",
    email: "",
    password: "",
    message: ""

  };

  componentDidMount() {
    this.loadUsers();
  };

  loadUsers = () => {
    API.getUsers()
    .then(res => {
      this.setState({users: res.data, firstName: "", lastName: "", zipCode: "", major: "", email: "", password: "", })
    })
    .catch(err => console.log(err));
  };

  // saveUser = () => {
  //   API.createUser({
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     zipCode: this.state.zipCode,
  //     major: this.state.major,
  //     email: this.state.email,
  //     password: this.state.password
  //   })
  //     .then(res => this.loadUsers())
  //     .then(alert("signup successful go to login page to login!"))
  //     .catch(err => console.log(err));
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnClick = event => {
    event.preventDefault();
    const { firstName, lastName, zipCode, major, email, password} = this.state;
    // Simple validation
    if(!firstName || !lastName || !zipCode || !major || !email || !password) {
      this.setState({message: "please enter all fields"});
    }
      API.createUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        zipCode: this.state.zipCode,
        major: this.state.major,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadUsers())
        .then(alert("signup successful go to login page to login!"))
        .catch(err => console.log(err));
  }
    // API.findEmail({
    //   email: this.state.email
    // }).then(res => this.saveUser())
    // .catch(err => console.log(err))
    // }

  render() {
    return (

      <Container component="main" maxWidth="xs">
        <div className="form">
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="zipcode"
                  name="zipCode"
                  value={this.state.zipCode}
                  onChange={this.handleInputChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="zipCode"
                  label="Zip Code"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="major"
                  name="major"
                  value={this.state.major}
                  onChange={this.handleInputChange}
                  variant="outlined"
                  fullWidth
                  id="major"
                  label="Major"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleOnClick}
            >
              Sign Up
    </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
                <p>
                  {this.state.message}
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  };
};

export default SignUp;
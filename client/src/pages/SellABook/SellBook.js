import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import  Button  from '@material-ui/core/Button';
import "../../pages/SellABook/index.css";

// class SellBook extends Component {

//   state = {

//     Title: "",
//     Author: "",
//     Year: "",
//     Condition: "",
//     Subject: "",
//     ISBN: "",
//   };

//   componentDidMount() {
//     this.loadUsers();
//   };

//   loadUsers = () => {
//     API.getUsers()
//       .then(res => {
//         this.setState({ users: res.data, Title: "", Author: "", Year: "", Condition: "", Subject: "", ISBN: "", })
//       })
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleOnClick = event => {
//     event.preventDefault();
//     if (this.state.Title && this.state.Author && this.state.Year && this.state.Condition && this.state.Subject && this.state.ISBN) {
//       API.createUser({
//         Title: this.state.Title,
//         Author: this.state.Author,
//         Year: this.state.Year,
//         Condition: this.state.Condition,
//         Subject: this.state.Subject,
//         ISBN: this.state.ISBN
//       })
//         .then(res => this.loadUsers())
//         // .then( () => this.props.history.push("/UserPage"))
//         .catch(err => console.log(err));
//     }

//   };







const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 250,
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();


  return (
    <div className="picture">
      
    <form className={classes.root} noValidate autoComplete="off">

      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Card className={classes.card}>
            <div>
              <TextField
                required
                helperText="Title"
                id="filled-required"
                label="Required"
                variant="filled"
              />

              <TextField
                required
                id="filled-required"
                label="Required"
                helperText="Author"
                variant="filled"
              />


              <TextField
                id="filled-number"
                label="Year"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label=""
                helperText="Subject"
                variant="filled"
              />
              <TextField
                id="filled-number"
                label=""
                type="number"
                helperText="ISBN#"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label=""
                helperText="Condition"
                variant="filled"
              />

            </div>
            <div><Button variant="outlined">Sell Book!</Button></div>
          </Card>
        </Grid>
      </Grid>
    </form>
    </div >

  );
}




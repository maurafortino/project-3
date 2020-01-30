import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import API from "../../utils/API";
import "../SellABook/index.css"
import { Typography } from '@material-ui/core';


class SellBook extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    image: "",
    isbn: "",
    published: "",
    edition: "",
    condition: "",
    subject: "",
    ownerEmail: "",
  };

  componentDidMount() {
    this.loadBooks();
  };

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data, title: "", author: "", image: "", isbn: "", published: "", edition: "", condition: "", subject: "", ownerEmail: "", })
      })
      .catch(err => console.log(err));
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnClick = event => {
    event.preventDefault();
    if (this.state.title && this.state.author && this.state.image && this.state.condition && this.state.subject && this.state.ownerEmail) {
      API.createBook({
        title: this.state.title,
        author: this.state.author,
        image: this.state.image,
        isbn: this.state.isbn,
        published: this.state.published,
        edition: this.state.edition,
        condition: this.state.condition,
        subject: this.state.subject,
        ownerEmail: this.state.ownerEmail
      })
        .then(res => this.loadBooks())
        .then(() => this.props.history.push("/UserPage"))
        .catch(err => console.log(err));
    }
    console.log(this.state.books)
  };

  render() {
    return (
      <div className="contsignup">
        <Container className="reminder">
        <div>
          <Card>
            <Typography variant="h6" align="center">
              Please Enter in the book information to sell your book!
            </Typography>
          </Card>
        </div>
        </Container>
        
      <Container className="sellbookform">
        
      <Grid container spacing={2}>
      
      <Grid item xs={12} sm={6}>
     
      <form>
        <div className="form-group">
          <label>Title (required)</label>
          <input required type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
          <label>Author (required)</label>
          <input required type="text" className="form-control" id="author" name="author" value={this.state.author} onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
          <label>Image Link (required)</label>
          <input required type="text" className="form-control" id="image" name="image" value={this.state.image} onChange={this.handleOnChange}  />
        </div>
        <div className="form-group">
          <label>ISBN #</label>
          <input type="text" className="form-control" id="isbn" name="isbn" value={this.state.isbn} onChange={this.handleOnChange}  />
        </div>
        <div className="form-group">
          <label>Year Published</label>
          <input type="number" className="form-control" id="year" name="year" value={this.state.year} onChange={this.handleOnChange}  />
        </div>
        <div className="form-group">
          <label>Edition</label>
          <input type="number" className="form-control" id="edition" name="edition" value={this.state.edition} onChange={this.handleOnChange}  />
        </div>
        <div className="form-group">
          <label>Condition (required)</label>
          <input required type="text" className="form-control" id="condition" name="condition" value={this.state.condition} onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
          <label>Subject (required)</label>
          <input required type="text" className="form-control" id="subject" name="subject" value={this.state.subject}  onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
          <label>Your Email (required)</label>
          <input type="text" className="form-control" id="ownerEmail" name="ownerEmail" value={this.state.ownerEmail} onChange={this.handleOnChange}  />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleOnClick}>Submit</button>
      </form>
      </Grid>
      </Grid>
      </Container>
      </div>


    );
  };
};


export default SellBook;



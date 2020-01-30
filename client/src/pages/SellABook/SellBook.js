import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import { Button } from '@material-ui/core';
import API from "../../utils/API";
import "./index.css"


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
    if (this.state.Title && this.state.Author && this.state.Year && this.state.Condition && this.state.Subject && this.state.ISBN) {
      API.createBook({
        title: this.state.title,
        author: this.state.author,
        image: this.state.image,
        isbn: this.state.isbn,
        published: this.state.published,
        edition: this.state.edition,
        condition: this.state.condition,
        subject: this.state.subject,
        ownerEmail: this.state.owernEmail
      })
        .then(res => this.loadBooks())
        .then(() => this.props.history.push("/UserPage"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <form>
        <div class="form-group">
          <label for="title">Title (required)</label>
          <input required type="text" class="form-control" id="title" onChange={this.handleOnChange} name="title" value={this.state.title} />
        </div>
        <div class="form-group">
          <label for="author">Author (required)</label>
          <input required type="text" class="form-control" id="author" onChange={this.handleOnChange} name="author" value={this.state.author} />
        </div>
        <div class="form-group">
          <label for="image">Image Link (required)</label>
          <input required type="text" class="form-control" id="image" onChange={this.handleOnChange} name="image" value={this.state.image} />
        </div>
        <div class="form-group">
          <label for="isbn">ISBN #</label>
          <input type="text" class="form-control" id="isbn" onChange={this.handleOnChange} name="isbn" value={this.state.isbn} />
        </div>
        <div class="form-group">
          <label for="year">Year Published</label>
          <input type="number" class="form-control" id="year" onChange={this.handleOnChange} name="year" value={this.state.year} />
        </div>
        <div class="form-group">
          <label for="edition">Edition</label>
          <input type="number" class="form-control" id="edition" onChange={this.handleOnChange} name="edition" value={this.state.edition} />
        </div>
        <div class="form-group">
          <label for="condition">Condition (required)</label>
          <input required type="text" class="form-control" id="condition" onChange={this.handleOnChange} name="condition" value={this.state.condition} />
        </div>
        <div class="form-group">
          <label for="subject">Subject (required)</label>
          <input required type="text" class="form-control" id="subject" onChange={this.handleOnChange} name="subject" value={this.state.subject} />
        </div>
        <div class="form-group">
          <label for="ownerEmail">Your Email (required)</label>
          <input type="text" class="form-control" id="ownerEmail" onChange={this.handleOnChange} name="ownerEmail" value={this.state.ownerEmail} />
        </div>
        <button type="submit" class="btn btn-primary" onClick={this.handleOnClick}>Submit</button>
      </form>


    );
  };
};


export default SellBook;



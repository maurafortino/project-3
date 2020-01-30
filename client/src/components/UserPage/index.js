import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import API from "../../utils/API";
import "./index.css";
// import Link from "react-router";


class CenteredTabs extends Component {
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
    render() {
        return (
            <div>
                <div className="container-2">
                    <Paper>
                        <Tabs
                            // value={value}
                            // onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Contact Us" />
                            <Tab label="Share w/ Friend" />
                            <Tab label="Update Profile" />
                        </Tabs>
                    </Paper>
                </div>

                <div className="container3">
                    <Paper>
                        <Typography>Here is where you can see all of the books that you are currently selling!</Typography>
                    </Paper>
                </div>
            <div className="container pt-5">
            {this.state.books.length? (
                <div className="row">
                    {this.state.books.map(book => (
                        <div className="col-12 pb-3" key={book._id}>
                            <div className="row">
                                <div className="col-6 image-div">
                                    <img src={book.image} alt={book.title}/>
                                </div>
                                <div className="col-6 details-div">
                                    <p>Title: {book.title}</p>
                                    <p>Author: {book.author}</p>
                                    <p>Subject: {book.subject}</p>
                                    <p>Year Published: {book.published}</p>
                                    <p>Edition: {book.edition}</p>
                                    <p>Condition: {book.condition}</p>
                                    <p>Email: {book.ownerEmail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ):(
                <h2> No Results to Display</h2>
                )}
            </div>
        </div>
        )
    };
};

export default CenteredTabs;
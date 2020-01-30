import axios from "axios";

export default {
    createUser: function(userData){
        return axios.post("/api/users", userData);
    },
    getUsers: function() {
    return axios.get("/api/users");
    },
    getBooks: function(){
        return axios.get("/api/books");
    },
    getSubject: function(subject){
        return axios.get("api/books/" + subject);
    },
    createBook: function(userData){
        return axios.post("/api/books", userData);
    }
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};

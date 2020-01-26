import axios from "axios";

export default {
    createUser: function(userData){
        return axios.post("/api/users", userData);
    },
    findEmail: function(email){
        return axios.get("api/users" + email);
    },
    getUser: function(id) {
        return(axios).get("/api/users/" + id);
    },
    getUsers: function() {
    return axios.get("/api/users");
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

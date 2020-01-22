import axios from "axios";

export default {
    createUser: function(userData){
        return axios.post("/api/user", userData);
    },

    getUser: function(id) {
        return(axios).get("/api/user/" + id);
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

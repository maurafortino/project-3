import axios from "axios";

export default {
    getBooks: function(){
        return axios.get("/api/books");
    },
    getSubject: function(subject){
        return axios.get("api/books/" + subject);
    },
    createBook: function(userData){
        return axios.post("/api/books", userData);
    }
};

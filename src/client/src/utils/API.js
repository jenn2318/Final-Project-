import axios from "axios";
const milestone1ZipCodeURL = "https://cors-anywhere.herokuapp.com/https:\/\/maps.googleapis.com/maps/api/place/textsearch/json?query=";
const zipcodeAPIkey = "&key=AIzaSyDOIrdjOme0yAiuQS8QlE9JTucD7rG81X8";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  //ZIP CODE FOR RESTAURANTS AND BARS 
  getZipPlaces: function(zipcode) {
    return axios.get(milestone1ZipCodeURL+"food+in+Atlanta+"+zipcode+zipcodeAPIkey);
  }

};

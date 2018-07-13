import axios from "axios";
const milestone1ZipCodeURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
const zipcodeAPIkey = "&key=AIzaSyDOIrdjOme0yAiuQS8QlE9JTucD7rG81X8";

const getPlaceHours = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";



export default {
 //Parking deck information

  getParking: function() {
    return axios.get("/api/parking");
  },
  // Gets parking by id
  getParkingById: function(id) {
    return axios.get("/api/parking/:_id");
  },
  // Deletes Parking
  deleteParking: function(id) {
    return axios.delete("/api/parking/:_id");
  },
  // Saves a parking deck to the database
  saveParking: function(parkingData) {
    return axios.post("/api/parking", parkingData);
  },//ZIP CODE FOR RESTAURANTS AND BARS 
  getZipPlaces: function(zipcode) {
    return axios.get(milestone1ZipCodeURL+"food+in+Atlanta+"+zipcode+zipcodeAPIkey);
  // return axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lng+"&radius=2500&type=restaurant"+zipcodeAPIkey)
  // return axios.get ("https://maps.googleapis.com/maps/api/geocode/json?address="+zipcode+zipcodeAPIkey);
  },
  //PLACE HOURS FOR RESTAURANTS AND BARS
  getPlaceHours: function(placeid) {
    return axios.get(getPlaceHours+placeid+zipcodeAPIkey+"&fields=name,opening_hours");
  },
  getCordinates: function(zipcode) {
    return axios.get("/mygeocoder/" +zipcode)
  }
};


import axios from "axios";
import configkeys from "../config.js"

const config = {
    headers : {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
};

// const milestone1ZipCodeURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
// Import from .env file


const getPlaceHours = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";

const geolocate = "https://www.googleapis.com/geolocation/v1/geolocate?key=";

const placesByLatAndLong = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.7753097,-84.3909888&radius=1500&type=restaurant&key=";

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
  getZipPlaces: function() {
    return axios.get(placesByLatAndLong+configkeys.zipcodeAPIkey,config)
    // return axios.get(milestone1ZipCodeURL+"food+in+Atlanta+"+zipcode+configkeys.zipcodeAPIkey);
  // return axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lng+"&radius=2500&type=restaurant"+zipcodeAPIkey)
  // return axios.get ("https://maps.googleapis.com/maps/api/geocode/json?address="+zipcode+zipcodeAPIkey);
  },
  //PLACE HOURS FOR RESTAURANTS AND BARS
  getPlaceHours: function(placeid) {
    return axios.get(getPlaceHours+placeid+configkeys.zipcodeAPIkey+"&fields=name,opening_hours");
  },
  getCordinates: function() {
    return axios.post(geolocate+configkeys.googlePlaces)
  }
};


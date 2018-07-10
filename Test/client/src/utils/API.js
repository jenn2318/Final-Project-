import axios from "axios";

export default {
 //Parking deck information

  getParking: function() {
    return axios.get("/api/parking");
  },
  // Gets parking by id
  getParkingById: function(id) {
    return axios.get("/api/parking/" + id);
  },
  // Deletes Parking
  deleteParking: function(id) {
    return axios.delete("/api/parking/" + id);
  },
  // Saves a parking deck to the database
  saveParking: function(parkingData) {
    return axios.post("/api/parking", parkingData);
  }
};


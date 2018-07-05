import React from "react";

/// Milestone1 api from home.js
$(document).on("click","#zipButton", function () {
    var zip = $("#ZipCode2").val().trim();
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https:\/\/maps.googleapis.com/maps/api/place/textsearch/json?query=${userChoiceText}+in+Atlanta+${zip}&key=AIzaSyDOIrdjOme0yAiuQS8QlE9JTucD7rG81X8`,
        method: "GET",
    }).done(function(response) {
        $("#whateverDiv").text(response.results[0].name);
        console.log(response);
    });


    var movie = "The Social Network";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";


    $.ajax({
        url: queryURL,
        method: "GET",
    }).done(function(response) {
        console.log(response);
    });
    //
    // //APIS
    //
    // $.ajax({
    //     url: `https://cors-anywhere.herokuapp.com/https:\/\/maps.googleapis.com/maps/api/place/textsearch/json?query=gyms+food+spas+retreats+welness+movies+in+Atlanta&key=AIzaSyDOIrdjOme0yAiuQS8QlE9JTucD7rG81X8`,
    //     method: "GET",
    // }).done(function(response) {
    //     console.log(response);
    // });
    //
    // var movie = "The Social Network";
    // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    //
    //
    // $.ajax({
    //     url: queryURL,
    //     method: "GET",
    // }).done(function(response) {
    //     console.log(response);
    // });
    //

});


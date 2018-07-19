import React, { Component } from 'react'
import { Grid, Row, Col, Image, Container, TextArea, FormBtn  } from 'react-bootstrap';
import './LastCallEats.css';
import API from "../utils/API";
import  GoogleMap  from "./MapsComponents";
import { Marker } from "react-google-maps";

export default class LastCallEats extends Component {
    state= {
        dbParking: [],
        zipCode: "",
        books: [],
        title: "",
        author: "",
        synopsis: "",
        isMarkerShown: true,
        zipResults: [],
        showMapWithMarkers: false,
        lat: "",
        lng: ""

    }

    getParkingINfo = () => {
        API.getParking()
        .then(res => {
                console.log("line 16" + JSON.stringify(res.data)),
                this.setState({dbParking: res.data}),
                console.log("line 18" + JSON.stringify(this.state.dbParking)),
                console.log("line 10 LastCallEats.js")
            }
        )
        .catch(err => console.log(err)) 
    }
    componentDidMount() {
    this.delayedShowMarker(),
    API.getCordinates()
    .then(res => {
      console.log(res.data.location.lat),
      this.setState({lat: res.data.location.lat}),
      console.log("LastCallEats state at lat: "+ this.state.lat),

      console.log(res.data.location.lng),
      this.setState({lng: res.data.location.lng}),
      console.log("LastCallEats state at lng: "+ this.state.lng),

      console.log(res)
    })
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.setState({
      showMapWithMarkers: false
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.zipCode !== "") {
      console.log(this.state.zipCode);
      API.getZipPlaces( this.state.zipCode)
      .then(res => 
          {this.setState({
            zipResults: res.data.results,
            showMapWithMarkers: true
          })
          console.log(this.state.zipResults);
          // API.getPlaceHours("4f91a98b982a0766bd6b42c23a0dabc7e631c437")
          // .then(res =>console.log(res))
          // .catch(err => console.log(err));

        }
      ) 
      .catch(err => console.log(err));
        API.getCordinates(this.state.zipCode)
        .then(res =>console.log(res))
        .catch(err => console.log(err));
    }
}

    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            isAuthenticated() ?

            <div>

            <Image src="assets/atl_ga.jpeg" className="header-image" />
            <Grid>
            <h2>Food Selections</h2>
        <Row>
        <Col xs={12} sm={8} className="main-section">
            <p>Here are some great selections based on your favortie foods: Please choose some below</p>
            <form>
              <input
                value={this.state.zipCode}
                onChange={this.handleInputChange}
                name="zipCode"
                placeholder="Zip Code (required)"
              />             
              <input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
               {/*< TextArea
              //   value={this.state.synopsis}
              //   onChange={this.handleInputChange}
              //   name="synopsis"
              //   placeholder="Synopsis (Optional)"
              // />*/}
              <button
                onClick={this.handleFormSubmit}
              >
                Search Zipcode
              </button>
              </form>
            <button onClick={this.getParkingINfo}> Parking Info From db</button>
        </Col>
        <Col xs={12} sm={4} className="sidebar-section">
            <h2> LastCall Mission</h2>
        <p> Here is why we want to be your number one late night food app in Atlanta. We offer selections without you having to search high and low.</p>
        {this.state.showMapWithMarkers === true
            ?
            <GoogleMap
            isMarkerShown={this.state.isMarkerShown}
            centerLat={ this.state.lat }
            centerLong={this.state.lng }
            >
            <Marker 
              position={{ lat: this.state.lat, lng: this.state.lng }} 
              onClick={console.log("this is the center")} 
            />

            ({this.state.zipResults.map(oneZipAtATime => 
            <Marker 
              position={{ lat: oneZipAtATime.geometry.location.lat, lng: oneZipAtATime.geometry.location.lng }} 
              onClick={this.handleMarkerClick} 
            />
              )})
            </GoogleMap>
            : null}
        </Col>
        </Row>
        </Grid>
        </div>


        : <div/>
        )

    }

}
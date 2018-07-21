import React, { Component } from 'react'
import { Grid, Row, Col, Image, Container, TextArea, FormBtn, Button  } from 'react-bootstrap';
import './LastCallEats.css';
import API from "../utils/API";
import  GoogleMap  from "./MapsComponents";
import { Marker } from "react-google-maps";

export default class LastCallEats extends Component {
    state= {
        dbRestaurant: [],
        address: "",
        phone: "",
        rating: "",
        zipCode: "",
        isMarkerShown: true,
        zipResults: [],
        showMapWithMarkers: false,
        lat: "",
        lng: ""

    }

    getRestaurantInfo = () => {
        API.getRestaurant()
        .then(res => {
                console.log("line 16" + JSON.stringify(res.data)),
                this.setState({dbRestaurant: res.data}),
                console.log("line 18" + JSON.stringify(this.state.dbRestaurant)),
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
      API.getZipPlaces( )
      .then(res => 
      { this.setState({zipResults:res.data.results,showMapWithMarkers:true})


          console.log("state zip places: ")

          console.log(this.state.zipResults)}
          // API.getPlaceHours("4f91a98b982a0766bd6b42c23a0dabc7e631c437")
          // .then(res =>console.log(res))
          // .catch(err => console.log(err));


      ) 
      .catch(err => console.log(err))

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
            <h2>Restaurant Locations</h2>
        <Row>
        <Col xs={12} sm={8} className="main-section">
            <p>Please enter your zipcode below</p>
            <form>
              <input className="input-field"
                value={this.state.zipCode}
                onChange={this.handleInputChange}
                name="zipCode"
                placeholder="Zip Code (required)"
              />             

               {/*< TextArea
              //   value={this.state.synopsis}
              //   onChange={this.handleInputChange}
              //   name="synopsis"
              //   placeholder="Synopsis (Optional)"
              // />*/}
              <button className="submit-last"
                onClick={this.handleFormSubmit}

              >
                Search Zipcode
              </button>
              </form>
        </Col>
        <Col xs={12} sm={4} className="sidebar-section">
            <h2> LastCall Mission</h2>
        <p> Here is why we want to be your number one late night food app in Atlanta. We offer selections without you having to search high and low. We provide selections that are highly rated and we offer our members the best quality.</p>
        {this.state.showMapWithMarkers
            ?
            <GoogleMap
            isMarkerShown={this.state.isMarkerShown}
            centerLat={ this.state.lat }
            centerLong={this.state.lng }
            >

                {/*//dom*/}
            <Marker 
              position={{ lat: this.state.lat, lng: this.state.lng }} 
              onClick={console.log("this is the center")} 
            />
                {/*<Marker*/}
                    {/*position={{ lat: this.state.results, lng: this.state.lng }}*/}
                    {/*onClick={console.log("this displays zip results ")}*/}
                {/*/>*/}


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
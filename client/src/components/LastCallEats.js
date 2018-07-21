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
        showMapWithMarkers: false

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
        this.delayedShowMarker()
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
    render() {



        return (
            <div>
                <Image src="assets/atl_ga.jpeg" className="header-image" />
                <Grid>
                    <h2>Food Selections</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Here are some great selections based on your favortie foods: Please choose some below</p>
                            <form>
                                <input className={"input-field"}
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
                                <button className={"submit-last"}
                                    onClick={this.handleFormSubmit}
                                >
                                    Search Zipcode
                                </button>
                            </form>

                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <h2> LastCall Mission</h2>
                            <p> Here is why we want to be your number one late night food app in Atlanta. We offer selections without you having to search high and low.</p>
                            {this.state.showMapWithMarkers === true
                                ?
                                <GoogleMap
                                    isMarkerShown={this.state.isMarkerShown}
                                    centerLat={ this.state.zipResults[2].geometry.location.lat }
                                    centerLong={this.state.zipResults[2].geometry.location.lng }
                                >

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

        )
    }

}
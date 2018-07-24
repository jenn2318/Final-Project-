import React, { Component } from 'react'
import { Grid, Row, Col, Image, Container, TextArea, FormBtn  } from 'react-bootstrap';
import './LastCallEats.css';
import API from "../utils/API";
import  GoogleMap  from "./MapsComponents";
import { Marker, InfoWindow } from "react-google-maps";

export default class LastCallEats extends Component {
    state= {
        dbRestaurant: [],
        zipCode: "",
        phone: "",
        address: "",
        rating: "",
        isMarkerShown: true,
        zipResults: [],
        showMapWithMarkers: false,
        centerLat:"",
        centerLng:""

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
    API.getZipPlaces( )
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
    API.getCordinates()
        .then(res =>{
        console.log(res)
    this.setState({centerLat:res.data.location.lat,centerLng:res.data.location.lng})
})
.catch(err => console.log(err));
}

/*delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    } */

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
        API.getCordinates()
            .then(res =>{
            console.log(res)
        this.setState({centerLat:res.data.location.lat,centerLng:res.data.location.lng})
    })
    .catch(err => console.log(err));
    }
}
markerClick = (theMarkerClickedOn) => {
    console.log("All the information attached to this marker: ")
    console.log(theMarkerClickedOn)
    console.log("The specific address for this marker is: ")
    console.log(theMarkerClickedOn.vicinity)
    // Make something happen or show up on the DOM is they user clicks on a marker
}
render() {



    return (
        <div className='last-call-hero'>
        {/*I<mage src="assets/atl_ga.jpeg" className="header-image" />*/}
        <Grid>
    <Row>
            <Col xs={12} sm={6} className="main-section">
                <h2>Food Selections</h2>
                <p>Choose some great restaurants based on your favortie event locations. Please enter your zip code below.</p>
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

    <Col xs={12} sm={6} className="sidebar-section">
        <h2> LastCall's Mission</h2>
        <p> We want to be your number one late night food app in Atlanta. We offer selections without you having to do extended searches for food accommodations. We want to provide great service to everyone and great experiences.</p>
        </Col>
    </Row>

    <Row>
        <Col>
    {this.state.showMapWithMarkers === true
        ?
<GoogleMap
    isMarkerShown={this.state.isMarkerShown}
    centerLat={ this.state.centerLat }
    centerLong={this.state.centerLng }
>

<Marker
    position={{lat:this.state.centerLat,lng:this.state.centerLng}}
    label = "You"
    title = "Test Title"
    onClick={this.markerClick}
>
<InfoWindow >
    <div>You are here!</div>
    </InfoWindow>

    </Marker>

    {/* With .map , you are looping through the array of 20 results that is stored in this.state.zipResults */}
    ({this.state.zipResults.map(oneZipAtATime => {
        // For every result in the array, you want to assign the markerClick function AND attach (bind) the data (oneZipAtATime) associaited with that specific result
        let clickOneSpecificMarker = this.markerClick.bind(this,oneZipAtATime);
    return(
        <Marker
    position={{ lat: oneZipAtATime.geometry.location.lat, lng: oneZipAtATime.geometry.location.lng }}
    onClick={clickOneSpecificMarker}
    // For title, hover over a marker. You will see the info from oneZipAtATime.name
    // Try title = {JSON.stringify(oneZipAtATime)} and you should see ALL the data
    title = {oneZipAtATime.name}
    />
    )
}
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
import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './LastCallEats.css';
import API from '../utils/API.js';


export default class LastCallEats extends Component {
    state: {
        dbParking: []

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
    render() {



        return (
            <div>
            <Image src="assets/atl_ga.jpeg" className="header-image" />
            <Grid>
            <h2>Food Selections</h2>
        <Row>
        <Col xs={12} sm={8} className="main-section">
            <p>Here are some great selections based on your favortie foods: Please choose some below</p>
            <button onClick={this.getParkingINfo}> Function</button>
        </Col>
        <Col xs={12} sm={4} className="sidebar-section">
            <h2> LastCall Mission</h2>
        <p> Here is why we want to be your number one late night food app in Atlanta. We offer selections without you having to search high and low.</p>
        </Col>
        </Row>
        </Grid>
        </div>

    )
    }

}
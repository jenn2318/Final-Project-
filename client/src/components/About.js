import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';
import  Modal  from './components/Modal';

export default class About extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            isAuthenticated() ?

            <div>


            <Grid>
            <Col  xs={12} sm={8} smOffest={2}>
            <Image src="assets/restaurant_late.jpg" className="about-late-night" rounded />
        <h3>Select Your Zipcode</h3>
        <p>We offer selections in restaurants and bars</p>
        </Col>
        </Grid>
        </div>
                :null

    )
    }
}
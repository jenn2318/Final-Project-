import React, { Component } from 'react';
import {  Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';


export default class Footer extends Component {
    render() {
        return (

            <div className="footer-bottom">

            <Row className="show-grid text-center">
            <Col sx={12} sm={4} className="container-wrapper2">
            <h5>Questions / Order By Email</h5>
        <h6>info@lastCall.com</h6>
        <h6>lastminute@lastCall.com</h6>
        <h6>afterhours@lastCall.com</h6>
        </Col>
        <Col sx={12} sm={4} className="container-wrapper2">
            <h5>Follow Us On Social Media</h5>
        <h6>Facebook</h6>
        <h6>Instagram < SocialIcon url="https://www.instagram.com/lastcalleatsatl/" /></h6>
        <h6>Twitter  <SocialIcon url="https://twitter.com/JPCoder777" /></h6>
        </Col>

        <Col sx={12} sm={4} className="container-wrapper2">
            <h5>Join Our Newsletter</h5>
        <h6>Last Call News</h6>
        <h6>Get The Lastest New Places Daily</h6>
        <Link to="/LastCallEats">
            <Button bsStyle="primary">Newsletter Signup!</Button>
        </Link>

        </Col>
        </Row>
        </div>


    );
    }
}

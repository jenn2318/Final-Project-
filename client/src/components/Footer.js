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
                    <h6>Instagram < SocialIcon url="https://www.instagram.com/lastcalleatsatl/" /></h6>
                    <h5>Review Phone Line: 404-556-0000</h5>
                </Col>

                <Col sx={12} sm={4} className="container-wrapper2">
                    <h5>Join Our Newsletter</h5>
                    <h6>Last Call News</h6>
                    <h6>Get The Lastest New Places Daily</h6>
                {/*<Link to="/LastCallEats">*/}
                    <div id="news">
                    <h5>Check our the Newsletter!</h5>
                </div>
                {/*</Link>*/}

            </Col>
        </Row>
    </div>


        );
    }
}

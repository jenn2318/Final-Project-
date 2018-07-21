import React, { Component } from 'react'
import { Grid, Col, Image, Panel } from 'react-bootstrap';
import './About.css';
 import  Modal  from './Modal';

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
            <Modal />
            <div>
            <Panel id="collapsible-panel-example-3" defaultExpanded>
        <Panel.Heading>
        <Panel.Toggle componentClass="a">Favorite Quick Bites</Panel.Toggle>
        </Panel.Heading>
        <Panel.Collapse>
        <Panel.Body>
        Fresh2Order
            Burger King
            Wendy's
            BQE
        </Panel.Body>
        </Panel.Collapse>
        </Panel>
        </div>

        <div>
        <Panel id="collapsible-panel-example-3" defaultExpanded>
        <Panel.Heading>
        <Panel.Toggle componentClass="a">Favorite Gourmet Places</Panel.Toggle>
        </Panel.Heading>
        <Panel.Collapse>
        <Panel.Body>
        Alma Cocina
            Hudson's
            Pitty Pat's Porch
        </Panel.Body>
        </Panel.Collapse>
        </Panel>
        </div>

        <div>
        <Panel id="collapsible-panel-example-3" defaultExpanded>
        <Panel.Heading>
        <Panel.Toggle componentClass="a">Favorite Tapas Places</Panel.Toggle>
        </Panel.Heading>
        <Panel.Collapse>
        <Panel.Body>
            Barcelona
            Thrive
                Ru San's
        </Panel.Body>
        </Panel.Collapse>
        </Panel>
        </div>


            <Image src="assets/restaurant_late.jpg" className="about-late-night" rounded />
        <h3>Contact Us</h3>
        <p>Have questions or comments regarding your account?</p>
        </Col>
        </Grid>

        </div>
                :null

    )
    }
}
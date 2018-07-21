import React, { Component } from 'react'
import { Grid, Col, Image, Panel, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
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
            <Image src="assets/michelle_about.jpeg" circle className="profile-pic" />
            <div>
            <h4>Profile Information</h4>

            <p>Email: michelle@gmail.com</p>
            <p>Phone: 415-546-0000</p>

            <h4>Location Favorites</h4>
            <ul>
            <li>Midtown</li>
            <li>SandySprings</li>
            <li>Brookhaven</li>
            </ul>

            <h4>Restaurant Frequency Points</h4>
            <ul>
            <li>Quick Bites: 25</li>
            <li>Gourmet Meals: 78</li>
            <li>Tapas Restaurants: 100</li>
            </ul>


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
        <p>Have questions or comments regarding your account? Send us feedback below.</p>


            <div className="form-box">
        <FormGroup controlId="formControlsSelect">
            <ControlLabel>Email</ControlLabel>
            <FormControl componentClass="email" placeholder="email">
            <option value="select">email</option>
        </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Multiple select</ControlLabel>
        <FormControl componentClass="select" multiple>
            <option value="other">Questions Regarding Account</option>
            <option value="other">Comments Regarding Service</option>
            <option value="other">Restaurant Options</option>
        </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>

            <FormGroup>

        <Button bsStyle="warning">Warning</Button>

        </FormGroup>
           </div>


            </Col>
        </Grid>

        </div>
                :null

    )
    }
}
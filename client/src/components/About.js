import React, { Component } from 'react'
import { Grid, Col, Image, Panel, FormGroup, FormControl, ControlLabel, Button, Row} from 'react-bootstrap';
import './About.css';
 import  Modal  from './Modal';
import axios from 'axios';
export default class About extends Component {

    state = {
        email: '',
        multipleSelect: 'Restaurant Options',
        comment: '',
        formSubmitLoader: false
    }

    // this.login = this.login.bind(this)

    login() {
        this.props.auth.login();
    }

    inputHandler = (value, field) => {
        console.log('input handler', value, field)
        this.setState(
        {
            [field]: value
        })
    }

    submitForm = async () => {
        const {email, multipleSelect, comment} = this.state
    this.setState({
        formSubmitLoader: true
    })
    try {
            const result = await axios.post('/api/emails', {email, multipleSelect, comment})
        console.log('RESULT', result)
    } catch (err) {
        console.error(err)
    } finally {
            this.setState({
                formSubmitLoader: false,
                email: '',
                comment: ''
            })
    }

}

    render() {
        const { isAuthenticated } = this.props.auth;
        console.log('state', this.state)
        return isAuthenticated() ?

            <div className="profile-hero">
        {/*<Grid>*/}
        {/*<Col  xs={6} sm={8} smOffest={2}>*/}
        <div>

            <Modal />

            <Image src="assets/michelle_about.jpeg" circle className="profile-pic" />

            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={6} md={4}>
                       <div className="box-color">
                           <h3>Diamond Member</h3>
                        </div>
                        <div id="member-info">
                            <h4>Profile Information:</h4>
                                <p>Email: michelle@gmail.com</p>
                                <p>Phone: 415-546-0000</p>
                                <p>City: Atlanta, Georgia</p>
                            <h4>Location Favorites:</h4>
                        <ul>
                            <li>Midtown</li>
                            <li>SandySprings</li>
                            <li>Brookhaven</li>
                        </ul>

                        <h4>Restaurant Frequency Points:</h4>
                        <ul>
                            <li>Quick Bites: 25</li>
                            <li>Gourmet Meals: 78</li>
                            <li>Tapas Restaurants: 100</li>
                        </ul>

                        <h4>Frequent Event Locations:</h4>
                          <ul>
                              <li> Mercedes Benz Superdome</li>
                              <li> Suntrust Park</li>
                              <li> Philips Arena</li>
                         </ul>
                    </div>
                </Col>


                <Col xs={12} sm={6} md={4}>
            <div>
                    <div className="box-color">
                       <h3>My Favorites List</h3>
                    </div>

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


        </Col>
                <Col xs={12} Hidden md={4}>
                    <div className="box-color">
                       <h3>Place Of The Month</h3>
                    </div>
                    <div id="image-box">
                        <h3>Zen's Cuisine</h3>
                        <h4>Facts About This Place:</h4>
                        <h5>Venue Nearby: Suntrust Park</h5>

                        <ul>
                          <li>Jazzy Night Spot</li>
                          <li>Location: Smyrna</li>
                          <li>Gourmet Style Eatery</li>
                         </ul>

                    <Image src="assets/restaurant_late.jpg" className="about-late" rounded />
                    </div>
                  </Col>
                </Row> 
            </Grid>


            <div className="form-box" id="feedbackForm">

        <h3>Contact Us</h3>
    <p>Have questions or comments regarding your account? Send us feedback below.</p>
              <FormGroup controlId="formControlsSelect">
                 <ControlLabel>Email</ControlLabel>
                    <FormControl
                        value={this.state.email}
                        type="text"
                        onChange={e => this.inputHandler(e.target.value, 'email')}
                        placeholder="email">
                    </FormControl>
           </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Multiple select</ControlLabel>
               <FormControl value={this.state.multiSelect} onChange={e => this.inputHandler(e.target.value, 'multipleSelect')} componentClass="select" multiple>
                    <option value="regarding_account">Questions Regarding Account</option>
                    <option value="regarding_service">Comments Regarding Service</option>
                    <option value="restaurant_options">Restaurant Options</option>
              </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
                 <FormControl value={this.state.comment} onChange={e => this.inputHandler(e.target.value, 'comment')} componentClass="textarea" placeholder="textarea" />
               </FormGroup>
            <FormGroup>

        <Button onClick={this.submitForm} disabled={this.state.formSubmitLoader}  bsStyle="warning">{this.state.formSubmitLoader ? 'Sending...' : 'Submission Complete'}</Button>

                </FormGroup>
           </div>


    {/*</Col>*/}
    </div>
    {/*</Grid>*/}

    </div>
        :null

    }
}
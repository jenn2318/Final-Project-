import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import './Home.css';
// import Social from './components/Social';

export default class Home extends Component {
    login() {
        this.props.auth.login();
    }
        logout() {
        this.props.auth.logout();
    }
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <Grid>
        {isAuthenticated()?
         <Jumbotron>
            <h2>Welcome to LastCall</h2>
        <p className="info-small">This Application that will give  suggestions for Bars and Restaurants Open Late Night After An Event </p>

                {isAuthenticated()
            ? <div>
                    <ButtonToolbar>

                <Button bsStyle="primary" onClick={this.logout.bind(this)}>Logout</Button>
                    <ButtonGroup>
                <Button bsStyle="primary" onClick={this.goTo.bind(this, "about")}>What We Do</Button></ButtonGroup>
                    <ButtonGroup>
                 <Button bsStyle="primary" onClick={this.goTo.bind(this, "lastcalleats")}>Find Food Near Me</Button></ButtonGroup></ButtonToolbar></div>

                : <Button bsStyle="primary" onClick={this.login.bind(this)}>Login</Button>}



            </Jumbotron>
                    : null}
            <Image src="assets/late_night_dt.jpeg" className="header-image" />
            <Row className="show-grid text-center">
            <Col sx={12} sm={4} className="container-wrapper">
            <Image src="assets/burger.jpeg" circle className="profile-pic" />
            <h3>Buy Quick Bites</h3>
        <p>If you want more of an on the go quick meal to satisfy your hunger</p>
        </Col>
        <Col sx={12} sm={4} className="container-wrapper">
            <Image src="assets/gourmet1.jpeg" circle className="profile-pic" />
            <h3>Give Me Gourmet</h3>
        <p>If you want more of a home cooked feel to feed your appetite</p>
        </Col>

        <Col sx={12} sm={4} className="container-wrapper">
            <Image src="assets/tapas3.jpeg" circle className="profile-pic" />
            <h3>Try Some Tapas</h3>
        <p>Here you can choose lighter options that are small but pleasing</p>
        </Col>
        </Row>
        </Grid>



        )

    }

}
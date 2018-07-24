import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Jumbotron, Button, Grid,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';



export default class CustomNavBar extends Component {
    login() {
        this.props.auth.login();
    }
    logout() {
        this.props.auth.logout();

    }
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }
    render () {
        const { isAuthenticated } = this.props.auth;

        return (
    <div>
        <Navbar default collapseOnSelect>
           <Navbar.Header>
               <Navbar.Brand>
                    <Link to="/">LastCall</Link>
                        </Navbar.Brand>
                <Navbar. Toggle  />
        </Navbar.Header>
<Navbar.Collapse>
    <Nav pullRight>
            <NavItem eventKey={1}  onClick={this.goTo.bind(this, 'home')}>
                Home
            </NavItem>
            <NavItem eventKey={2} onClick={this.goTo.bind(this, 'About')} >
                About
            </NavItem>
            <NavItem eventKey={2} onClick={this.goTo.bind(this, 'LastCallEats')} >LastCallEats
            </NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>
        {!isAuthenticated()
               ? <Grid>
            <Jumbotron>
                <h2>Welcome to LastCall Eats</h2>
                    <p className="info-small">This Application that will give  suggestions for Restaurants Open Late Night After An Event </p>

        {!isAuthenticated()
            ? <Button bsStyle="primary" onClick={this.login.bind(this)}>Login</Button>
                : <Button bsStyle="primary" onClick={this.logout.bind(this)}>Logout</Button>}

        </Jumbotron>
        <div className="not-logged">
            <Image src="assets/late_night_dt.jpeg" className="header-image" />
        </div>

                </Grid>
            :null}
        </div>
        )
    }
}


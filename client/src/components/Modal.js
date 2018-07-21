import React, { Component } from 'react'
import { Button, Modal as Mod } from 'react-bootstrap';
import './Modal.css';



export default class Modal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
    }
    render() {
        return (
            <div className="modal-container" style={{ height: 200 }}>
    <Button
        bsStyle="primary"
        bsSize="large"
        onClick={() => this.setState({ show: true })}
    >
        About Us
        </Button>
        <Mod
        show={this.state.show}
        onHide={this.handleHide}
        container={this}
        aria-labelledby="contained-modal-title"
            >
            <Mod.Header closeButton>
        <Mod.Title id="contained-modal-title">
            What is LastCall
        </Mod.Title>
        </Mod.Header>
        <Mod.Body>
        <p>LastCall Eats was created for consumers that often attend late night events but have quite an appetite when the night is over. Whether its a sporting event, concert or a late night at a bar or club we offer late night restaurant selections based on your location so you can find restaurants near you. We offer options that may be fast food, gourmet and tapas style restuarants.</p>
        </Mod.Body>
        <Mod.Footer>
        <Button onClick={this.handleHide}>Close</Button>
        </Mod.Footer>
        </Mod>
        </div>


       );
    }
}



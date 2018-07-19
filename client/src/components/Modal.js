// import React, { Component } from 'react'
// import { Button, Modal as Mod } from 'react-bootstrap';
// import './Modal.css';
//
//
//
// export default class Modal extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//
//         this.handleHide = this.handleHide.bind(this);
//
//         this.state = {
//             show: false
//         };
//     }
//
//     handleHide() {
//         this.setState({ show: false });
//     }
//     render() {
//         return (
//             <div className="modal-container" style={{ height: 200 }}>
//     <Button
//         bsStyle="primary"
//         bsSize="large"
//         onClick={() => this.setState({ show: true })}
//     >
//         Test Modal
//         </Button>
//         <Mod
//         show={this.state.show}
//         onHide={this.handleHide}
//         container={this}
//         aria-labelledby="contained-modal-title"
//             >
//             <Mod.Header closeButton>
//         <Mod.Title id="contained-modal-title">
//             Contained Modal
//         </Mod.Title>
//         </Mod.Header>
//         <Mod.Body>
//         Please Enter Your Zipcode To Search Late Night Eats
//         </Mod.Body>
//         <Mod.Footer>
//         <Button onClick={this.handleHide}>Close</Button>
//         </Mod.Footer>
//         </Mod>
//         </div>
//
//
//        );
//     }
// }
//
//

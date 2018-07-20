import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default class Social extends Component {
    render () {

        return (
            <div className="social-box">
            < SocialIcon url="https://www.instagram.com/lastcalleatsatl/" />
            < SocialIcon url="https://twitter.com/JPCoder777" />
            </div>


        );
    }
}
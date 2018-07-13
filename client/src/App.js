import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LastCallEats from './components/LastCallEats';
//import './App.css';
import Navbar from './components/CustomNavbar';
//import Modal from './components/Modal';
import Footer from './components/Footer';
import Auth from './Auth/Auth';
//

const auth = new Auth();
auth.login();


class App extends Component {
    render() {
        return (

            <Router>
            <div>
            <Navbar />
            <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/LastCallEats" component={LastCallEats} />
                <Route exact path = "/callback" />
         <Route component = {Auth} />

        <Footer />
        </div>
        </Router>



    );
    }
}

export default App;


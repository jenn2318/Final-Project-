// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import LastCallEats from './components/LastCallEats';
// //import './App.css';
// import Navbar from './components/CustomNavbar';
// //import Modal from './components/Modal';
// import Footer from './components/Footer';
// //
// import Auth from './Auth/Auth.js';
//
// const auth = new Auth();
// auth.login();
//
// class App extends Component {
//     goTo(route) {
//         this.props.history.replace(`/${route}`)
//     }
//
//     login() {
//         this.props.auth.login();
//     }
//
//     logout() {
//         this.props.auth.logout();
//     }
//
//     render() {
//         const { isAuthenticated } = this.props.auth;
//
//         return (
//
//             <Router>
//             <div>
//             <Navbar />
//             <Route exact path="/" component={Home} />
//         <Route exact path="/About" component={About} />
//         <Route exact path="/LastCallEats" component={LastCallEats} />
//         <Route component = {Auth} />
//         <Footer />
//         </div>
//         </Router>
//
//
//
//     );
//     }
// }
//
// export default App;
//

import React, { Component } from 'react';
// import './App.css';


class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>

                        <button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.goTo.bind(this, 'home')}
                        >
                            Home
                        </button>
                        {
                            !isAuthenticated() && (
                                <button
                                    id="qsLoginBtn"
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.login.bind(this)}
                                >
                                    Log In
                                </button>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <button
                                    id="qsLogoutBtn"
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.logout.bind(this)}
                                >
                                    Log Out
                                </button>
                            )
                        }

            </div>
        );
    }
}

export default App;

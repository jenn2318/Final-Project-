import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Callback from './components/Callback';
import Auth from './Auth/Auth';
import About  from "./components/About";
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history} component = {Home}>

        <div>
            {/*<Route path="/" render={(props) => <App auth={auth} {...props} />} />*/}
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/about" render={(props) => <About auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props}/>

            }}/>
        </div>
    </Router>
);
}
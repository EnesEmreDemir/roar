import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Redirect,
} from 'react-router-dom';
import Home from './containers/Home/index';
import Login from './containers/Login/index';
import Register from './containers/Register/index';

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route path={['/home', '/ ', '/', '*']}>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}

//const PrivateRoute = ({ component: Component, ...rest }: any) => (
//    <Route
//        {...rest}
//        render={props =>
//            localStorage.getItem('userCredentials') ? (
//                <Component {...props} />
//            ) : (
//                <Redirect
//                    to={{ pathname: '/login', state: { from: props.location } }}
//                />
//            )
//        }
//    />
//);

import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/HomeContainer/index';
import Login from './containers/LoginContainer/index';
import Register from './containers/RegisterContainer/index';
import { history } from './utils';

export default function Routing() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/register" component={Register} exact />
                <Route path="/login" component={Login} exact />
                <PrivateRoute path="/home" component={Home} exact />
                <Redirect from="/" to="/home" exact />
                <Redirect from="*" to="/home" exact />
            </Switch>
        </Router>
    );
}

const PrivateRoute: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
}> = props => {
    const condition = localStorage.getItem('userCredentials');

    return condition ? (
        <Route
            path={props.path}
            exact={props.exact}
            component={props.component}
        />
    ) : (
        <Redirect to="/login" />
    );
};

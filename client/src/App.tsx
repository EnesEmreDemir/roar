import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { history } from './utils';

export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/register" component={RegisterPage} exact />
                <Route path="/login" component={LoginPage} exact />
                <PrivateRoute path="/home" component={HomePage} exact />
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

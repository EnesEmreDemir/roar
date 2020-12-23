import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userActions, alertActions } from '../../actions';
import { history } from '../../utils';
import { ILogin } from '../../types/userInterfaces';
import Logo from '../../assets/tiger.svg';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

type Inputs = {
    email: string;
    password: string;
};

export default function LoginContainer() {
    const dispatch = useDispatch();
    const alert = useSelector((state: any) => state.alertReducer);
    const { register, handleSubmit, errors } = useForm<Inputs>();

    // clear alert on location change
    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);
    //
    // reset login status
    //useEffect(() => {
    //    dispatch(userActions.logout());
    //}, []);

    const onSubmit = (data: ILogin) => {
        dispatch(userActions.login(data));
    };
    document.body.style.backgroundColor = 'black';

    return (
        <div className="login-form">
            <div className="img-container">
                <img src={Logo} alt="Logo" />
            </div>
            <p className="title">Login to Roar</p>
            <p className="alert">{alert.message}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">E-mail</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email."
                    ref={register({ required: true })}
                />
                {errors.email && (
                    <p className="error">This field is required</p>
                )}
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password."
                    ref={register({ required: true })}
                />
                {errors.password && (
                    <p className="error">This field is required</p>
                )}
                <label>Remember me</label>
                <input type="checkbox"></input>
                <span>
                    <Link to=".com">Forgot password?</Link>
                </span>
                <input type="submit"></input>
            </form>
            <span>
                <Link to="/register">Sign up</Link>
            </span>
        </div>
    );
}

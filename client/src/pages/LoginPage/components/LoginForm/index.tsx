import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userActions } from '../../../../actions';
import { ILogin } from '../../../../types/userInterfaces';
import Logo from '../../../../assets/tiger.svg';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

type Inputs = {
    email: string;
    password: string;
};

export function LoginForm() {
    const dispatch = useDispatch();
    const alert = useSelector((state: any) => state.alertReducer);
    const { register, handleSubmit, errors } = useForm<Inputs>();

    //For password visiblity.
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const onSubmit = (data: ILogin) => {
        dispatch(userActions.login(data));
    };

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
                    className="password"
                    name="password"
                    type={passwordShown ? 'text' : 'password'}
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
                <input type="checkbox" onClick={togglePasswordVisiblity} />
            </form>
            <label>Show Password</label>
            <span>
                <Link to="/register">Sign up</Link>
            </span>
        </div>
    );
}

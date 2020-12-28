import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../../../assets/tiger.svg';
import { Link } from 'react-router-dom';
import { userActions } from '../../../../actions';
import { IRegister } from '../../../../types/userInterfaces';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.css';

//TODO: Add prevent transition feature.

type Inputs = {
    name: string;
    userName: string;
    email: string;
    password: string;
};

export function RegisterForm() {
    const dispatch = useDispatch();
    const alert = useSelector((state: any) => state.alertReducer);
    const { register, handleSubmit, errors } = useForm<Inputs>();

    //For password visiblity.
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const onSubmit = function (data: IRegister) {
        data.date = new Date().toISOString();
        dispatch(userActions.register(data));
    };

    return (
        <div className={styles.RegisterForm}>
            <div className="img-container">
                <img src={Logo} alt="Logo" />
            </div>
            <p className="title">Register to Roar</p>
            <p className="alert">{alert.message}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Enter you name."
                    ref={register({ required: true })}
                />
                {errors.name && <p className="error">This field is required</p>}
                <label htmlFor="userName">Username</label>
                <input
                    name="userName"
                    type="text"
                    placeholder="Enter you username."
                    ref={register({ required: true })}
                />
                {errors.userName && (
                    <p className="error">This field is required</p>
                )}
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
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="Enter your password."
                    ref={register({ required: true })}
                />
                {errors.password && (
                    <p className="error">This field is required</p>
                )}
                <input type="submit"></input>
                <input type="checkbox" onClick={togglePasswordVisiblity} />
                <label>Show Password</label>
            </form>
            <span>
                <Link to="/login">Already have an account?</Link>
            </span>
        </div>
    );
}

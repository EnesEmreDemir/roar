import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/tiger.svg';
import { Link } from 'react-router-dom';
import { userAPI } from '../../api/user';
import './style.css';

//TODO: Add pr

type Inputs = {
    name: string;
    username: string;
    email: string;
    password: string;
};

export default function Register() {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const onSubmit = (data: object) => userAPI.register(data);

    return (
        <div className="register-form">
            <div className="img-container">
                <img src={Logo} alt="Logo" />
            </div>
            <p className="title">Register to Roar</p>
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
                {errors.username && (
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
                    type="password"
                    placeholder="Enter your password."
                    ref={register({ required: true })}
                />
                {errors.password && (
                    <p className="error">This field is required</p>
                )}
                <input type="submit"></input>
            </form>
            <span>
                <Link to="/login">Already have an account?</Link>
            </span>
        </div>
    );
}

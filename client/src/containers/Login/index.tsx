import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import Logo from '../../assets/tiger.svg';

type Inputs = {
    email: string;
    password: string;
};

export default function Login() {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = (data: any) => console.log(data);

    console.log(watch('name')); // watch input value by passing the name of it

    return (
        <div className="register-form">
            <div className="img-container">
                <img src={Logo} alt="Logo" />
            </div>
            <p className="title">Login to Roar</p>
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
                    <a href=".com">Forgot password?</a>
                </span>
                <input type="submit"></input>
            </form>
            <span>
                <a href="register">Sign up</a>
            </span>
        </div>
    );
}

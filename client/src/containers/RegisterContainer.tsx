import React from "react";
import { useForm } from "react-hook-form";
import "./RegisterContainer.css";
import Logo from "../assets/tiger.svg";

type Inputs = {
  email: string;
  password: string;
  username: string;
  name: string;
};

export default function Register() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it

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
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Enter you username."
          ref={register({ required: true })}
        />
        {errors.username && <p className="error">This field is required</p>}
        <label htmlFor="email">E-mail</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email."
          ref={register({ required: true })}
        />
        {errors.email && <p className="error">This field is required</p>}
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password."
          ref={register({ required: true })}
        />
        {errors.password && <p className="error">This field is required</p>}
        <span>
          <a href=".com">Forgot password?</a>
        </span>
        <input type="submit"></input>
      </form>
      <span>
        <a href=".com">Already have a account?</a>
      </span>
    </div>
  );
}

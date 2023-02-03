import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const App = () => {
  const schema = yup.object().shape({
    Username: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().min(4).max(20).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log("errors", errors);

  console.log("errors");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register("Username")}
            />
            {errors.Username && (
              <div className="field"> {errors.Username.message} </div>
            )}
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...register("Email")}
            />
            {errors.Email && (
              <div className="field">{errors.Email.message}</div>
            )}
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("Password")}
            />
            {errors.Password && (
              <div className="field">{errors.Password.message}</div>
            )}
          </div>

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
// console.log("Username: ", errors.Username);
// console.log("Email: ", errors.Email);
// console.log("Password: ", errors.Password);

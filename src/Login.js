import React, { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { validate } from "./validate";
import { notify } from "./toast";

const Login = () => {

    const [data, setData] = useState({
      email: "",
      password: "",
    });

    const [error, setError] = useState({});

    const [touched, setTouched] = useState({});

    useEffect(() => {
      setError(validate(data, "login"));
    }, [data]);

    const changeHandler = (event) => {
       setData({ ...data, [event.target.name]: event.target.value });
    };
    const touchHandler = (event) => {
      setTouched({
        ...touched,
        [event.target.name]: true,
      });
    };

    const submitHandler = (event) => {
      event.preventDefault();
      if (!Object.keys(error).length) {
        notify("success", "you logged in successfully");
      } else {
        setTouched({
          email: true,
          password: true,
        });
        notify("error", "data is invalid");
      }
    };

    return (
      <div className="w-25 p-5 m-auto mt-5 border border-secondary rounded">
        <form onSubmit={submitHandler} className="center">
          <h1 className="text-primary mb-4 fw-bold">Login</h1>
          
          <div className="mb-3">
            <label className="form-label">
              email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={data.email}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            {error.email && touched.email && (
              <small className="text-danger">{error.email}</small>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">
              password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={data.password}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            {error.password && touched.password && (
              <small className="text-danger">{error.password}</small>
            )}
          </div>
          
          <div>
            don't you have an account? <Link to="/register">sign up</Link>
            <button type="submit" className="btn btn-primary d-block mt-3">
              Login
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
};

export default Login;
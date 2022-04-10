import React, { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { validate } from './validate';
import { notify } from './toast';


const Register = () => {
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAccepted: false,
    });

    const [error, setError] = useState({});

    const [touched, setTouched] = useState({})

    useEffect (() => {
      setError(validate(data, "signup"))
    }, [data])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked });
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }
    const touchHandler = event => {
      setTouched({
        ...touched, [event.target.name]: true
      })
    }

    const submitHandler = event => {
      event.preventDefault();
      if (!Object.keys(error).length) {
        notify("success","you signed up successfully")
      } else {
          setTouched({
          name: true,
          email: true,
          password: true,
          confirmPassword: true,
          isAccepted: true,
      });
         notify("error","data is invalid")
    }
      
    }

    return (
      <div className="w-25 p-5 m-auto mt-5 border border-secondary rounded">
        <form onSubmit={submitHandler} className="center">
          <h1 className="text-primary mb-4 fw-bold">Sign Up</h1>
          <div className="mb-3">
            <label className="form-label">
              name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.name}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            {error.name && touched.name && (
              <small className="text-danger">{error.name}</small>
            )}
          </div>
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
          <div className="mb-3">
            <label className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            {error.confirmPassword && touched.confirmPassword && (
              <small className="text-danger">{error.confirmPassword}</small>
            )}
          </div>
          <div className="mb-3 form-check">
            <label className="form-check-label">
              I accept the terms of policy
            </label>
            <input
              type="checkBox"
              name="isAccepted"
              className="form-check-input"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            {error.isAccepted && touched.isAccepted && (
              <small className="text-danger d-block">{error.isAccepted}</small>
            )}
          </div>
          <div>
            already have an account? <Link to="/login">Login</Link>
            <button type="submit" className="btn btn-primary d-block mt-3">
              Sign Up
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
};

export default Register;
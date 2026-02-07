import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");





function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signup Successful");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow-lg p-4 mt-4">
                        <div className="card-body">
                            <h3 className="text-center text-primary mb-4">
                                Create Account
                            </h3>

                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div className="form-group mb-4">
                                    <label className="mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-group mb-4">
                                    <label className="mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="form-group mb-4">
                                    <label className="mb-2">Password</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block mt-3"
                                    onClick={() => {
                                     window.location.href = "https://dashboard-zerodha-kappa.vercel.app/";


                                    }}

                                >
                                    Sign Up
                                </button>
                            </form>

                            <p className="text-center mt-4 mb-0">
                                Already have an account?{" "}
                                <a href="/" className="text-primary">
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

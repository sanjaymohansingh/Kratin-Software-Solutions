import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";
import "../styles/login-styles.css";

const Login = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <a href="/">
            <img
              className="old_couple"
              src="https://static.vecteezy.com/system/resources/previews/016/389/947/original/nursing-and-elderly-care-free-png.png"
              alt="Old Couple"
            />
          </a>
          <h1 className="mb-4">Welcome to Elderly Care</h1>
          <h6>
            Already have an account?{" "}
            <Link to="/signup" style={{ color: "red" }}>
              Signup
            </Link>
          </h6>
          <h6>Continue as guest</h6>
        </div>
        <div className="col-md-8">
          <form>
            <div className="container">
              <img className="profileImage" src={profileImage} alt="Profile" />
              <label className="label1" aria-hidden="true">
                Login Page
              </label>
            </div>
            <input
              required=""
              name="username"
              type="text"
              id="username"
              className="form-control"
              placeholder="Email Id"
              value=""
            />
            <input
              name="password"
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value=""
            />
            {/* Replace anchor tag with Link */}
            <div className="forget-password">
              <h6>
                <Link to="/forgetPassword" style={{ color: "red" }}>
                  Forgot Password
                </Link>
              </h6>
            </div>
            <button className="button mt-5 form-control">Login</button>
            <button type="reset" className="button mt-3 form-control">
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

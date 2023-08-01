import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <a href="/">
            <img
              className="old_couple"
              src="https://static.vecteezy.com/system/resources/previews/016/389/947/original/nursing-and-elderly-care-free-png.png"
              alt="old_couple"
            />
          </a>
          <h1 className="mb-4">Welcome to Be_Healthy</h1>
          <h6>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "red" }}>
              Login
            </Link>
          </h6>
          <h6>Continue as guest</h6>
        </div>
        <div className="col-md-8">
          <form>
            <div className="container">
              <img className="profileImage" src={profileImage} alt="Profile" />
              <label className="label1" aria-hidden="true">
                Forgot Your Password
              </label>
            </div>
            <div className="MuiFormControl-root MuiFormControl-fullWidth css-dms7x9">
              <input
                required=""
                name="username"
                type="text"
                id="username"
                className="form-control"
                placeholder="Email Id"
                value=""
              />
            </div>
            <button id="sendNewPassword" className="button mt-5 form-control">
              Send New Password
            </button>
            <button type="reset" className="button mt-3 form-control">
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

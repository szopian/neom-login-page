import React from "react";

import Button from "../button/button";
import SocialMedia from "../social-media/social-media";

import "./form.scss";

const Form = () => (
  <div className="form">
    <h1 className="header">Login Here</h1>
    <label className="label">Username</label>
    <input className="input" type="text" placeholder="Email or Phone" />
    <label className="label">Password</label>
    <input className="input" type="password" placeholder="Password" />
    <Button>Log In</Button>
    <SocialMedia />
  </div>
);

export default Form;

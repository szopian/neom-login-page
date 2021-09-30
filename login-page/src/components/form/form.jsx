import React from "react";

import "./form.scss";

const Form = () => (
  <div className="form">
    <h1 className="header">Login Here</h1>
    <label className="label">Username</label>
    <input className="input" type="text" placeholder="Email or Phone" />
    <label className="label">Password</label>
    <input className="input" type="password" placeholder="Password" />
  </div>
);

export default Form;

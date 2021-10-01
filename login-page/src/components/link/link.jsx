import React from "react";

import "./link.scss";

const Link = ({ children, link }) => (
  <a href={link} className="link">
    {children}
  </a>
);

export default Link;

import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/prospa-white-logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Prospa" />
    </Link>
  );
};

export default Logo;

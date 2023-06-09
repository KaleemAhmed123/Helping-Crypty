import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem]
text-lg text-cyan flex items-center
     "
    >
      <span>Helping_Gecko</span>
      <img src={logoSvg} alt="CryptoBucks" />
    </Link>
  );
};

export default Logo;

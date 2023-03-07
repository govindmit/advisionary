import React from "react";
import { Link } from "react-router-dom";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-white text-4xl ${className}`}
    >
      {/* <img className={`block max-h-12`} src="/logo.svg" alt="Logo" /> */}
      advisiory
    </Link>
  );
};

export default Logo;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Login from "container/Login";
import Signup from "container/Signup";

export default function Header() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="relative w-full z-40">
      <div className={`nc-MainNav2 relative z-10 ${"onTop "}`}>
        <div className="px-4 lg:pl-[3rem] lg:pr-[3rem] py-5 relative flex items-center justify-between space-x-4 xl:space-x-8">
          <div className="flex items-center">
            <Logo className="mr-10" />
            <div className="hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-800 px-5"></div>
            <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
              <NavMenuItem menu={"Home"} path="/" />
              <NavMenuItem menu={"Solution"} path="/services" />
              <NavMenuItem menu={"About us"} path="/about-us" />
              {/* <NavMenuItem menu={'Services'} path="/services" /> */}
              <NavMenuItem menu={"Contact us"} path="/contact-us" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavMenuItem = ({ menu, path, className = "" }) => {
  return (
    <li className="menu-item">
      <NavLink
        rel="noopener noreferrer"
        className={`inline-flex items-center text-sm xl:text-base font-normal text-white py-2 px-4 xl:px-5 rounded-full hover:text-[#702172] ${className}`}
        to={{
          pathname: path,
        }}
      >
        {menu}
      </NavLink>
    </li>
  );
};

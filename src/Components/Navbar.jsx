import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const linkclass = ({ isActive }) =>
  isActive
    ? ' mr-5 hover:text-gray-900 overline'
    : 'mr-5 hover:text-gray-900 ';
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 text-primary body-font w-full bg-secondary">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          <NavLink
            to="/"
            className="flex font-medium items-center ml-3 text-xl"
          >
            ESUT HOMES
          </NavLink>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-3xl text-primary" />
              ) : (
                <FaBars className="text-3xl text-primary" />
              )}
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto`}
          >
            <NavLink to="/" className={linkclass} onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/About" className={linkclass} onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/Lodges" className={linkclass} onClick={toggleMenu}>
              Lodges
            </NavLink>
            <NavLink to="/AddLodges" className={linkclass} onClick={toggleMenu}>
              Add Lodges
            </NavLink>
            <button className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-secondary hover:text-primary text-secondary rounded text-base mt-4 md:mt-0">
              My Portal
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

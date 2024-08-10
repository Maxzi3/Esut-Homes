import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const linkclass = ({ isActive }) =>
  isActive
    ? " mr-4 hover:text-gray-900 overline px-2 py-1"
    : "mr-4 hover:text-gray-900 px-2 py-1";
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

          {/* Mobile view menu links */}
          <nav
            className={`${
              isOpen ? "max-h-44 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden transition-all duration-300 ease-in-out md:hidden flex flex-col md:flex-row items-end text-base justify-center w-full md:w-auto`}
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
            <a
              href="https://portal.esut.edu.ng/login.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-secondary hover:text-primary text-secondary rounded text-base mt-4 mr-4 md:mt-0"
            >
              My Portal
            </a>
          </nav>

          {/* Desktop menu links */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } hidden md:flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto`}
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
            <a
              href="https://portal.esut.edu.ng/login.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-secondary hover:text-primary text-secondary rounded text-base mt-4 md:mt-0"
            >
              My Portal
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

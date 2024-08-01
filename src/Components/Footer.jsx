import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <h1 className="font-bold text-xl">
            ESUT HOMES
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            &copy; 2020 ESUT HOMES. All rights reserved.
          </p>
          <BackToTop />
        </div>
        <div className="bg-secondary text-primary">
          <div className="container mx-auto py-4 px-5 flex flex-row justify-between items-center">
            <p className=" text-sm">@EsutHomes</p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <FaFacebookF className="ml-3" />
              <FaTwitter className="ml-3" />
              <FaInstagram className="ml-3" />
              <FaGithub className="ml-3" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

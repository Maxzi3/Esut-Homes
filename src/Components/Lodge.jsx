import React from "react";
import { useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { Link } from "react-router-dom";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

const Lodge = ({ Lodge }) => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [showFullDescription, setshowFullDescription] = useState(false);
  let description = Lodge.description;
  // Ensure Lodge and Lodge.description are defined before slicing
  if (Lodge && Lodge.description) {
    if (!showFullDescription) {
      description = Lodge.description.slice(0, 122) + "...";
    } else {
      description = Lodge.description;
    }
  } else {
    // Provide a fallback for undefined Lodge or Lodge.description
    description = "No description available.";
  }

  return (
    <div ref={ref}>
      <div className="p-4 my-14">
        <div
          className={`border-2 border-primary bg-primary text-secondary border-opacity-60 rounded-lg overflow-hidden ${
            isIntersecting ? "animate-fadeInBottom" : ""
          }`}
        >
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://dummyimage.com/721x401"
            alt={Lodge.name}
          ></img>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium mb-3">
              {Lodge.name}
            </h1>
            <p className="leading-relaxed mb-3">{description}</p>
            <button
              onClick={() => setshowFullDescription((prevState) => !prevState)}
              className="text-secondary mb-5 hover:text-gray-900"
            >
              {showFullDescription ? "Less" : "More"}
            </button>
            <div className="flex justify-between items-center text-sm">
              <Link
                to={`/Lodges/${Lodge.id}`}
                className="text-secondary hover:text-gray-900 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Learn More <FaArrowRight className="ml-2 animate-bounce" />
              </Link>
              <span>{Lodge.area}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lodge;

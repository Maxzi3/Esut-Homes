import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";


const Section6 = ({ Testimonial, index }) => {
       useEffect(() => {
         Aos.init({
           duration: 1000, // Animation duration in milliseconds
           once: true,
         });
       }, []);
  return (
    <div className={`p-4 w-full mx-auto`}>
      <div
        className={`h-full p-8 rounded ${
          index % 2 === 0
            ? "bg-secondary text-primary hover:bg-primary hover:text-secondary"
            : "bg-primary text-secondary hover:bg-secondary hover:text-primary"
        } `}
        data-aos="fade-up"
      >
        <FaQuoteRight className="block w-5 h-5 mb-4" />
        <p className="leading-relaxed mb-6">{Testimonial.testimonial}</p>
        <div className="inline-flex items-center">
          <h1 className="w-12 h-12 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary p-3">
            {Testimonial.id < 10 ? `0${Testimonial.id}` : Testimonial.id}
          </h1>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium">{Testimonial.name}</span>
            <span className="text-sm">{Testimonial.department}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section6;

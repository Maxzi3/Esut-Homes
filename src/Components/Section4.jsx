import React from 'react'
import Aos from "aos";
import { useEffect } from "react";

const Section4 = () => {
   useEffect(() => {
     Aos.init({
       duration: 1000, // Animation duration in milliseconds
       once: true,
     });
   }, []);
  return (
    <div className="flex flex-col md:flex-row w-10/12 md:gap-0 gap-10 mx-auto md:mx-48 mt-24 mb-20 ">
      <div className="bg-bg3 w-full md:h-96 h-80 bg-center bg-cover z-0"></div>
      <div
        className="md:w-full md:h-80 bg-secondary text-primary md:relative md:right-28 md:top-10 z-10 md:px-10 px-4 pt-4"
        data-aos="flip-right"
      >
        <h1 className="md:px-10 md:text-3xl text-xl p-4 font-bold">
          We Put People First
        </h1>
        <p className="md:px-10 md:py-8 px-2 py-4 text-lg ">
          Our mission is to provide a platform that empowers individuals to take
          control of their financial lives.
        </p>
      </div>
    </div>
  );
}

export default Section4
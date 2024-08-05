import React from 'react'
import Aos from "aos";
import { useEffect } from "react";

const Section7 = () => {
      useEffect(() => {
        Aos.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,
        });
      }, []);
  return (
    <div>
      <section className="text-secondary body-font " data-aos="fade-up">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center  mb-20">
            <h1 className="sm:text-3xl text-2xl  title-font font-bold mb-4">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our team is comprised of experienced professionals who are
              passionate about delivering exceptional results. We take pride in
              our
            </p>
          </div>
          <div className="flex flex-wrap md:mx-60">
            <div className="p-2 md:w-1/2 w-full ">
              <div className="h-full flex items-center border-secondary hover:bg-secondary hover:text-primary border p-4 rounded-lg">
                <h1 className="w-16 p-5 rounded-full mr-4">001</h1>
                <div className="flex-grow">
                  <h2 className=" title-font font-semibold">
                    Holden Caulfield
                  </h2>
                  <p>UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center border-secondary border p-4 rounded-lg hover:bg-secondary hover:text-primary ">
                <h1 className="w-16 p-5  rounded-full mr-4">002</h1>
                <div className="flex-grow">
                  <h2 className="title-font font-semibold">Henry Letham</h2>
                  <p>CTO</p>
                </div>
              </div>
            </div>
            <div className="p-2  md:w-1/2 w-full">
              <div className="h-full flex items-center border-secondary border p-4 rounded-lg hover:bg-secondary hover:text-primary ">
                <h1 className="w-16 p-5  rounded-full mr-4">003</h1>
                <div className="flex-grow">
                  <h2 className=" title-font font-semibold">Oskar Blinde</h2>
                  <p>Agent 2</p>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center border-secondary border p-4 rounded-lg hover:bg-secondary hover:text-primary ">
                <h1 className="w-16 p-5 rounded-full mr-4">004</h1>
                <div className="flex-grow">
                  <h2 className="title-font font-semibold">John Doe</h2>
                  <p>Agent 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section7
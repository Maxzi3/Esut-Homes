import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const Section3 = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <div ref={ref} className="flex flex-col md:flex-row w-10/12 m-auto my-20">
      <div className="bg-secondary px-20 w-full md:w-1/2 text-primary">
        <h1 className="line-before2 md:text-xl text-sm  text-center pt-20 uppercase font-bold">Work Flow</h1>
        <h2 className="md:text-3xl text-xl text-center py-4">How It Works</h2>
        <div
          className={`container ${
            isIntersecting ? "animate-fadeInBottom" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row text-center w-full my-14 md:gap-2 gap-8 items-center">
            <div>
              <h1 className="w-20 m-auto p-5 text-secondary hover:bg-secondary hover:text-primary font-bold text-4xl bg-primary rounded-full">
                01
              </h1>
              <h1 className="p-4 font-bold text-sm">Evaluate Property</h1>
              <p className="text-base">
                Different Varieties to Pick from which ensures proper Evaluation
              </p>
            </div>
            <div>
              <h1 className="w-20 m-auto p-5 text-secondary hover:bg-secondary hover:text-primary font-bold text-4xl bg-primary rounded-full">
                02
              </h1>
              <h1 className="p-4 font-bold text-sm">Meet Your Agent</h1>
              <p className="text-base">
               Meet your agent and discuss your needs and preferences
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-center w-full my-14 md:gap-2 gap-8 items-center">
            <div>
              <h1 className="w-20 m-auto p-5 text-secondary hover:bg-secondary hover:text-primary font-bold text-4xl bg-primary rounded-full">
                03
              </h1>
              <h1 className="p-4 font-bold text-sm">Close The Deal</h1>
              <p className="text-base">
               Close the deal and get the keys to your new home
              </p>
            </div>
            <div>
              <h1 className="w-20 m-auto p-5 text-secondary hover:bg-secondary hover:text-primary font-bold text-4xl bg-primary rounded-full">
                04
              </h1>
              <h1 className="p-4 font-bold text-sm">Have Your Property</h1>
              <p className="text-base">
                Have your property and enjoy your new home
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg2 w-full md:w-1/2 bg-cover"></div>
    </div>
  );
};

export default Section3;

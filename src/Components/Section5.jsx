import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import useIntersectionObserver from "./useIntersectionObserver";

const Section5 = () => {
  const finalValues = {
    areaPopulation: 305,
    totalProperties: 1090,
    averageHouses: 209,
    totalBranches: 67,
  };

  const [startCounting, setStartCounting] = useState(false);

  const { ref, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting) {
      setStartCounting(true);
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      className="flex md:flex-row flex-col justify-between w-10/12 my-32 md:mx-20 mx-10 md:gap-0 gap-8 text-secondary"
    >
      <div className="flex gap-4 p-4 border-r-2 border-secondary">
        <h1 className="text-4xl font-bold">
          {startCounting ? (
            <CountUp start={1} end={finalValues.areaPopulation} duration={3} />
          ) : (
            finalValues.areaPopulation
          )}
        </h1>
        <h1 className="text-xl w-24 pr-32">Area Population</h1>
      </div>
      <div className="flex gap-4 p-4 border-r-2 border-secondary">
        <h1 className="text-4xl font-bold">
          {startCounting ? (
            <CountUp start={1} end={finalValues.totalProperties} duration={3} />
          ) : (
            finalValues.totalProperties
          )}
        </h1>
        <h1 className="text-xl w-24 pr-32">Total Properties</h1>
      </div>
      <div className="flex gap-4 p-4 border-r-2 border-secondary">
        <h1 className="text-4xl font-bold">
          {startCounting ? (
            <CountUp start={1} end={finalValues.averageHouses} duration={3} />
          ) : (
            finalValues.averageHouses
          )}
        </h1>
        <h1 className="text-xl w-24 pr-32">Average Houses</h1>
      </div>
      <div className="flex gap-4 p-4">
        <h1 className="text-4xl font-bold">
          {startCounting ? (
            <CountUp start={1} end={finalValues.totalBranches} duration={3} />
          ) : (
            finalValues.totalBranches
          )}
        </h1>
        <h1 className="text-xl w-24">Total Branches</h1>
      </div>
    </div>
  );
};

export default Section5;

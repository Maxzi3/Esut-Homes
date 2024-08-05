import React from "react";
import { FaDollarSign, FaWallet, FaFileLines, FaLock } from "react-icons/fa6";
import Aos from "aos";
import { useEffect } from "react";

const Section2 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <h1 className="text-center line-before text-2xl text-secondary font-bold pt-14">
        Our Services
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-4 py-14 w-4/5 m-auto">
        <div className="">
          <FaDollarSign className="text-secondary text-5xl m-auto" />
          <h1 className="text-xl p-4 font-semibold text-gray-800 text-center">
            No DownPayment
          </h1>
          <p className="text-center text-md text-gray-600 font-medium">
            No down payment is required for our services. We understand that
            everyone's financial situation is different
          </p>
        </div>
        <div className="">
          <FaWallet className="text-secondary text-5xl m-auto" />
          <h1 className="text-xl p-4 font-semibold text-gray-800 text-center">
            All Cash Offer
          </h1>
          <p className="text-center text-md text-gray-600 font-medium">
            We offer all cash for your property, so you can sell your property
            quickly and easily.
          </p>
        </div>
        <div className="">
          <FaFileLines className="text-secondary text-5xl m-auto" />
          <h1 className="text-xl pt-4 pb-4 font-semibold text-gray-800 text-center">
            Experts in Your Corner
          </h1>
          <p className="text-center text-md text-gray-600 font-medium">
            Our team of experts will guide you through the process and ensure
            that everything runs smoothly.
          </p>
        </div>
        <div className="">
          <FaLock className="text-secondary text-5xl m-auto" />
          <h1 className="text-xl py-4 font-semibold text-gray-800 text-center">
            Locked in Pricing
          </h1>
          <p className="text-center text-md text-gray-600 font-medium">
            Our pricing is locked in, so you can rest assured that you'll get a
            fair deal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;

import React from "react";
import Testimonial from "../Components/Testimonial";
import BackToHome from "../Components/ViewAll";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const TestimonialPage = () => {
  return (
    <div className="my-20 text-secondary hover:text-gray-900">
        <div className="flex items-center">
      <FaArrowLeft className="mx-2"/>
      <Link to ="/" className="">
        Back to Home
      </Link>
        </div>
      <Testimonial />
    </div>
  );
};

export default TestimonialPage;

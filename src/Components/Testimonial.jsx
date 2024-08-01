import React from "react";
import Testimonials from "../Testimonial.json";
import Section6 from "./Section6";

const Testimonial = ({isHome}) => {
    const  recentTestimonials = isHome ? Testimonials.slice(0,2) : Testimonials

  return (
    <section className="text-primary body-font">
      <div className="container px-5 py-20 mx-auto">
        <h1 className="text-3xl text-secondary font-medium title-font mb-12 text-center">
          Testimonials
        </h1>
        <div  className={`grid ${
          isHome
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3 gap-4"
        }`}>
          {recentTestimonials.map((test, index) => (
            <Section6 key={test.id} Testimonial={test} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

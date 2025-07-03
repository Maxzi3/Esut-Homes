
import Testimonials from "../Testimonial.json";
import Section6 from "./Section6";

const Testimonial = ({isHome}) => {
    const  recentTestimonials = isHome ? Testimonials.slice(0,2) : Testimonials

  return (
    <section className="text-primary body-font">
      <div className="px-5 py-20 mx-aut0">
        <h1 className="mb-12 text-3xl font-medium text-center text-secondary title-font">
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

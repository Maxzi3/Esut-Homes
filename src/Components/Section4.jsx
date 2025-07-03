import { useEffect } from "react";
import Aos from "aos";

const Section4 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full px-4 my-20">
      <div className="max-w-6xl mx-auto">
        {/* Image container */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-bg3 bg-cover bg-center z-0" />

          {/* Text Card */}
          <div
            data-aos="flip-right"
            className="absolute top-6 left-6 md:top-10 md:left-10 bg-secondary text-primary p-6 md:p-10 rounded-lg shadow-lg z-10 max-w-[90%] md:max-w-[400px]"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We Put People First
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Our mission is to provide a platform that empowers individuals to
              take control of their financial lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

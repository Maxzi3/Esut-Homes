
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
      <section className="text-secondary " data-aos="fade-up">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col mb-20 text-center ">
            <h1 className="mb-4 text-2xl font-bold sm:text-3xl title-font">
              Our Team
            </h1>
            <p className="text-base text-center leading-relaxed mx-auto md:w-2/3 lg:w-1/2">
              Our team is comprised of experienced professionals who are
              passionate about delivering exceptional results. We take pride in
              our
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:px-60 ">
            <div className="w-full p-2 ">
              <div className="flex items-center h-full p-4 border rounded-lg border-secondary hover:bg-secondary hover:text-primary">
                <h1 className="w-16 p-5 mr-4 rounded-full">001</h1>
                <div className="flex-grow">
                  <h2 className="font-semibold title-font">
                    Holden Caulfield
                  </h2>
                  <p>UI Designer</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 ">
              <div className="flex items-center h-full p-4 border rounded-lg border-secondary hover:bg-secondary hover:text-primary ">
                <h1 className="w-16 p-5 mr-4 rounded-full">002</h1>
                <div className="flex-grow">
                  <h2 className="font-semibold title-font">Henry Letham</h2>
                  <p>CTO</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 ">
              <div className="flex items-center h-full p-4 border rounded-lg border-secondary hover:bg-secondary hover:text-primary ">
                <h1 className="w-16 p-5 mr-4 rounded-full">003</h1>
                <div className="flex-grow">
                  <h2 className="font-semibold title-font">Oskar Blinde</h2>
                  <p>Agent 2</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 ">
              <div className="flex items-center h-full p-4 border rounded-lg border-secondary hover:bg-secondary hover:text-primary ">
                <h1 className="w-16 p-5 mr-4 rounded-full">004</h1>
                <div className="flex-grow">
                  <h2 className="font-semibold title-font">John Doe</h2>
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
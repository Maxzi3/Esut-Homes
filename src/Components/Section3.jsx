import { useEffect } from "react";
import Aos from "aos";

const steps = [
  {
    number: "01",
    title: "Evaluate Property",
    desc: "Different varieties to pick from which ensures proper evaluation.",
  },
  {
    number: "02",
    title: "Meet Your Agent",
    desc: "Meet your agent and discuss your needs and preferences.",
  },
  {
    number: "03",
    title: "Close The Deal",
    desc: "Close the deal and get the keys to your new home.",
  },
  {
    number: "04",
    title: "Have Your Property",
    desc: "Have your property and enjoy your new home.",
  },
];

const Section3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="flex flex-col md:flex-row w-11/12 md:h-[70vh] lg:h-[800px] overflow-hidden mx-auto">
      {/* Left Workflow Content */}
      <div className="w-full md:w-1/2 bg-secondary text-primary px-6 py-16 lg:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-sm md:text-base font-bold uppercase tracking-wide text-primary underline underline-offset-4">
            Work Flow
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-10">
            How It Works
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10"
          data-aos="fade-up"
        >
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center text-3xl font-bold rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary transition">
                {step.number}
              </div>
              <h4 className="mt-4 text-base font-bold">{step.title}</h4>
              <p className="mt-2 text-sm text-primary">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-bg2 bg-cover bg-center" />
    </section>
  );
};

export default Section3;

import { useEffect } from "react";
import Aos from "aos";
// import CountUp from "react-countup";

const Section5 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-20 " data-aos="fade-up">
      <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 mx-auto text-center sm:grid-cols-2 md:grid-cols-4 text-secondary">
        {/* Single Stat */}
        <div className="flex flex-col items-center ">
          <h1 className="text-5xl font-bold ">
            305
            {/* <CountUp end={305} duration={3} /> */}
          </h1>
          <p className="mt-2 text-lg font-medium">Area Population</p>
        </div>

        {/* Single Stat */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold ">
            1090
            {/* <CountUp end={1090} duration={3} /> */}
          </h1>
          <p className="mt-2 text-lg font-medium">Total Properties</p>
        </div>

        {/* Single Stat */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold ">
            209
            {/* <CountUp end={209} duration={3} /> */}
          </h1>
          <p className="mt-2 text-lg font-medium">Average Houses</p>
        </div>

        {/* Single Stat */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold ">
            67
            {/* <CountUp end={67} duration={3} /> */}
          </h1>
          <p className="mt-2 text-lg font-medium">Total Branches</p>
        </div>
      </div>
    </section>
  );
};

export default Section5;

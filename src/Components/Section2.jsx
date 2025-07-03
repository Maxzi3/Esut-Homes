import { FaDollarSign, FaWallet, FaFileLines, FaLock } from "react-icons/fa6";
import Aos from "aos";
import { useEffect } from "react";

const Section2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaDollarSign className="text-4xl  mb-4" />,
      title: "No DownPayment",
      desc: "No down payment is required. We understand that everyone’s financial situation is different.",
    },
    {
      icon: <FaWallet className="text-4xl mb-4" />,
      title: "All Cash Offer",
      desc: "We offer all cash for your property so you can sell quickly and easily.",
    },
    {
      icon: <FaFileLines className="text-4xl  mb-4" />,
      title: "Experts in Your Corner",
      desc: "Our team will guide you through the process and ensure everything runs smoothly.",
    },
    {
      icon: <FaLock className="text-4xl  mb-4" />,
      title: "Locked in Pricing",
      desc: "Our pricing is locked in, so you’ll always get a fair and transparent deal.",
    },
  ];

  return (
    <section className="py-20 px-4 text-secondary" data-aos="fade-up">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-secondary uppercase mb-12">
        Our Services
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6 py-8 border rounded-lg  shadow hover:shadow-md transition"
          >
            {service.icon}
            <h2 className="text-lg font-semibold  mb-2">{service.title}</h2>
            <p className="text-sm ">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;

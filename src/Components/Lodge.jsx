import { useEffect, useState } from "react";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aos from "aos";

const Lodge = ({ Lodge }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const description = Lodge?.description
    ? showFullDescription
      ? Lodge.description
      : Lodge.description.slice(0, 122) + "..."
    : "No description available.";

  return (
    <div
      className="overflow-hidden transition duration-300 border shadow bg-primary border-primary/20 rounded-xl hover:shadow-lg"
      data-aos="fade-up"
    >
      <img
        className="object-cover w-full h-48"
        src={Lodge.image || "https://dummyimage.com/721x401"}
        alt={Lodge.name}
      />

      <div className="p-5 text-secondary">
        <h3 className="mb-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">
          Details
        </h3>
        <h2 className="mb-2 text-xl font-bold">{Lodge.name}</h2>
        <p className="mb-3 text-sm">{description}</p>

        {Lodge.description?.length > 122 && (
          <button
            onClick={() => setShowFullDescription((prev) => !prev)}
            className="mb-3 text-sm font-medium text-blue-600 hover:underline"
          >
            {showFullDescription ? "Show Less" : "Read More"}
          </button>
        )}

        <div className="flex items-center justify-between mt-4 text-sm text-gray-700">
          <Link
            to={`/Lodges/${Lodge.id}`}
            className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline"
          >
            Learn More <FaArrowRight className="text-xs" />
          </Link>

          <div className="flex items-center gap-1">
            <FaLocationDot className="text-red-500" />
            <span>{Lodge.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lodge;

import React from "react";
import LodgeMore from "../Components/LodgeMore";
import Lodges from "../Lodges.json";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const LodgesLearnMore = () => {
  const { id } = useParams();
  const lodge = Lodges.find((lodge) => lodge.id === parseInt(id));

  if (!lodge) {
    return <div className="p-4 text-primary">Lodge not found.</div>;
  }

  return (
    <div className="py-20 text-secondary hover:text-gray-900">
      <div>
        <Link to="/Lodges" className="flex items-center p-4">
          <FaArrowLeft className="mx-2" />
          Back to LodgeList
        </Link>
      </div>
      <LodgeMore Lodge={lodge} />
    </div>
  );
};

export default LodgesLearnMore;

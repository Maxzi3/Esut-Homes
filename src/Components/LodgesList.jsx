import React from "react";
import Lodge from "./Lodge";
import Lodges from "../Lodges.json";

const LodgesList = ({ isHome, title, subtitle }) => {
  const recentLodges = isHome ? Lodges.slice(0, 3) : Lodges;

  return (
    <>
      <h1 className="line-before text-center pt-20 uppercase font-bold">
        {title}
      </h1>
      <h2 className="md:text-3xl text-2xl text-center py-4">{subtitle}</h2>
      <div
        className={`grid ${
          isHome
            ? "grid-cols-1 md:grid-cols-3"
            : "grid-cols-1 md:grid-cols-3 gap-4"
        }`}
      >
        {recentLodges.map((Lod) => (
          <Lodge key={Lod.id} Lodge={Lod} />
        ))}
      </div>
    </>
  );
};

export default LodgesList;

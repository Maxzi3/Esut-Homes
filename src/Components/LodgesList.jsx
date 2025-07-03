import Lodge from "./Lodge";
import Lodges from "../Lodges.json";

const LodgesList = ({ isHome, title, subtitle }) => {
  const recentLodges = isHome ? Lodges.slice(0, 3) : Lodges;

  return (
    <section className="px-4 py-10 md:px-12 lg:px-20">
      <h1 className="mb-2 text-3xl font-bold text-center uppercase text-secondary">
        {title}
      </h1>
      <h2 className="mb-8 text-xl text-center text-gray-600">{subtitle}</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recentLodges.map((lodge) => (
          <Lodge key={lodge.id} Lodge={lodge} />
        ))}
      </div>
    </section>
  );
};

export default LodgesList;

const Banner = ({ title, paragraph }) => {
  return (
    <div className="w-full bg-fixed bg-left bg-cover bg-custom-bg h-96">
      <h1 className="pt-32 pb-4 text-2xl font-extrabold text-center text-secondary md:text-5xl md:font-bold md:pt-32">
        {title}
      </h1>
      <p className="px-4 text-lg font-semibold text-center text-primary md:font-bold md:px-0 md:text-2xl">
        {paragraph}
      </p>
    </div>
  );
};

export default Banner;

const Coordingates = ({ longitude, latitude }) => {
  return (
    <>
      <div className="h-full w-full relative">
        <h3 className="xxs:text-[10px] sm:text-xs md:text-sm font-semibold mb-5 opacity-50 absolute">
          Latitude & Longitude
        </h3>
        <div className="h-full w-full flex flex-col justify-center gap-2 absolute xxs:pt-5 md:pt-3">
          <div className="h-[30px] w-full flex items-center gap-2">
            <img
              src={"/assets/icons/lat.png"}
              height={30}
              width={30}
              alt="sunrise icon"
              className="rounded-full overflow-hidden"
            />
            <h1 className="xxs:text-[10px] sm:text-sm md:text-md font-bold">
              {latitude}
            </h1>
          </div>
          <div className="h-[30px] w-full flex items-center xxs:gap-1 md:gap-2">
            <img
              src={"/assets/icons/lon.png"}
              height={30}
              width={30}
              alt="sunset icon"
              className="rounded-full overflow-hidden"
            />
            <h1 className="xxs:text-[10px] sm:text-sm md:text-md font-bold">
              {longitude}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coordingates;

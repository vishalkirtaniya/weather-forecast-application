import Image from "next/image";

const Coordingates = ({ longitude, latitude }) => {
  return (
    <>
      <div className="h-full w-full relative">
        <h3 className="text-sm font-semibold mb-5 opacity-50 absolute">
          Latitude & Longitude
        </h3>
        <div className="h-full w-full flex flex-col justify-center gap-2 absolute pt-3">
          <div className="h-[30px] w-full flex items-center gap-2">
            <Image
              src={"/assets/icons/lat.png"}
              height={30}
              width={30}
              alt="sunrise icon"
              className="rounded-full overflow-hidden"
            />
            <h1 className="text-md font-bold">{latitude}</h1>
          </div>
          <div className="h-[30px] w-full flex items-center gap-2">
            <Image
              src={"/assets/icons/lon.png"}
              height={30}
              width={30}
              alt="sunset icon"
              className="rounded-full overflow-hidden"
            />
            <h1 className="text-md font-bold">{longitude}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coordingates;

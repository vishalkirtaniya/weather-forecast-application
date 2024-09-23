import Image from "next/image";

const Visibility = ({ visibility }) => {
  const inKm = visibility / 1000;
  return (
    <>
      <div className="h-full w-full  relative">
        <h3 className="text-sm font-semibold mb-5 opacity-50 absolute">
          Visibility
        </h3>
        <div className="h-full w-full flex flex-col justify-center absolute">
          <div className="h-[30px] w-full flex items-center gap-2">
            <Image
              src={"/assets/icons/watch.png"}
              height={30}
              width={30}
              alt="watch icon"
              className="rounded-full"
            />

            <h1 className="text-3xl font-bold ">
              {inKm} <span className="text-lg">Km/h</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visibility;

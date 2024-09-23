import Image from "next/image";

const SearchBox = ({ inputRef, handleSearch }) => {
  return (
    <>
      <div className="searchBar h-[30px] w-full flex items-center justify-between">
        <div className="h-full w-[174px] flex items-center gap-1">
          <Image
            src={"/assets/icons/location.svg"}
            width={20}
            height={20}
            alt="Location Icon"
          />
          <input
            type="text"
            ref={inputRef}
            placeholder="Search for places..."
            className="focus:outline-none focus:border-customGrey focus:shadow-xl focus:shadow-customGrey rounded-md h-[25px] w-[150px] pl-1 text-sm text-black font-semibold transition duration-75"
          />
        </div>
        <button
          onClick={() => handleSearch(inputRef.current.value)} // Trigger API call when the button is clicked
          className="rounded-full h-[30px] w-[30px] flex items-center justify-center hover:bg-customGrey shadow-md shadow-customGrey bg-customOffWhite transition duration-150"
        >
          <Image
            src={"/assets/icons/magnifyer.svg"}
            width={15}
            height={15}
            alt="Search Icon"
          />
        </button>
      </div>
    </>
  );
};

export default SearchBox;

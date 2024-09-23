const ToggleUnitButton = ({ toggleUnit, unit }) => {
  return (
    <button
      onClick={toggleUnit}
      className="h-[40px] w-[40px] bg-customWhite shadow-lg rounded-full flex justify-center items-center hover:bg-customGrey hover:shadow-gray-300 transition duration-150"
    >
      <h1 className="font-bold text-black text-lg">
        {unit === "metric" ? `°F` : `°C`}
      </h1>
    </button>
  );
};

export default ToggleUnitButton;

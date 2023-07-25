import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import TuneIcon from "@mui/icons-material/Tune";
const Search: React.FC = () => {
  return (
    <div className="max-w-[1000px] absolute z-10 top-[-1%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-full h-20 lg:flex flex-col md:flex-row justify-center border-r border-solid border-white shadow-[0px_25px_50px_0px_rgba(0, 0, 0, 0.05)] items-center m-auto bg-white shadow-lg rounded-[30px] gap-x-5 hidden">
      <div className="flex flex-row gap-x-3  justify-start items-start w-1/2 ">
        <p className="text-gray-700 font-Inter text-xs font-semibold leading-normal">
          <PowerInputIcon />
        </p>
        <input
          type="text"
          placeholder="Enter Keywords"
          className="text-gray-400 font-Inter text-base font-normal leading-normal w-[200px] border-none outline-none justify-center items-center"
        />
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className=" items-start border-l border-r border-solid border-black border-opacity-25 flex flex-row justify-between gap-x-10 px-5">
          <p className="text-gray-700 font-Inter text-base font-semibold leading-normal">
            Appartments
          </p>
          <ArrowDropDownIcon />
        </div>
        <div>
          <div className=" flex flex-row justify-center items-center font-white font-normal text-base gap-x-10 ">
            <TuneIcon />
            <p>Advanced</p>
            <button className="flex justify-center items-center bg-carrot rounded-full w-10 h-10 p-2">
              <SearchIcon sx={{ color: "#fff", fontSize: "25px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;

import { MdSearch } from "react-icons/md";

function SearchBar() {
  return (
    <div className="w-[60%] relative mb-16">
      <div className="absolute top-[50%] -translate-y-[50%] left-3 text-slate-400">
        <MdSearch size={20} />
      </div>
      <input
        type="text"
        placeholder="Search here..."
        className="border border-slate-400 border-r-0 rounded-l-lg p-3 pl-10 w-[80%] focus:outline-none"
      />
      <button className="w-[20%] p-3 rounded-r-lg bg-primaryCol border border-primaryCol text-white">
        Submit
      </button>
    </div>
  );
}

export default SearchBar;

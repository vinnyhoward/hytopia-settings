import React from "react";
import Image from "next/image";
import SearchIcon from "@/assets/svg/search.svg";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400 w-[315px] h-[50px]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 pb-2">
        <Image src={SearchIcon} alt="Search Icon" />
      </span>
      <input
        type="text"
        name="search"
        className="py-2 pl-10 block w-full bg-black rounded-md border border-gray-800 text-white focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;

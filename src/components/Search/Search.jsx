import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ searchProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      searchProducts(searchTerm);
    } else {
      searchProducts("");
    }
  }, [searchTerm, searchProducts]);

  return (
    <div className="relative w-full max-w-md mx-auto my-10">
      <div className="flex items-center bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <span className="pl-4 text-gray-500">
          <FiSearch className="w-6 h-6" />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search products..."
        />
      </div>
    </div>
  );
};

export default Search;

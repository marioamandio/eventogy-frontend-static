import React from "react";
import { Search, Archive, Filter, Close } from "../icons";

const EventsPageHeader = () => {
  return (
    <div className="mx-1 xs:mx-8 py-6 flex flex-col md:flex-row justify-center md:justify-between items-center border-b border-gray-300 space-y-4 md:space-y-0 md:space-x-2">
      <h1 className="text-3xl font-bold text-gray-900">Welcome back Luke</h1>

      <div className="flex items-center space-x-2 text-sm">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-2 text-sm">
          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              className="bg-white border border-gray-300 rounded-sm pl-10 pr-10 py-2 text-sm w-full lg:w-auto focus:outline-none focus:border-gray-400"
              placeholder="Search"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 focus:outline-none">
              <Close />
            </button>
          </div>

          <div className="flex flex-wrap items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded border border-gray-300 hover:bg-gray-200">
              <Archive className="h-5 w-5" />
              <span>Archive</span>
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded border border-gray-300 hover:bg-gray-200">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700">
              + Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPageHeader;

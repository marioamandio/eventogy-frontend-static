import Image from 'next/image'
import React from "react";
import { QuestionMarkIcon, BellIcon, EllipsisVerticalIcon } from "../icons";
import Logo from '../logo'

const TopNavBar = () => {
  return (
    <nav className="bg-white shadow-sm px-2 xs:px-8">
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center">
            <Logo />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <QuestionMarkIcon />
          </button>

          <button className="text-gray-600 hover:text-gray-800">
            <BellIcon />
          </button>

          <button className="text-gray-600 hover:text-gray-800">
            <EllipsisVerticalIcon />
          </button>

          <Image
            width={200}
            height={165}
            src="/profilepic.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full border border-gray-300"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;

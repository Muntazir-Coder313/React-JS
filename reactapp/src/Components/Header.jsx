import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md">

      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-4 border-b">

        {/* Search Box */}
        <div className="relative w-full md:w-[350px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Search
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
            Login
          </button>

          <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-blue-700 leading-tight">
            NEXTPLANNER
          </h1>

          <hr className="my-1 border-blue-600" />

          <p className="text-[10px] md:text-xs font-medium text-gray-600 tracking-wide">
            INSTITUTE OF TECHNOLOGY
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer transition">
            About Us
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Admission
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Academics
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Resources
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Life At NPIT
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact Us
          </li>

          <li className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 cursor-pointer transition">
            Apply Now
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-6">

          <ul className="flex flex-col gap-4 font-medium text-gray-700">

            <li className="hover:text-blue-600 cursor-pointer transition">
              About Us
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition">
              Admission
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition">
              Academics
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition">
              Resources
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition">
              Life At NPIT
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition">
              Contact Us
            </li>

            <li className="bg-blue-600 text-white text-center px-5 py-2 rounded-full hover:bg-blue-700 cursor-pointer transition">
              Apply Now
            </li>

          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
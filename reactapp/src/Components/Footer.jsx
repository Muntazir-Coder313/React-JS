import React from "react";
import { Heart, ShoppingCart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-14 bg-gradient-to-r from-[#eef2ff] via-[#fdf4ff] to-[#f0f9ff] text-gray-800 border-t border-white/40 shadow-inner">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            NEXTPLANNER
          </h2>

          <p className="text-sm text-purple-600 mt-1 font-medium">
            INSTITUTE OF TECHNOLOGY
          </p>

          <p className="text-sm text-gray-600 mt-5 leading-relaxed">
            Empowering future developers with modern web,
            mobile and AI technologies through practical learning.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">

            <div className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
              <Heart className="text-pink-500" size={18} />
            </div>

            <div className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
              <ShoppingCart className="text-blue-500" size={18} />
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-gray-800">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">

            <li>
              <Link className="hover:text-pink-500 transition" to="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="hover:text-pink-500 transition" to="/product">
                Products
              </Link>
            </li>

            <li>
              <Link className="hover:text-pink-500 transition" to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link className="hover:text-pink-500 transition" to="#">
                Academics
              </Link>
            </li>

            <li>
              <Link className="hover:text-pink-500 transition" to="#">
                Life At NPIT
              </Link>
            </li>

          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-gray-800">
            Courses
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-blue-500 transition cursor-pointer">
              Web Development
            </li>

            <li className="hover:text-blue-500 transition cursor-pointer">
              React / Next.js
            </li>

            <li className="hover:text-blue-500 transition cursor-pointer">
              UI/UX Design
            </li>

            <li className="hover:text-blue-500 transition cursor-pointer">
              Python Programming
            </li>

            <li className="hover:text-blue-500 transition cursor-pointer">
              AI & Machine Learning
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-xl font-bold mb-5 text-gray-800">
            Contact
          </h3>

          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
            <Mail size={18} className="text-pink-500" />
            <span className="hover:text-pink-500 transition">
              muntazirma21@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
            <Phone size={18} className="text-blue-500" />
            <span className="hover:text-blue-500 transition">
              +92 3045963153
            </span>
          </div>

          {/* NEWSLETTER */}
          <p className="text-sm font-semibold mb-3 text-gray-700">
            Subscribe Newsletter
          </p>

          <div className="flex shadow-md rounded-xl overflow-hidden bg-white">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 outline-none text-gray-700"
            />

            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 hover:opacity-90 transition">
              Join
            </button>

          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/40 py-5 text-center text-sm text-gray-600 bg-white/30 backdrop-blur-sm">
        © 2026 NEXTPLANNER Institute of Technology.
        All rights reserved by{" "}
        <span className="font-semibold text-purple-600">
          Muntazir Mehdi
        </span>.
      </div>

    </footer>
  );
}

export default Footer;
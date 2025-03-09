import React, { useState } from "react";
import { Navbar, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const pathname = location?.pathname || ""; // Ensure pathname is always a string
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (path) => (pathname === path ? "text-purple-600 font-bold" : "text-gray-700 hover:text-purple-500");

  return (
    <Navbar className="bg-white border-b-2 whitespace-nowrap text-sm sm:text-xl font-semibold dark:bg-white dark:text-gray-900">
      {/* Logo / Blog Name */}
      <Link to="/" className="text-lg sm:text-xl font-bold dark:text-gray-900 flex items-center space-x-2">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Shashank's
        </span>
        <span className="text-black font-bold">Blog</span>
      </Link>

      {/* Search Bar */}
      <form className="flex items-center mx-8">
        <div className="relative hidden lg:inline">
          <input
            type="text"
            placeholder="Search..."
            className="w-48 pl-4 pr-10 py-2 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-100 dark:border-gray-400 dark:text-gray-900 dark:focus:ring-indigo-500"
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-600 pointer-events-none" />
        </div>
        <Button className="w-12 h-10 lg:hidden flex items-center justify-center" color="gray" aria-label="Search">
          <AiOutlineSearch className="w-5 h-5" />
        </Button>
      </form>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 mx-8">
        <Link to="/" className={`text-base ${isActive("/")}`}>Home</Link>
        <Link to="/about" className={`text-base ${isActive("/about")}`}>About</Link>
        <Link to="/projects" className={`text-base ${isActive("/projects")}`}>Projects</Link>
      </div>

      {/* Moon Icon and Sign In Button */}
      <div className="flex items-center gap-4">
        <Button className="w-12 h-10 flex items-center justify-center" color="gray" aria-label="Toggle Dark Mode">
          <FaMoon className="w-5 h-5" />
        </Button>
        <Link to="/sign-in">
  <Button
    className="relative px-6 py-2 text-purple-600 font-semibold border-2 border-purple-500 transition-all duration-300 ease-in-out 
    hover:bg-purple-500 hover:text-white hover:shadow-lg"
  >
    Sign In
  </Button>
</Link>


      

        {/* Mobile Menu Toggle Button */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden fixed top-16 left-0 bg-white border-b border-gray-200 w-full shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
        <Link to="/" className={`block px-4 py-2 ${isActive("/")}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className={`block px-4 py-2 ${isActive("/about")}`} onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/projects" className={`block px-4 py-2 ${isActive("/projects")}`} onClick={() => setIsMenuOpen(false)}>Projects</Link>
      </div>
    </Navbar>
  );
}

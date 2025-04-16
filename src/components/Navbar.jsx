import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 max-w-6xl mx-auto text-white">
      {/* Logo */}
      <h1 className="text-3xl font-bold tracking-wide">
        Ehiji<span className="text-purple-400">E</span>.
      </h1>

      {/* Menu Items */}
      <ul className="flex gap-8 text-lg">
        {["home", "about", "portfolio", "contact"].map((item) => (
          <li key={item} className="relative group">
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {/* Underline effect on hover */}
            <span className="absolute left-0 bottom-[-5px] w-0 h-[3px] bg-purple-400 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

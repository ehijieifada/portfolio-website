import React from "react";
import profileImage from "../assets/profile.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="px-6 md:px-16 py-12 min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center"
    >
      <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-gray-700 shadow-lg">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
        I am <span className="text-purple-500">Ehijie Ifada</span>, a passionate frontend developer based in{" "}
        <span className="text-orange-500">Ghana</span>.
      </h2>

      <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
        I specialize in building responsive and user-friendly websites using modern web technologies. As an entry-level developer, I focus on clean code, creativity, and collaboration in impactful projects.
      </p>

      <div className="mt-6">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-blue-600 hover:to-blue-600 px-6 py-3 rounded-full text-white font-medium transition-colors duration-300">
            Connect with me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

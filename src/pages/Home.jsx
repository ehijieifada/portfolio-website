import React from "react";
import profileImage from "../assets/profile.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center"
    >
      <div className="w-42 h-42 overflow-hidden rounded-full border-4 border-gray-700">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-59 object-cover"
        />
      </div>
      <h2 className="mt-6 text-4xl font-bold text-white">
        I am <span className="text-purple-500">Ehijie Ifada</span>, a passionate frontend developer based in{" "}
        <span className="text-orange-500">Ghana</span>.
      </h2>
      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        I am a passionate frontend developer from Nigeria. I specialize in
        building responsive and user-friendly websites using modern web
        technologies. As an entry-level developer, I'm focused on growing my
        skills and bringing creative ideas to life through clean, accessible
        code. I'm excited to collaborate, learn, and contribute to impactful
        projects in the tech space.
      </p>
      <div className="mt-6 flex gap-4 justify-center">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:bg-blue-600 hover:from-blue-600 hover:to-blue-600 px-6 py-3 rounded-full text-white font-medium transition-colors duration-300 cursor-pointer">
            Connect with me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

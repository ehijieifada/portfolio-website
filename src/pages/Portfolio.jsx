import React from "react";
import ecommerceImg from "../assets/ecommerce-react.png";
import cryptoImg from "../assets/cryptofuture.png";
import chatbotImg from "../assets/chatbot.png";

const projects = [
  {
    title: "BlissTechIQ (E-commerce Site)",
    image: ecommerceImg,
    url: "https://blisstechiq.netlify.app/",
  },
  {
    title: "CryptoFuture (Crypto Dashboard)",
    image: cryptoImg,
    url: "https://cryptofuture.netlify.app",
  },
  {
    title: "ChatBot (AI Assistant)",
    image: chatbotImg,
    url: "https://chatbot25.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="px-6 py-20 bg-black text-white text-center">
      <div className="max-w-6xl mx-auto mb-40">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">My Portfolio</h2>
        <p className="mb-8 text-purple-400">
          Here are a few projects I've worked on recently. Click on any to explore the live site!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition hover:scale-105"
              onClick={() => window.open(project.url, "_blank")}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-gray-900 text-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

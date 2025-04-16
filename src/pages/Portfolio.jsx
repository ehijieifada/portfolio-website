import React from 'react';
import ecommerceImg from '../assets/ecommerce-react.png';
import cryptoImg from '../assets/cryptofuture.png';
import chatbotImg from '../assets/chatbot.png';

const projects = [
  {
    title: 'BlissTechIQ (E-commerce Site)',
    image: ecommerceImg,
    url: 'https://blisstechiq.netlify.app',
  },
  {
    title: 'CryptoFuture (Crypto Dashboard)',
    image: cryptoImg,
    url: 'https://cryptofuture.netlify.app',
  },
  {
    title: 'ChatBot (AI Assistant)',
    image: chatbotImg,
    url: 'https://chatbot25.netlify.app',
  },
];

const Portfolio = () => {
  return (
    <div className="justify-items-center" style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>My Portfolio</h2>
      <p className="mb-4 text-blue-400">
        Here are a few projects I've worked on recently. Click on any to explore the live site!
      </p>
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }}
            onClick={() => window.open(project.url, '_blank')}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
            <div style={{ padding: '1rem', backgroundColor: '#f9f9f9' }}>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

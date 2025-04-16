import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black text-white px-10 md:px-16 py-12"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4 mt-5">
          About Me
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          Hi, I'm <span className="font-semibold text-white">Ehijie Ifada</span> — a frontend developer currently based in <span className="text-purple-400">Ghana</span>, originally from <span className="text-purple-400">Nigeria</span>.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          I'm passionate about creating responsive, accessible, and user-friendly web experiences using modern technologies like <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Tailwind CSS</span>, and <span className="text-white font-medium">JavaScript</span>. My journey in web development is just beginning, but I'm committed to continuous learning and building meaningful digital products.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          As an entry-level developer, I'm focused on writing clean, efficient code while exploring best practices and UI/UX principles. I enjoy turning ideas into real-world applications and collaborating with others to bring projects to life.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          Whether I'm working on a personal project or contributing to a team, I approach every challenge with curiosity and a growth mindset. <span className="text-purple-400 font-semibold">Let’s build something amazing together!</span>
        </p>

        {/* Skills Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-white mb-4">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"].map((skill) => (
              <span
                key={skill}
                className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 md:px-16 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-gray-900 rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center">
          Contact Me
        </h2>

        <p className="text-gray-300 text-center mb-8">
          Have a question or want to work together? Fill out the form below and I'll get back to you soon!
        </p>

        <form
          action="https://formspree.io/f/xpwpeawz"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-full font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Optional socials */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Or reach out via:</p>
          <div className="flex justify-center gap-6 mt-2 text-gray-400">
            <a href="https://github.com/ehijieifada" target="_blank" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/ehijieifada" target="_blank" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <section className="flex flex-col items-center bg-linear-to-b from-black to-[#1A0033] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">

        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold tracking-wide">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-md"></div>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Analytics Group
          </span>
        </div>
        {/* Menu */}
        <div
          className={`${mobileOpen ? "max-md:w-full" : "max-md:w-0"
            } max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-lg`}
        >
          <a href="/" onClick={() => setMobileOpen(false)} className="hover:text-gray-300">
            Home
          </a>
          <a href="/service" onClick={() => setMobileOpen(false)} className="hover:text-gray-300">
            Service
          </a>
          <a href="/about" onClick={() => setMobileOpen(false)} className="hover:text-gray-300">
            About
          </a>
          <a href="/careers" onClick={() => setMobileOpen(false)} className="hover:text-gray-300">
            Careers
          </a>

          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square"
          >
            ✕
          </button>
        </div>

        {/* Desktop Button */}
        <Link to="/contact">
          <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm transition cursor-pointer">
            Contact us
          </button>
        </Link>

        {/* Mobile Menu */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square"
        >
          ☰
        </button>
      </nav>

      {/* Hero Heading */}
      <h2 className="text-4xl md:text-7xl text-center max-w-4xl mt-32 text-slate-50 leading-tight px-4">
        Your ideas, turned into AI agents in minutes
      </h2>

      {/* Description */}
      <p className="text-slate-50 text-sm md:text-base text-center max-w-[650px] mt-3 px-4">
        AI agents built to run critical financial workflows
        Deliver faster results with built-in controls and clear audit trails
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <Link to="/contact">
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-slate-50 text-xs md:text-base px-6 py-3 rounded-lg transition cursor-pointer">
            Contact us
          </button>
        </Link>


      </div>

      {/* Hero Image */}
      <img
        className="max-h-64 md:max-h-80 object-cover object-top mt-12 w-full max-w-4xl px-4"
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200"
        alt="Hero"
      />
    </section>
  );
};

export default Hero;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-6 md:px-16 lg:px-24">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">

        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">

          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-semibold tracking-wide justify-center md:justify-start">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-md"></div>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Analytics Group
            </span>
          </div>


          {/* Links Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

            {/* Product */}
            <div>
              <p className="text-slate-100 font-semibold mb-3">Product</p>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
                <li><Link to="/service" className="hover:text-indigo-500">Service</Link></li>
                <li><Link to="/about" className="hover:text-indigo-500">About</Link></li>
                <li><Link to="/careers" className="hover:text-indigo-500">Careers</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="text-slate-100 font-semibold mb-3">Resources</p>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-indigo-500">Contact us</a></li>
                <li><a href="#" className="hover:text-indigo-500">Blogs</a></li>
                <li><a href="#" className="hover:text-indigo-500">Community</a></li>
                <li>
                  <Link to="/careers" className="hover:text-indigo-500">
                    Careers
                    <span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">
                      We’re hiring!
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-slate-100 font-semibold mb-3">Legal</p>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-indigo-500">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-500">Terms</Link></li>
              </ul>
            </div>

          </div>
        </div>



        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">

          <p className="max-w-xs">
            Making every customer feel valued—no matter the size of your audience.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">

            {/* Dribbble */}
            <a href="#" className="hover:text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="size-5">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="size-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2
                2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="hover:text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="size-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6
                2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5
                c2.2 2.6 5.6 4.1 9 4-.9-4.2
                4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>

          </div>

          <p className="mt-4 text-sm">
            © 2025 Analytics Group. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
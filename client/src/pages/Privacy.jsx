import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="relative flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 w-full bg-gradient-to-r from-black via-slate-900 to-black border-b border-white/10">

        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold tracking-wide">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-md"></div>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Analytics Group
          </span>
        </div>

        {/* Menu */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/service" className="hover:text-blue-400 transition">Service</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/careers" className="hover:text-blue-400 transition">Careers</Link>
        </div>

        {/* Contact */}
        <Link to="/contact">
          <button className="cursor-pointer hidden md:block bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-full text-sm transition">
            Contact us
          </button>
        </Link>

      </nav>



      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-black via-black to-indigo-950 pt-28 pb-24 px-6 md:px-16 lg:px-24">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Privacy Notice
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We respect your privacy and are committed to protecting your
            personal information. This notice explains how we collect,
            use and safeguard your data when you interact with us.
          </p>

        </div>

      </section>



      {/* PRIVACY CONTENT */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white text-gray-800">

        <div className="max-w-4xl mx-auto space-y-12">

          {/* INTRODUCTION */}
          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Introduction
            </h2>

            <p className="text-gray-600 mb-4">
              Analytics Group is a leading provider of research, analytics,
              and technology solutions to the financial services sector.
              Our clients include asset managers, investment banks,
              private equity firms, consulting organizations, and
              global enterprises operating in highly regulated industries.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">

              <li>
                We provide bespoke analytics, technology, and digital
                transformation solutions to global financial institutions.
              </li>

              <li>
                Our services support industries including banking,
                insurance, pharmaceuticals, and healthcare.
              </li>

              <li>
                This Privacy Notice explains how we collect,
                process, and protect personal data when you use
                our website or services.
              </li>

              <li>
                By using our website, you acknowledge and agree
                to the practices described in this Privacy Notice.
              </li>

              <li>
                We may update this notice periodically to reflect
                changes in legal requirements or our services.
              </li>

            </ul>

          </div>



          {/* HOW WE USE DATA */}
          <div>

            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>

            <p className="text-gray-600 mb-4">
              The information we collect allows us to deliver reliable
              services, improve our platforms, and ensure a secure
              and efficient user experience.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">

              <li>
                To improve website functionality and enhance
                overall user experience.
              </li>

              <li>
                To respond to inquiries, requests, or support
                queries submitted through our contact channels.
              </li>

              <li>
                To communicate updates about our services,
                products, and industry insights.
              </li>

              <li>
                To analyze usage patterns and identify areas
                for service improvement.
              </li>

              <li>
                To maintain system integrity and detect
                potential security risks.
              </li>

              <li>
                To conduct internal research and business
                analytics using aggregated or anonymized data.
              </li>

            </ul>

          </div>



          {/* DATA SECURITY */}
          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Data Security
            </h2>

            <p className="text-gray-600 mb-4">
              Protecting your personal data is a core priority.
              We implement strong technical and organizational
              safeguards to ensure that information remains secure.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">

              <li>
                Secure infrastructure and encrypted communication
                protocols are used to protect sensitive data.
              </li>

              <li>
                Access to personal information is restricted
                to authorized personnel only.
              </li>

              <li>
                Regular security reviews and vulnerability
                assessments are conducted.
              </li>

              <li>
                Systems are continuously monitored for
                suspicious or unauthorized activity.
              </li>

              <li>
                In the event of a security incident, appropriate
                steps are taken to investigate and mitigate risks.
              </li>

              <li>
                Where legally required, affected individuals
                and authorities will be notified promptly.
              </li>

            </ul>

          </div>

        </div>

      </section>



      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Privacy;
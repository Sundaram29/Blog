import React from "react";
import { Link } from "react-router-dom";
import { Handshake, BarChart3, Gift, Users } from "lucide-react";
import Footer from "../components/Footer";
import { useState } from "react";


const Carrers = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div>

      <nav className="relative flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 w-full bg-gradient-to-r from-black via-slate-900 to-black text-white border-b border-white/10">
            
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-xl font-semibold tracking-wide">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-md"></div>
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Analytics Group
                      </span>
                    </div>
            
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10 text-lg font-medium">
                      <Link to="/" className="hover:text-gray-300">Home</Link>
                      <Link to="/service" className="hover:text-gray-300">Service</Link>
                      <Link to="/about" className="hover:text-gray-300">About</Link>
                      <Link to="/careers" className="hover:text-gray-300">Careers</Link>
                    </div>
            
                    {/* Contact Button */}
                    <Link to="/contact">
                      <button className="cursor-pointer hidden md:block bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-full text-sm">
                        Contact us
                      </button>
                    </Link>
            
                    {/* Mobile Menu Button */}
                    <button
                      onClick={() => setMobileOpen(true)}
                      className="md:hidden bg-gray-900 hover:bg-gray-800 p-2 rounded-md"
                    >
                      ☰
                    </button>
            
                    {/* Mobile Menu */}
                    {mobileOpen && (
                      <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex flex-col items-center justify-center gap-10 text-xl text-white">
            
                        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
                        <Link to="/service" onClick={() => setMobileOpen(false)}>Service</Link>
                        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
                        <Link to="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
            
                        <button
                          onClick={() => setMobileOpen(false)}
                          className="absolute top-6 right-6 text-3xl"
                        >
                          ✕
                        </button>
            
                      </div>
                    )}
            
                  </nav>
      


      {/* HERO */}
      <section className="relative">
        <img
          src="carrer.webp"
          alt="Career"
          className="w-full h-[520px] object-cover"
        />

        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-[#d9eceb] p-12 max-w-xl shadow-lg">

          <p className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            {" / "}
            <Link to="/careers" className="font-medium hover:text-gray-900">
              Careers
            </Link>
          </p>

          <h1 className="text-5xl font-semibold mb-6">
            People are at the Heart of our Business
          </h1>

          <p className="text-gray-700 leading-relaxed">
            We are a trusted strategic partner to the world’s leading financial
            services firms and corporates, delivering enhanced performance and
            productivity for over twenty-three years.
          </p>

        </div>
      </section>



      {/* CULTURE / GROWTH / REWARDS / COMMUNITY */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-100">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white border-t-4 border-sky-600 p-8 hover:shadow-xl transition">
            <Handshake className="text-sky-600 mb-6" size={28} />
            <h3 className="text-2xl text-indigo-700 font-semibold">Culture</h3>
            <p className="font-semibold mb-3">that amplifies who you are</p>
            <p className="text-gray-600 text-sm">
              We build a culture where people feel seen, supported and inspired.
            </p>
          </div>

          <div className="bg-white border-t-4 border-sky-600 p-8 hover:shadow-xl transition">
            <BarChart3 className="text-sky-600 mb-6" size={28} />
            <h3 className="text-2xl text-indigo-700 font-semibold">Growth</h3>
            <p className="font-semibold mb-3">that moves with you</p>
            <p className="text-gray-600 text-sm">
              Transformation creates opportunity. We promote from within and
              plan for potential.
            </p>
          </div>

          <div className="bg-white border-t-4 border-sky-600 p-8 hover:shadow-xl transition">
            <Gift className="text-sky-600 mb-6" size={28} />
            <h3 className="text-2xl text-indigo-700 font-semibold">Rewards</h3>
            <p className="font-semibold mb-3">that recognise your value</p>
            <p className="text-gray-600 text-sm">
              Competitive pay, incentives and long-term opportunities for those
              who lead impact.
            </p>
          </div>

          <div className="bg-white border-t-4 border-sky-600 p-8 hover:shadow-xl transition">
            <Users className="text-sky-600 mb-6" size={28} />
            <h3 className="text-2xl text-indigo-700 font-semibold">Community</h3>
            <p className="font-semibold mb-3">that powers real change</p>
            <p className="text-gray-600 text-sm">
              We back causes that matter and build purpose into how we work.
            </p>
          </div>

        </div>
      </section>



      {/* CAREER DEVELOPMENT */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">

        <h2 className="text-4xl font-semibold mb-12">
          Career development and training
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gray-100">
            <img src="Learning.webp" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl text-indigo-600 font-semibold">Learning</h3>
              <p className="font-semibold mb-3">that grows with you</p>
              <p className="text-sm text-gray-600">
                Digital platforms and certifications support continuous growth
                across technical, domain and leadership skills.
              </p>
            </div>
          </div>

          <div className="bg-gray-100">
            <img src="Leadership.webp" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl text-indigo-600 font-semibold">Leadership</h3>
              <p className="font-semibold mb-3">starts with opportunity</p>
              <p className="text-sm text-gray-600">
                From mentorship to acceleration programs, we help future leaders
                step up and stand out.
              </p>
            </div>
          </div>

          <div className="bg-gray-100">
            <img src="Education.webp" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl text-indigo-600 font-semibold">Education</h3>
              <p className="font-semibold mb-3">that opens every door</p>
              <p className="text-sm text-gray-600">
                We support higher qualifications and career goals through
                flexible learning and professional education assistance.
              </p>
            </div>
          </div>

          <div className="bg-gray-100">
            <img src="Respect.webp" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl text-indigo-600 font-semibold">Respect</h3>
              <p className="font-semibold mb-3">is built into culture</p>
              <p className="text-sm text-gray-600">
                We foster a workplace where everyone is valued, supported and
                empowered to be themselves.
              </p>
            </div>
          </div>

        </div>

      </section>

      <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-indigo-950 via-indigo-900 to-black text-white overflow-hidden mb-30">

        {/* subtle background glow */}
        <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-indigo-700 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-4xl">

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Ready to accelerate your career?
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            If you're open to learning, leading, and growing in a place that values
            trust, ambition, and innovation, your journey begins here.
          </p>

          <Link to="/careers">
            <button className="bg-orange-400 hover:bg-orange-500 text-black font-medium px-6 py-3 rounded-md transition flex items-center gap-2">
              Explore opportunities
              <span className="text-xl">›</span>
            </button>
          </Link>

        </div>

      </section>
      <Footer />
    </div>

  );
};

export default Carrers;

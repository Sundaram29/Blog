import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useState } from "react";
import axios from "axios";

const About = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  const name = `${firstName} ${lastName}`;

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${backendUrl}/api/contact`, {
        name,
        email,
        phoneNumber,
        message,
        businessType,
      });

      console.log(res.data);
      alert("Message sent successfully!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setBusinessType("");
      setMessage("");

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };


  return (
    <div className="about-page bg-white">


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
          <button className=" cursor-pointer hidden md:block bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-full text-sm">
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


      {/* HERO SECTION */}
      <section className="about-hero relative">

        <img
          src="insight.jpg"
          alt="Insight Innovation Impact"
          className="w-full h-[520px] object-cover"
        />

        <div className="about-hero-card absolute left-16 top-1/2 -translate-y-1/2 bg-[#d9eceb] p-12 max-w-xl shadow-lg">

          <p className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            {" / "}
            <Link to="/about" className="font-medium hover:text-gray-900 transition">
              About us
            </Link>
          </p>

          <h1 className="text-5xl font-semibold leading-tight mb-6">
            Insight. <br />
            Innovation. <br />
            Impact.
          </h1>

          <p className="text-gray-700 leading-relaxed">
            We are a trusted strategic partner to the world’s leading
            financial services firms and corporates, delivering enhanced
            performance and productivity for over twenty-three years.
          </p>

        </div>

      </section>


      {/* APPROACH SECTION */}
      <section className="about-approach grid md:grid-cols-2">

        {/* Left Image */}
        <div className="about-approach-image">
          <img
            src="innovation.jpg"
            alt="Our Approach"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="about-approach-content bg-gray-100 flex items-center px-12 py-16">

          <div className="max-w-xl">

            <h2 className="text-4xl font-semibold mb-6">
              Our approach
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We combine deep domain expertise with advanced technologies
              to deliver tailored solutions. That could mean a dedicated
              team accelerated by specialist AI agents, a custom platform
              built on proprietary data or a fully integrated digital
              transformation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We are workflow experts, domain specialists and pioneers
              in AI-driven transformation. Our scale, security and global
              reach give partners confidence and efficiency. We deliver
              performance today and help shape smarter decisions for tomorrow.
            </p>

          </div>

        </div>

      </section>
      <Card />


      <section className="business-section py-20 px-6 md:px-16 lg:px-24 bg-gray-100">

        {/* Title */}
        <h2 className="text-4xl font-semibold mb-10">
          Our business
        </h2>


        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">

          <div className="bg-teal-900 text-white p-8">
            <h3 className="text-4xl font-semibold">850+</h3>
            <p className="text-sm mt-2">clients</p>
          </div>

          <div className="bg-teal-900 text-white p-8">
            <h3 className="text-4xl font-semibold">7200+</h3>
            <p className="text-sm mt-2">people</p>
          </div>

          <div className="bg-teal-900 text-white p-8">
            <h3 className="text-4xl font-semibold">28</h3>
            <p className="text-sm mt-2">global locations</p>
          </div>

          <div className="bg-teal-900 text-white p-8">
            <h3 className="text-4xl font-semibold">23+</h3>
            <p className="text-sm mt-2">years of expertise</p>
          </div>

        </div>



        {/* Business Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="relative overflow-hidden">

            <img
              src="meet.jpg"
              alt="Insights and Analytics"
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute bottom-0 left-0 bg-[#cfe3e3] p-6 max-w-md">

              <h3 className="text-2xl font-semibold mb-2">
                Insights and Analytics
              </h3>

              <p className="text-sm text-gray-700">
                Smarter decisions powered by our deep-domain expertise
              </p>

            </div>

          </div>


          {/* Card 2 */}
          <div className="relative overflow-hidden">

            <img
              src="tech.jpg"
              alt="AI Data Digital"
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute bottom-0 left-0 bg-[#cfe3e3] p-6 max-w-md">

              <h3 className="text-2xl font-semibold mb-2">
                AI, Data and Digital
              </h3>

              <p className="text-sm text-gray-700">
                Enterprise-scale solutions for cloud, data and AI-driven innovation
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="flex items-center justify-center py-16 px-4 bg-white">

        <div className="max-w-7xl w-full">

          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Get in touch with us
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              We'd love to hear from you. Fill out the form and our team will get back to you.
            </p>
          </div>


          <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 items-center">

            {/* Image Left */}
            <div className="rounded-3xl p-10 relative min-h-[662px] w-full max-w-[520px] hidden md:flex flex-col justify-between overflow-hidden">
              <img
                src="https://assets.prebuiltui.com/images/components/form/form-rightside-image.png"
                alt="3D shapes"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="relative z-10 mt-auto">
                <p className="text-sm/6 text-white mb-5 max-w-[400px]">
                  Stop spending hours recreating layouts - with{" "}
                  <strong>PrebuiltUI</strong> you can copy, customize and launch
                  stunning UIs in minutes.
                </p>

                <p className="text-sm text-white mb-4 text-right">
                  ━ Emily Rodriguez
                </p>

                <div className="flex justify-end gap-2 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                </div>
              </div>
            </div>


            {/* Form Right */}
            <form onSubmit={onSubmitHandler}>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    First name
                  </label>

                  <input onChange={(e) => setFirstName(e.target.value)} value={firstName}
                    type="text"
                    placeholder="David"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    Last name
                  </label>

                  <input onChange={(e) => setLastName(e.target.value)} value={lastName}
                    type="text"
                    placeholder="Andrew"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>


              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">
                  Email id
                </label>

                <input onChange={(e) => setEmail(e.target.value)} value={email}
                  type="email"
                  placeholder="david@company.com"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                />
              </div>


              {/* Business Type */}
              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">
                  Business type*
                </label>

                <select onChange={(e) => setBusinessType(e.target.value)} value={businessType}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none bg-white focus:border-indigo-500 transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>Please select</option>

                  <option>Asset Management</option>
                  <option>Hedge Fund/Specialty Asset Mgmt</option>
                  <option>Private Equity/Venture Capital</option>
                  <option>Investment Bank</option>
                  <option>Commercial/SME/Retail/Dev Bank</option>
                  <option>Brokerage</option>
                  <option>Consulting/Professional Services</option>
                  <option>Energy / Utility / Commodities</option>
                  <option>Corporate - Non-Financial Other</option>
                  <option>Market Research</option>
                  <option>Other</option>
                </select>
              </div>


              {/* Phone Number */}
              <div className="mb-5">

                <label className="text-sm text-gray-500">
                  Phone number
                </label>

                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="tel"
                  maxLength={10}
                  placeholder="+1 342 123-456"
                  className="w-full px-3 py-3 border rounded-lg"
                />

              </div>



              {/* Message */}
              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">
                  Message
                </label>

                <textarea onChange={(e) => setMessage(e.target.value)} value={message}
                  rows="4"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none resize-y focus:border-indigo-500 transition-colors"
                />
              </div>


              {/* Checkbox */}
              <div className="flex items-center gap-2 mb-6">
                <input
                  type="checkbox"
                  required
                  className="w-5 h-5 cursor-pointer accent-indigo-500 rounded-[5px]"
                />

                <label className="text-sm text-gray-500 cursor-pointer">
                  You agree to our <span className="underline">terms</span> and{" "}
                  <span className="underline">privacy policy</span>.
                </label>
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_10px_25px_rgba(79,70,229,0.4)] hover:scale-105"
              >
                Send message
              </button>

            </form>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
};

export default About;
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";

const Service = () => {
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
    <div className="bg-white">
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

      {/* Hero Section */}
      <section className="relative w-full h-[520px]">

        {/* Background Image */}
        <img
          src="service.webp"
          alt="Service"
          className="w-full h-full object-cover"
        />

        {/* Overlay Card */}
        <div className="absolute top-1/2 left-8 md:left-16 -translate-y-1/2 bg-[#d9eceb] p-8 md:p-12 max-w-xl shadow-lg rounded-lg">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            {" / "}
            <Link to="/service" className="font-medium hover:text-gray-900 transition">
              Our Service
            </Link>
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-4">
            Insight Meets <br /> Innovation
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-lg mb-6">
            Practical solutions driven by sharp insight and proven impact
          </p>

          {/* Button */}
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition">
              Talk to us →
            </button>
          </Link>

        </div>
      </section>


      {/* Service Intro */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Delivering Intelligent Financial Solutions
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Analytics Group is trusted by the world’s top financial services firms
            and corporates to boost performance and productivity. We blend deep
            sector experience with advanced technology to deliver solutions built
            for your unique needs, from AI-enhanced teams to fully tailored
            transformation.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            We bring clarity, confidence and insight today, while setting new
            standards for intelligent performance tomorrow.
          </p>

        </div>

      </section>
      <section className="what-defines-us py-20 px-6 md:px-16 lg:px-24 bg-gray-100">

        {/* Section Title */}
        <h2 className="text-4xl font-semibold mb-12">
          What defines us
        </h2>

        {/* Grid Row */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="relative">
            <img
              src="Define2.webp"
              alt="Talent"
              className="w-full h-[420px] object-cover rounded-xl"
            />

            <div className="absolute left-0 bottom-8 bg-[#e6d3c6] p-8 max-w-xs shadow-lg rounded-md">
              <h3 className="text-3xl font-semibold mb-3">
                Talent
              </h3>

              <p className="text-gray-800 text-sm leading-relaxed">
                Complete expertise across Private Markets, Asset Management,
                Banking and Consulting with service offerings that support
                every aspect of your business lifecycle.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <img
              src="Technology.webp"
              alt="Technology"
              className="w-full h-[420px] object-cover rounded-xl"
            />

            <div className="absolute left-0 bottom-8 bg-[#e6d3c6] p-8 max-w-xs shadow-lg rounded-md">
              <h3 className="text-3xl font-semibold mb-3">
                Technology
              </h3>

              <p className="text-gray-800 text-sm leading-relaxed">
                We combine advanced technology and domain expertise to deliver
                smarter insights, faster decision making and scalable solutions
                for modern financial institutions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative">
            <img
              src="Capability.webp"
              alt="Capability"
              className="w-full h-[420px] object-cover rounded-xl"
            />

            <div className="absolute left-0 bottom-8 bg-[#e6d3c6] p-8 max-w-xs shadow-lg rounded-md">
              <h3 className="text-3xl font-semibold mb-3">
                Capability
              </h3>

              <p className="text-gray-800 text-sm leading-relaxed">
                Our global delivery model and specialized teams ensure consistent
                quality, operational efficiency and measurable impact across
                every engagement.
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


      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Service;

import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {

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
    <>
      {/* NAVBAR */}
      <nav className="relative flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 w-full bg-gradient-to-r from-black via-slate-900 to-black text-white border-b border-white/10">

        <div className="flex items-center gap-2 text-xl font-semibold tracking-wide">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-md"></div>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Analytics Group
          </span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-lg font-medium">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/service" className="hover:text-gray-300">Service</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/careers" className="hover:text-gray-300">Careers</Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden bg-gray-900 hover:bg-gray-800 p-2 rounded-md"
        >
          ☰
        </button>

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


      {/* HERO IMAGE */}
      <section>
        <img
          src="contact.jpg"
          alt="Hero"
          className="w-full h-[600px] object-cover"
        />
      </section>


      {/* CONTACT SECTION */}
      <section className="flex items-center justify-center py-16 px-4 bg-white">

        <div className="max-w-7xl w-full">

          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in touch with us
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              We'd love to hear from you. Fill out the form and our team will get back to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 items-center">


            {/* LEFT IMAGE */}
            <div className="rounded-3xl p-10 relative min-h-[662px] hidden md:flex flex-col justify-between overflow-hidden">
              <img
                src="https://assets.prebuiltui.com/images/components/form/form-rightside-image.png"
                alt="decor"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>


            {/* FORM */}
            <form onSubmit={onSubmitHandler}>

              {/* NAME */}
              <div className="grid grid-cols-2 gap-4 mb-5">

                <div>
                  <label className="text-sm text-gray-500">First name</label>

                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="David"
                    className="w-full px-3 py-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">Last name</label>

                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Andrew"
                    className="w-full px-3 py-3 border rounded-lg"
                  />
                </div>

              </div>


              {/* EMAIL */}
              <div className="mb-5">

                <label className="text-sm text-gray-500">Email</label>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="david@company.com"
                  className="w-full px-3 py-3 border rounded-lg"
                />

              </div>


              {/* BUSINESS TYPE */}
              <div className="mb-5">

                <label className="text-sm text-gray-500">
                  Business type
                </label>

                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3 py-3 border rounded-lg"
                >

                  <option value="">Please select</option>

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


              {/* PHONE */}
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


              {/* MESSAGE */}
              <div className="mb-5">

                <label className="text-sm text-gray-500">
                  Message
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-3 py-3 border rounded-lg"
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


              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_10px_25px_rgba(79,70,229,0.4)] hover:scale-105"className="w-full py-3 bg-indigo-600 text-white rounded-lg cursor-pointer transition-all duration-300 transform hover:bg-indigo-700 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"className="w-full py-3 bg-indigo-600 text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 active:scale-95"className="w-full py-3 bg-indigo-600 text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_10px_25px_rgba(79,70,229,0.4)] hover:scale-105"
              >
                Send message
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;

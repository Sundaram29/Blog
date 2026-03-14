import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import axios from "axios";
import Card from '../components/Card'
import { useState } from 'react';


const Home = () => {


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
    <div>
        <Hero />
         <Card />
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

                <select onChange={(e)=> setBusinessType(e.target.value)} value={businessType}
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

                <textarea onChange={(e)=> setMessage(e.target.value)} value={message}
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
  )
}

export default Home
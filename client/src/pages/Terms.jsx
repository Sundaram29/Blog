import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Terms = () => {
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
                        Terms Of Use
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
                            These Terms of Use govern your access to and use of the Analytics Group website and any related services, content, features, or applications provided through the platform. By accessing or using this website, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these Terms of Use, you should not access or use our website or services.

                            The content and materials available on this website are provided for informational and business purposes only. Analytics Group reserves the right to update, modify, or discontinue any part of the website or services at any time without prior notice. Your continued use of the website following any updates constitutes your acceptance of the revised terms..
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
                            Use of the Website
                        </h2>

                        <p className="text-gray-600 mb-4">
                            The Analytics Group website and its content are provided for informational and business purposes. By accessing or using this website, you agree to use the platform responsibly and in compliance with applicable laws and regulations. Users must ensure that their activities on the website do not interfere with its operation or compromise its security.
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-gray-600">

                            <li>
                                Use the website only for lawful purposes and in accordance with these Terms of Use.
                            </li>

                            <li>
                                Not attempt to gain unauthorized access to any part of the website, server, or related systems
                            </li>

                            <li>
                                Not misuse, reproduce, copy, or distribute any website content without proper authorization.
                            </li>

                            <li>
                                Not engage in activities that may damage, disable, or disrupt the functionality of the website..
                            </li>

                            <li>
                                Provide accurate information when contacting us or submitting inquiries through the website
                            </li>

                            <li>
                               Respect all intellectual property rights associated with the website and its content.
                            </li>

                        </ul>

                    </div>



                    {/* DATA SECURITY */}
                    <div>

                        <h2 className="text-2xl font-semibold mb-4">
                            Limitation of Liability
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Analytics Group makes reasonable efforts to ensure that the information and services provided on this website are accurate, reliable, and up to date. However, the website and its content are provided on an “as is” and “as available” basis without warranties of any kind, either express or implied
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-gray-600">

                            <li>
                               The information on this website is provided for general informational purposes only.
                            </li>

                            <li>
                                Analytics Group does not guarantee that the website will always be available, uninterrupted, or free from errors.
                            </li>

                            <li>
                                We are not responsible for any loss, damage, or inconvenience resulting from the use or inability to use the website.
                            </li>

                            <li>
                                Users are responsible for ensuring that any information or services obtained from the website meet their specific requirements
                            </li>

                            <li>
                                Analytics Group will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the website or its content.
                            </li>

                            <li>
                               External links or third-party resources provided on the website are for convenience, and we do not control or endorse their content.
                            </li>

                        </ul>

                    </div>

                </div>

            </section>



            {/* FOOTER */}
            <Footer />

        </div>
    )
}

export default Terms
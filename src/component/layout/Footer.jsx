import React from "react";
import LinkedIn from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import TikTok from "../../assets/tiktok.svg";
import FooterLogo from '../../assets/footer_logo.svg';

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-16 lg:px-24 py-8 md:py-16 bg-[#FAFAFA] text-[#222]">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        {/* Left */}
        <div className="grid grid-cols-1 gap-4 md:gap-10">
          {/* Logo */}
            <div className="flex flex-col gap-4 md:gap-6">
            <img src={FooterLogo} alt="Nongslab Logo" className="w-40 md:w-44" />

            <p className="text-light max-w-md leading-relaxed">
                Your Trusted Partner for Sustainable Digital Growth
        </p>
            </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-1">
            <img src={LinkedIn} className="w-8 h-8 text-[#6A6A6A]" />
            <img src={TikTok} className="w-8 h-8 text-[#6A6A6A]" /> {/* TikTok icon substitute */}
            <img src={Instagram} className="w-8 h-8 text-[#6A6A6A]" />
          </div>
        </div>

        {/* Middle Services */}
        <div>
          <h3 className="font-semibold text-light mb-4">Main Services</h3>
          <ul className="space-y-3 text-gray-600">
            <li>UI Design to Interactive Prototype</li>
            <li>Landing Page Development</li>
          </ul>

          <h3 className="font-semibold text-light mt-8 mb-4">
            Data Entry & Management
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>Data Organization & Cleaning</li>
            <li>Data Entry Support</li>
            <li>Data Reporting & Insights</li>
          </ul>
        </div>

        {/* Right Services */}
        <div>
          <h3 className="font-semibold text-light mt-[-20px] md:mt-0 mb-4">Digitalization Consultant</h3>
          <ul className="space-y-3 text-gray-600">
            <li>IT Hardware Setup</li>
            <li>SEO Strategy & Optimization</li>
            <li>Copywriter</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t mt-8 mb-8"></div>

      {/* Bottom Navigation */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Menu */}
        <div
            className="
            grid grid-cols-2 gap-y-4 gap-x-10
            text-left justify-between items-center w-full md:w-auto
            md:flex md:flex-row md:gap-10 md:text-center
            text-gray-700 mb-8 md:mb-0
            self-start
            "
        >
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#about" className="hover:text-black">About Us</a>
            <a href="#services" className="hover:text-black">Our Services</a>
            <a href="#process" className="hover:text-black">Work Process</a>
        </div>
            {/* Divider 2 */}
            <div className="w-full border-t mt-0 mb-8 md:hidden"></div>
        {/* Copyright */}
        <p className="text-gray-700 text-center md:text-right">
            © Copyright 2025, All Rights Reserved by{" "}
            <span className="font-semibold">Nongslab</span>
        </p>
        </div>

    </footer>
  );
};

export default Footer;

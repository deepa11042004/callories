"use client";

import React from "react";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-black via-(--dark-bg) to-(--red) text-white pt-12 pb-8 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col h-full min-h-[60vh] justify-between">
        {/* --- Top Utility Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] md:text-xs 2xl:text-sm font-[Helvetica] uppercase tracking-widest opacity-80"></div>

        {/* --- Central Brand Name --- */}
        <div className="flex justify-center pt-20">
          <h2 className="text-[25vw] leading-[0.8] font-[Formula] select-none text-white w-full text-center">
            CALLORIES
          </h2>
        </div>

        {/* --- Bottom Action Bar --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-t border-white/10 pt-10">
          {/* Social & Contact Icons */}
          <div className="flex flex-wrap items-center gap-6 text-xl">
            <Link href="https://www.facebook.com/people/calsvsmash/61590877773478/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform hover:text-blue-500" title="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/cals_v_smash/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform hover:text-pink-500" title="Instagram">
              <FaInstagram />
            </Link>
            <Link href="https://wa.me/919871710063" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform hover:text-green-500" title="WhatsApp">
              <FaYoutube className="hidden" /> {/* Keep imports simple or add new icon if needed */}
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
            </Link>
            <Link href="mailto:support@callories.com" className="hover:scale-110 transition-transform hover:text-red-500" title="Email Us">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
            </Link>
          </div>

          {/* Copyright Section */}
          <div className="text-[12px] uppercase tracking-widest text-center lg:text-right">
            <p>
              © 2026 by CALLORIES. Powered and secured by{" "}
              <span className="underline cursor-pointer">PELTOWN</span>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Grainy Overlay (Optional, for that premium feel) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </footer>
  );
}

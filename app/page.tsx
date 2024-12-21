"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-zinc-900 flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full bg-gradient-to-r from-gray-950 to-slate-900 shadow-2xl z-50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight hover:text-purple-200 transition-colors duration-300">
                Sandeep Gupta
              </h1>
            </div>

            {/* Mobile menu button */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4 sm:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-white hover:text-purple-200 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-white hover:text-purple-200 px-4 py-2 rounded-lg text-base font-medium hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Enhanced styling */}
      <div className="pt-20 md:pt-24 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 text-center">
          <div className="grid gap-8 sm:gap-12 items-center">
            <div className="space-y-8">
              <div className="transform hover:scale-105 transition-transform duration-500">
                <div 
                  className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-600 shadow-2xl hover:border-slate-400 transition-all duration-500 ring-4 ring-slate-800/50 cursor-pointer"
                  onClick={() => setShowImagePreview(true)}
                >
                  <Image
                    src="/logo.jpg"
                    alt="Sandeep Gupta"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight drop-shadow-lg">
                  Sandeep Gupta
                </h1>

                <div className="space-y-4 text-slate-300">
                  <p className="font-medium text-xl sm:text-2xl text-red-500">
                    🚩 JAI SHREE RAM 🚩
                  </p>
                  <p>
                  🌏 Lîfè îs êãsy.😘Bút thë 🧑‍⚕️ Bøy is Bûsy...🤘
                  </p>
                  <p className="font-light text-lg sm:text-xl">
                    World Entry 18_#Oçtõbêr_
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium">
                    🎧 Mûsîç ...Lõvër 🎵
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="https://instagram.com/mr_sandeep.6"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-slate-100 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ring-2 ring-slate-600/50"
                >
                  <span className="flex items-center gap-2 text-base">
                    Follow me
                    <FaInstagram className="text-2xl sm:text-3xl text-pink-500" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Image Preview Modal */}
      {showImagePreview && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowImagePreview(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Image
              src="/logo.jpg"
              alt="Sandeep Gupta"
              width={800}
              height={800}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* About Section - Updated background */}
      <section className="bg-gradient-to-r from-gray-950 to-slate-900 text-slate-100 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-sm bg-slate-900/30 rounded-xl p-8 shadow-xl">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                About Me
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl">
                I am human being who is trying to make a difference in the world.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl">
                I am a passionate individual who is constantly seeking opportunities to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer - Updated styling */}
      <footer className="bg-gradient-to-r from-gray-950 to-slate-900 text-slate-300 py-8 sm:py-10 mt-auto border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm sm:text-base text-center md:text-left">
              <p className="text-gray-300 hover:text-white transition-colors duration-300">
                © {new Date().getFullYear()} Sandeep Gupta. All rights reserved.
              </p>
            </div>

            <div className="flex justify-center space-x-6 sm:space-x-8">
              {[
                {
                  Icon: FaInstagram,
                  href: "https://instagram.com/mr_sandeep.6",
                  color: "#E4405F",
                },
                {
                  Icon: FaGithub,
                  href: "https://github.com/yourusername",
                  color: "#ffffff",
                },
                {
                  Icon: FaLinkedin,
                  href: "https://linkedin.com/in/yourusername",
                  color: "#0A66C2",
                },
                {
                  Icon: FaTwitter,
                  href: "https://twitter.com/yourusername",
                  color: "#1DA1F2",
                },
              ].map(({ Icon, href, color }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="hover:scale-110 transition-transform duration-300 hover:opacity-80"
                >
                  <Icon className="text-2xl" style={{ color }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

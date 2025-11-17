"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">

        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/icon1.png"
              alt="BAI Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h2 className="text-white text-xl font-semibold">Block AI</h2>
              <p className="text-gray-400 text-sm">AI Network</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://t.me/blockaiofficals"
              target="_blank"
              className="text-cyan-400 text-3xl hover:scale-110 transition-transform"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://x.com/BLOCKAIoffical"
              target="_blank"
              className="text-white text-3xl hover:scale-110 transition-transform"
            >
              <FaXTwitter />
            </a>

            {/* Coingecko */}
            <div className="relative">
              <Image
                src="/footer/f4.webp"
                alt="Coingecko"
                width={36}
                height={36}
                className="opacity-50"
              />
              <span className="absolute -top-1 -right-2 bg-lime-400 text-xs text-black font-semibold px-1.5 py-0.5 rounded-full">
                soon
              </span>
            </div>

            {/* CMC */}
            <div className="relative">
              <Image
                src="/footer/f6.webp"
                alt="CMC"
                width={36}
                height={36}
                className="opacity-50"
              />
              <span className="absolute -top-1 -right-2 bg-lime-400 text-xs text-black font-semibold px-1.5 py-0.5 rounded-full">
                soon
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-600"></div>

        {/* Middle Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 w-full">
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features">Key Features</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#mission">Mission</a></li>
              <li><a href="#">AI Bots</a></li>
              <li><a href="#">AI Analyzer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Presale</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#technology">Technology</a></li>
              <li><a href="#">Don't have a wallet?</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">BAI Token</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#join">Join</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-600"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">
          <div className="flex flex-wrap gap-4">
            <a href="#tokenomics">Terms and Legal</a>
            <a href="#">Privacy & Cookie Policy</a>
            <a href="#">Risk Disclosure</a>
          </div>

          <p className="text-gray-400">
            Copyright © {year}{" "}
            <span className="text-white font-semibold">BAI Network</span>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          <span className="font-semibold text-white">Disclaimer:</span> Cryptocurrency may be unregulated in your jurisdiction.
          Values may fluctuate. Profits may be subject to taxes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

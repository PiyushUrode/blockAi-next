"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaEthereum, FaArrowDown } from "react-icons/fa";

export default function Presale() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date("2025-10-25T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const networks = [
    { img: "/presale/e1.svg", name: "ETH" },
    { img: "/presale/e2.svg", name: "BNB" },
    { img: "/presale/e3.svg", name: "BASE" },
    { img: "/presale/e4.svg", name: "ARB" },
    { img: "/presale/e5.svg", name: "SOL" },
  ];

  return (
    <div className="w-full bg-black rounded-2xl border border-[#2a2a2a] p-5 text-white shadow-[0_0_25px] shadow-white">
      {/* Header */}
      <div className="text-center mb-3">
        <p className="text-lg font-semibold flex justify-center items-center gap-2">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <circle cx="12.5" cy="12.5" r="12" fill="#FF3CAC" fillOpacity="0.09" />
            <circle cx="12.5" cy="12.5" r="8.13" fill="#FF3CAC" fillOpacity="0.29" />
            <circle cx="12.5" cy="12.5" r="3.99" fill="#FF3CAC" />
          </svg>
          Buy <span className="text-pink-500">$BAI</span> Before Price Increases!
        </p>

        <div className="flex justify-around px-5 gap-2 mt-2 text-[#ff3cac] font-semibold border-[#ff3cac] border-2 rounded-xl">
          <span>{timeLeft.days}D</span> : <span>{timeLeft.hours}H</span> :{" "}
          <span>{timeLeft.minutes}M</span> : <span>{timeLeft.seconds}S</span>
        </div>
      </div>

      {/* Price Info */}
      <div className="bg-[#1a1a1a] rounded-xl p-4 flex justify-between items-center mb-4">
        <div>
          <p className="text-sm">
            1 $BAI = <span className="text-[#ff3cac]">$0.00048</span>
          </p>
          <h2 className="text-2xl font-bold">$20,725</h2>
          <p className="text-xs">Total Raised USD</p>
        </div>

        <div className="text-xs text-right">
          <p>Next Price = $0.0005</p>
          <p>Listing Price = $0.025</p>
        </div>
      </div>

      {/* Payment Network */}
      <div className="mb-3">
        <div className="flex justify-between mb-2">
          <p>Choose Payment Network</p>
          <button className="text-[#ff3cac] text-sm">Buy with Card</button>
        </div>

        <div className="flex justify-between gap-1 flex-wrap">
          {networks.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1 rounded-xl bg-gray-600 hover:bg-black p-[6px] text-white hover:text-black cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={22}
                height={22}
              />
              <span className="text-xs">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Converter */}
      <div className="bg-black border border-gray-500 rounded-xl p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaEthereum /> <span>ETH</span>
          </div>
          <div className="text-right">
            <p className="font-semibold">0.000242</p>
            <p className="text-xs">
              $1.00 | Balance: <span className="text-[#ff3cac]">0</span>
            </p>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center rounded-full w-8 h-8 bg-white text-black mx-auto items-center my-2">
        <FaArrowDown />
      </div>

      {/* BAI Output */}
      <div className="bg-black border border-gray-500 rounded-xl p-3 mb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/blockailogo.png"
              alt="BAI"
              width={22}
              height={22}
            />
            <span>$BAI</span>
          </div>
          <p className="font-semibold">2083.42</p>
        </div>
      </div>

      {/* Bonus */}
      <div className="flex justify-between text-xs mb-4">
        <span>$BAI Bonus:</span>
        <span className="text-[#ff3cac]">+10% from $1K</span>
        <span className="text-[#ff3cac]">+30% from $2.5K</span>
        <span className="text-[#ff3cac]">+70% from $5K</span>
      </div>

      {/* Connect Wallet */}
      <button className="w-full py-3 rounded-xl main-bg">Connect Wallet</button>

      <p className="text-xs text-center mt-3">
        By proceeding, you agree to our{" "}
        <span className="underline text-[#ff3cac] cursor-pointer">Terms of Token Sale</span>{" "}
        and{" "}
        <span className="underline text-[#ff3cac] cursor-pointer">Privacy Policy</span>
      </p>


    </div>
  );
}

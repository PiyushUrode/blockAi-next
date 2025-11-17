"use client";
import Image from "next/image";

const S7Exchanges = () => {
  const images = [
    "/partners/ai-driven-fraud-prevention.webp",
    "/partners/biconomy.webp",
    "/partners/ai-image-generator.webp",
    "/partners/ai-powered-blockchain-protocol.webp",
    "/partners/binance.webp",
    "/partners/bitfinex.webp",
    "/partners/bitget.webp",
    "/partners/bitmart.webp",
    "/partners/bitstamp.webp",
    "/partners/bybit.webp",
    "/partners/coinex.webp",
    "/partners/decentralized-lottery.webp",
    "/partners/e-commerce.webp",
    "/partners/exchange-platform.webp",
    "/partners/gaming-platform.webp",
    "/partners/gate.webp",
  ];

  return (
    <div
      className="flex flex-col gap-8 items-center py-5 md:py-10 px-2 md:px-5 w-full"
      id="technology"
    >
      <h1 className="text-3xl md:text-5xl text-gradient font-bold text-center">
        Powered By Technology
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center
              backdrop-blur-md 
              shadow-[0_0_20px_#7e22ce50] 
              hover:shadow-[0_0_30px_#ec489950] 
              shadow-[inset_0_-6px_12px_rgba(255,255,255,0.25)]
              bg-gradient-to-b from-[#111] to-[#000] 
              rounded-3xl p-6 
              border border-gray-800 
              hover:shadow-[0_0_40px_rgba(155,0,255,0.25)] 
              transition-all duration-300"
          >
            <Image
              src={src}
              alt={`partner-${index + 1}`}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default S7Exchanges;

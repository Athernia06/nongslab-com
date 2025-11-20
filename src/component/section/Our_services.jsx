import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState("right"); // 🧭 arah animasi

  const cards = [
    {
      img: "/src/assets/ui_design.svg",
      title: "UI Design to Interactive Prototype",
      desc: "From concept sketches to interactive prototypes, we design user interfaces that connect seamlessly with your audience.",
    },
    {
      img: "/src/assets/landing_page.svg",
      title: "Landing Page Development",
      desc: "We build fast, conversion-focused landing pages that engage users and help your business grow online.",
    },
  ];

  // 👉 Handle next dan prev dengan arah animasi
  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setDirection("left"); // geser ke kiri
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setDirection("right"); // geser ke kanan
      setCurrentCard(currentCard - 1);
    }
  };

  // 🎬 Variants animasi berdasarkan arah
  const slideVariants = {
    enter: (direction) => ({
      x: direction === "left" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    }),
  };

  const transitionConfig = { duration: 0.6, ease: "easeInOut" };

  return (
    <section id="services" className="scroll-mt-24 md:scroll-mt-32 container mx-auto px-4 lg:px-8 py-4">
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text & Arrows */}
        <div className="flex flex-col justify-between items-end gap-32">
          <div className="flex flex-col gap-2">
            <h4 className="text-primary text-body font-medium font-roboto">
              Our Services
            </h4>
            <h2 className="text-neutral-950 text-h4 font-bold leading-tight font-roboto">
              From design to development, we provide end-to-end digital services
              that help your business grow smarter, faster, and stronger
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentCard === 0}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition ${
                currentCard === 0
                  ? "border-gray-200 text-gray-300"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={currentCard === cards.length - 1}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition ${
                currentCard === cards.length - 1
                  ? "border-gray-200 text-gray-300"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              →
            </button>
          </div>
        </div>

        {/* Right - Animated Card */}
        <div className="relative w-full h-full flex justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentCard}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionConfig}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col absolute w-full"
            >
              <div className="bg-gray-100 h-64 w-full overflow-hidden">
                <img
                  src={cards[currentCard].img}
                  alt={cards[currentCard].title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-neutral-950 font-roboto">
                  {cards[currentCard].title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed font-roboto">
                  {cards[currentCard].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= MOBILE & TABLET ================= */}
      <div className="flex flex-col lg:hidden gap-8 items-center">
        {/* Text atas */}
        <div className="text-left flex flex-col gap-3">
          <h4 className="text-primary font-medium font-roboto">
            Our Services
          </h4>
          <h2 className="text-neutral-950 text-lg md:text-xl font-bold leading-snug font-roboto">
            From design to development, we provide end-to-end digital services
            that help your business grow smarter, faster, and stronger
          </h2>
        </div>

        {/* Card */}
        <div className="relative w-full h-[420px] flex items-end">
          {/* 💡 tambahkan height tetap dan center agar arrow tidak ketutup */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentCard}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionConfig}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col absolute w-full"
            >
              <div className="bg-gray-100 h-64 w-full overflow-hidden">
                <img
                  src={cards[currentCard].img}
                  alt={cards[currentCard].title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-950 font-roboto">
                  {cards[currentCard].title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed font-roboto">
                  {cards[currentCard].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow bawah (sekarang akan selalu tampil dan bisa diklik) */}
        <div className="flex w-full justify-end gap-6">
          <button
            onClick={handlePrev}
            disabled={currentCard === 0}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
              currentCard === 0
                ? "border-gray-200 text-gray-300"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentCard === cards.length - 1}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
              currentCard === cards.length - 1
                ? "border-gray-200 text-gray-300"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

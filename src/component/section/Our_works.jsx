import React from "react";

// --- ICONS (ganti dengan asset kamu) ---
import IconStrategize from "../../assets/strategize.svg";
import IconExecute from "../../assets/execute.svg";
import IconOptimize from "../../assets/optimize.svg";
import IconDiscover from "../../assets/copywriter.svg";

import BulbHand from "../../assets/bulb_hand.svg";

const WorkProcess = () => {
  const steps = [
    {
      id: "1",
      icon: IconDiscover,
      title: "Discover",
      desc: "We learn your goals, users, and constraints before anything else.",
    },
    {
      id: "2",
      icon: IconStrategize,
      title: "Strategize",
      desc: "We plan the work and agree on scope so there are no surprises later.",
    },
    {
      id: "3",
      icon: IconExecute,
      title: "Execute",
      desc: "We design and build, keeping you in the loop at every step.",
    },
    {
      id: "4",
      icon: IconOptimize,
      title: "Optimize",
      desc: "After launch we measure, fix, and improve what needs it.",
    },
  ];

  return (
    <section id="process" className="scroll-mt-12 w-full px-6 md:px-12 py-12 md:py-20">

      {/* SECTION TITLE */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary font-medium mb-2">Work Process</p>

        <h2 className="text-h5 md:text-h4 font-bold leading-snug">
          We start by learning your goals, then guide every step through a flexible
          process that keeps the work clear and collaborative.
        </h2>
      </div>

      {/* STEPS */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">

        {steps.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center px-4">

            {/* ICON + NUMBER */}
            <div className="relative w-20 h-20 flex items-center justify-center border-2 border-[#EF7A2D] bg-[#FFEBDE] rounded-full">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />

              <span className="absolute bottom-0 -right-2 w-7 h-7 flex items-center justify-center text-sm border-2 border-[#EF7A2D] font-semibold text-[#EF7A2D] rounded-full bg-white">
                {item.id}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="font-semibold mt-4">{item.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </div>
        ))}

      </div>

      {/* CTA CARD */}
      <div className="mt-16 md:mt-20 bg-[#EF7A2D] text-white rounded-3xl px-8 md:px-14 py-10 relative overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* LEFT TEXT */}
          <div className="order-2 md:order-1">
            <h2 className="text-h4 md:text-h3 font-bold mb-3">Have a project in mind?</h2>
            <p className="text-white/90 max-w-md">
              Tell us what you want to build. We will come back with a plan, a scope, and a straight answer.
            </p>

            <a
            href="#contact"
            className="inline-block mt-6 border border-white px-5 py-3 rounded-lg text-white hover:bg-white hover:text-orange-500 font-medium transition-colors duration-300 min-h-[44px]"
            >
              Start a Project
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 h-[240px] ">
            <img
              src={BulbHand}
              alt="Bulb Hand"
              className="w-[240px] md:w-[340px] object-contain"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default WorkProcess;

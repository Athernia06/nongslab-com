import React from "react";
import UIDesign from "../../assets/ui_design.svg";
import LandingPage from "../../assets/landing_page.svg";
import { FiArrowRight } from "react-icons/fi";

const services = [
    {
        id: "01",
        title: "Web Development",
        desc: "High-performance websites and custom web applications. We work with React, WordPress, and Laravel, and pick the stack that fits the job instead of forcing one on every project.",
        tags: ["React", "WordPress", "Laravel"],
    },
    {
        id: "02",
        title: "UI/UX Design",
        desc: "Interfaces designed in Figma around how people actually use them, not around templates. We take you from wireframes to interactive prototypes you can test before writing code.",
        tags: ["Figma", "Wireframes", "Prototypes"],
    },
    {
        id: "03",
        title: "Digital Workflow Optimization",
        desc: "We map how your work actually runs, then automate and streamline the repetitive parts: internal tools, integrations, and process fixes that give you hours back.",
        tags: ["Automation", "Integrations", "Internal tools"],
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="scroll-mt-24 md:scroll-mt-32 bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
                    {/* Left: sticky-feel heading column */}
                    <div>
                        <h2 className="text-primary text-body font-medium font-sans mb-2">
                            Services
                        </h2>
                        <h3 className="text-neutral-950 text-h5 lg:text-h4 font-bold leading-tight font-sans">
                            What we build for clients
                        </h3>
                    </div>

                    {/* Right: stacked service rows, varied by content length (R-14: rows, not identical cards) */}
                    <div className="flex flex-col">
                        {services.map((service, i) => (
                            <div
                                key={service.id}
                                className={`py-8 border-t border-gray-200 ${i === services.length - 1 ? "border-b" : ""}`}
                            >
                                <div className="flex items-start gap-6 md:gap-10">
                                    <span className="text-primary font-bold text-h5 md:text-h4 font-sans shrink-0">
                                        {service.id}
                                    </span>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-semibold text-neutral-950 font-sans mb-2">
                                            {service.title}
                                        </h4>
                                        <p className="text-gray-600 text-base leading-relaxed font-sans max-w-xl mb-4">
                                            {service.desc}
                                        </p>
                                        <ul className="flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <li
                                                    key={tag}
                                                    className="font-mono text-caption font-medium text-gray-700 bg-[#FFF3EC] px-3 py-1.5 rounded-full"
                                                >
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 mt-8 text-primary font-medium font-sans text-lg min-h-[44px] hover:text-orange-600 transition-colors"
                        >
                            Discuss your project
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

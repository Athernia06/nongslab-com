import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const studioFacts = [
    {
        title: 'Independent Studio',
        desc: 'Built on modern tech standards, free from agency overhead.',
    },
    {
        title: 'Direct Execution',
        desc: 'You collaborate directly with the creators. No unnecessary layers, just clear communication and technical focus from concept to launch.',
    },
    {
        title: 'Design and code in-house',
        desc: 'No outsourcing, no handoff gaps between design and development.',
    },
];

const About = () => {
    return (
        <section id="about" className="scroll-mt-16 py-12 md:py-20 bg-white">
            {/* Section title */}
            <div className="container mx-auto px-4 mb-4 lg:mb-10">
                <div className="grid lg:grid-cols-2 gap-2 items-start">
                    <div>
                        <h2 className="text-primary text-body font-medium font-sans mb-2">
                            About Nongslab
                        </h2>
                    </div>
                    <div>
                        <h3 className="text-h5 lg:text-h4 font-bold text-gray-900 leading-tight font-sans">
                            Nongslab is an independent digital production studio dedicated to crafting high-performance websites and intuitive digital experiences. We bridge the gap between design and development, helping brands launch clear, scalable, and impactful products.
                        </h3>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 mb-12">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Left: studio image card */}
                    <div
                        className="relative rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col justify-between px-6 md:px-10 lg:px-[40px] py-12 md:py-20 lg:py-[80px] min-h-[500px] lg:min-h-[600px]"
                        style={{
                            backgroundImage: `url('/images/limitless_creative.png')`,
                            backgroundColor: '#0d0d0d',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40 z-0" />

                        <div className="relative z-10 flex flex-col justify-between h-full text-white">
                            <div className="mb-auto">
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sans">
                                    Design and code, under one roof
                                </h3>
                            </div>
                            <div className="flex-1 hidden md:block"></div>

                            <div>
                                <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-md mb-[24px] opacity-90">
                                    Fewer handoffs mean faster decisions and work that ships.
                                </p>
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 bg-[#f28c38] text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 font-sans font-medium text-base md:text-lg min-h-[44px]"
                                >
                                    Discuss Your Project
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: verifiable studio facts (no invented metrics) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                        {studioFacts.map((fact, i) => (
                            <div
                                key={fact.title}
                                className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full ${
                                    i === 0
                                        ? 'bg-primary text-white'
                                        : 'bg-[#4A5568] text-white'
                                } ${i === 2 ? 'sm:col-span-2' : ''}`}
                            >
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold font-sans mb-3">
                                        {fact.title}
                                    </h4>
                                </div>
                                <p className={`text-sm md:text-base leading-relaxed mt-auto ${i === 0 ? 'text-white/90' : 'text-white/90'}`}>
                                    {fact.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom CTA card */}
            <div className="container mx-auto mt-16 md:mt-20 px-4 lg:px-8">
                <div className="relative rounded-3xl bg-[#FFF3EC] flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 sm:px-10 md:px-10 md:py-4">
                    <div className="w-full text-center md:text-left max-w-2xl">
                        <h3 className="text-light md:text-h5 lg:text-h4 font-bold text-primary leading-relaxed font-sans">
                            Have a project in mind? Tell us the goal, and we will tell you how we would get there.
                        </h3>
                    </div>

                    <div className="md:w-auto md:max-w-[200px] lg:max-w-[200px] flex justify-center md:justify-end">
                        <img
                            src="/images/increase_up.png"
                            alt="Business growth illustration"
                            className="w-3/4 sm:w-2/3 md:w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

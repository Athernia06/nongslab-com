import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="scroll-mt-16 py-12 md:py-20 bg-white">
            {/* CONTAINER 1: Title Section */}
            <div className="container mx-auto px-4 mb-4 lg:mb-10 md:mb-4 ">
                <div className="grid lg:grid-cols-2 gap-2 justify-betweeen items-start">
                    {/* Left - Title */}
                    <div>
                        <h2 className="text-primary text-body font-medium font-roboto mb-2">
                            About Nongslab?
                        </h2>
                    </div>

                    {/* Right - Description */}
                    <div>
                        <h3 className="text-h5 lg:text-h4 font-bold text-gray-900 leading-tight font-roboto">
                            We're an IT agency helping businesses grow through digital branding — building trust and engagement in every click.
                        </h3>
                    </div>
                </div>
            </div>

            {/* CONTAINER 2: Staggered Cards Layout */}
            <div className="container mx-auto px-4 lg:px-8 mb-12">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Left Column - Limitless Creativity (Full Height) */}
                    <div
                        className="relative rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col justify-between px-6 md:px-10 lg:px-[40px] py-12 md:py-20 lg:py-[80px] min-h-[500px] lg:min-h-[600px]"
                        style={{
                            backgroundImage: `url('/images/limitless_creative.png')`,
                            backgroundColor: '#0d0d0d',
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 z-0" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full text-white">
                            {/* Top Heading */}
                            <div className="mb-auto"> 
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold font-roboto">
                                    Limitless Creativity
                                </h3>
                            </div>
                            {/* Spacer (auto push on large, stack on small) */}
                            <div className="flex-1 hidden md:block"></div>
                            
                            {/* Bottom Text + CTA */}
                            <div>
                                <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-md mb-[24px] opacity-90">
                                    We don’t stop at “good enough.” Every project is designed to inspire,
                                    engage, and convert.
                                </p>
                                <a 
                                href='mailto:nlabs.asia@gmail.com'
                                className="group inline-flex items-center gap-2 bg-[#f28c38] text-white px-6 md:px-5 py-3 md:py-3 rounded-full hover:bg-orange-600 transition-all duration-300 font-roboto font-medium shadow-lg text-base md:text-lg"
                                >
                                    Consult with Us
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - 3 Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 h-full">
                {/* Card 1 - 100% Dedication */}
                <div className="bg-primary rounded-3xl p-6 md:p-8 text-white flex flex-col justify-between h-full">
                    <div>
                    <div className="text-4xl md:text-5xl font-bold font-roboto mb-1">
                        100<span className="text-3xl">%</span>
                    </div>
                    <div className="text-lg md:text-xl font-medium mb-6">Dedication</div>
                    </div>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mt-auto">
                    Full commitment to every project we take
                    </p>
                </div>

                {/* Card 2 - 24/7 Collaboration */}
                <div className="bg-[#4A5568] rounded-3xl p-6 md:p-8 text-white flex flex-col justify-between h-full">
                    <div>
                    <div className="text-4xl md:text-5xl font-bold font-roboto mb-1">
                        24<span className="text-3xl">/7</span>
                    </div>
                    <div className="text-lg md:text-xl font-medium mb-6">Collaboration</div>
                    </div>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mt-auto">
                    Always available and responsive to your needs
                    </p>
                </div>

                {/* Card 3 - 3x Faster Execution */}
                <div className="bg-[#4A5568] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between sm:col-span-2 h-full">
                    <div>
                    <div className="text-4xl md:text-5xl md:text-5xl font-bold font-roboto mb-1">
                        3<span className="text-3xl">x</span>
                    </div>
                    <div className="text-lg md:text-xl font-medium mb-6">Faster Execution</div>
                    </div>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mt-auto">
                    With our streamlined process, your brand goes digital faster — without cutting corners
                    </p>
                </div>
                </div>
                </div>
            </div>

            {/* CONTAINER 3: Bottom CTA Card */}
            <div className="container mx-auto mt-16 md:mt-20 px-4 lg:px-8">
            <div
                className="relative rounded-3xl bg-[#FFF3EC] flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 sm:px-10 sm:py-4 md:px-10 md:py-4 lg:px-10 lg:py-4"
            >
                {/* Left Text (akan tampil di bawah di mobile) */}
                <div className="w-full text-center md:text-left max-w-2xl">
                <h3 className="text-light md:text-h5 lg:text-h4 font-bold text-primary leading-relaxed font-roboto">
                    We don’t just build solutions — we build your business success. Nongslab is here to help you grow, innovate, and stay ahead of the competition.
                </h3>
                </div>

                {/* Right Image (akan tampil di atas di mobile) */}
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

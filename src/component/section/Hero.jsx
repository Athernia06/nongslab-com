import React from "react";
import laptop from "../../assets/laptop.svg";
import boxPlayer from "../../assets/box_player.svg";
import notesDoc from "../../assets/notes_doc.svg";
import rocket from "../../assets/rocket.svg";

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-36 pb-16 md:pt-48 md:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat scroll-mt-16"
            style={{
                backgroundImage: `url('/images/background.png')`,
                backgroundColor: '#FDF8F3'
            }}
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Studio illustrations, static: MOTION dial 1 keeps animation to hover states only */}
                <div className="absolute top-32 md:top-32 lg:top-20 left-1 md:left-10 lg:left-24">
                    <img src={laptop} alt="Laptop illustration" className="w-24 md:w-32 lg:w-40" />
                </div>
                <div className="absolute top-40 md:top-40 lg:top-28 right-1 md:right-10 lg:right-24">
                    <img src={boxPlayer} alt="Media player illustration" className="w-24 md:w-32 lg:w-40" />
                </div>
                <div className="absolute bottom-16 md:bottom-32 lg:bottom-48 left-1 md:left-12 lg:left-32">
                    <img src={notesDoc} alt="Document illustration" className="w-20 md:w-28 lg:w-32" />
                </div>
                <div className="absolute bottom-32 md:bottom-24 lg:bottom-40 right-1 md:right-10 lg:right-32">
                    <img src={rocket} alt="Rocket illustration" className="w-24 md:w-32 lg:w-40" />
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto mt-16 md:mt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight font-sans">
                        We design, build, and ship
                        <br />
                        <span className="text-primary">digital products that work</span>
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-sans">
                        Nongslab is a two-person digital studio specializing in high-performance websites, UI/UX design, and custom web applications. Run by the people you talk to.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto bg-[#F08733] text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 font-sans font-medium text-lg min-h-[44px] flex items-center justify-center"
                        >
                            Start a Project
                        </a>
                        <a
                            href="#services"
                            className="w-full sm:w-auto bg-[#FDF8F3] border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 font-sans font-medium text-lg min-h-[44px] flex items-center justify-center"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from "react";
import { FiChevronDown } from "react-icons/fi";
import laptop from "../../assets/laptop.svg";
import boxPlayer from "../../assets/box_player.svg";
import notesDoc from "../../assets/notes_doc.svg";
import rocket from "../../assets/rocket.svg";

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('/images/background.png')`,
                backgroundColor: '#FDF8F3'
            }}
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Decorative Illustrations */}
                <div className="absolute top-32 left-8 md:left-16 lg:left-24 animate-float">
                    <img src={laptop} alt="Laptop" className="w-24 md:w-32 lg:w-40" />
                </div>
                <div className="absolute top-28 right-8 md:right-16 lg:right-24 animate-float-delayed">
                    <img src={boxPlayer} alt="Box Player" className="w-24 md:w-32 lg:w-40" />
                </div>
                <div className="absolute bottom-48 left-8 md:left-20 lg:left-32 animate-float">
                    <img src={notesDoc} alt="Notes" className="w-20 md:w-28 lg:w-32" />
                </div>
                <div className="absolute bottom-40 right-8 md:right-20 lg:right-32 animate-float-delayed">
                    <img src={rocket} alt="Rocket" className="w-24 md:w-32 lg:w-40" />
                </div>

                {/* Main Content */}
                <div className="relative z-10 text-center max-w-5xl mx-auto mt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight font-roboto">
                        We Turn Your Digital Challenges into
                        <br />
                        Lasting <span className="text-primary">Business Growth</span>
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-roboto">
                        With reliable technology and a team that truly cares, we create solutions built to simplify your workflow, engage your audience, and help your business thrive — every step of the way.
                    </p>

                    {/* CTA Button */}
                    <button className="group inline-flex items-center gap-3 bg-[#FDF8F3] border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-roboto font-medium text-lg shadow-lg">
                        Know Us Better
                        <FiChevronDown className="text-2xl group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

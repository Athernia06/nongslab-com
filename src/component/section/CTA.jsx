import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const CTA = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-primary to-purple-600">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
                        Join thousands of successful businesses already using Nexora.
                        Start your free trial today and experience the difference.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button className="group bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold flex items-center gap-2 shadow-lg">
                            Start Free Trial
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 text-lg font-semibold">
                            Schedule a Demo
                        </button>
                    </div>

                    <div className="text-blue-100 text-sm">
                        No credit card required • Free 14-day trial • Cancel anytime
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

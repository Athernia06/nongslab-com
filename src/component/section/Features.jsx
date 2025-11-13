import React from 'react';
import { FiZap, FiShield, FiTrendingUp, FiUsers, FiClock, FiAward } from 'react-icons/fi';

const Features = () => {
    const features = [
        {
            icon: <FiZap className="text-4xl" />,
            title: 'Lightning Fast',
            description: 'Experience blazing fast performance with optimized code and modern architecture for seamless user experience.'
        },
        {
            icon: <FiShield className="text-4xl" />,
            title: 'Secure & Reliable',
            description: 'Your data is protected with enterprise-grade security and 99.9% uptime guarantee for peace of mind.'
        },
        {
            icon: <FiTrendingUp className="text-4xl" />,
            title: 'Scalable Solution',
            description: 'Grow your business without limits with our scalable infrastructure that adapts to your needs.'
        },
        {
            icon: <FiUsers className="text-4xl" />,
            title: 'Team Collaboration',
            description: 'Work seamlessly with your team using real-time collaboration tools and shared workspaces.'
        },
        {
            icon: <FiClock className="text-4xl" />,
            title: '24/7 Support',
            description: 'Get help whenever you need it with our dedicated support team available around the clock.'
        },
        {
            icon: <FiAward className="text-4xl" />,
            title: 'Award Winning',
            description: 'Recognized by industry leaders for excellence in innovation and customer satisfaction.'
        }
    ];

    return (
        <section id="features" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold">
                        Our Features
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose Nexora?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the powerful features that make Nexora the perfect choice
                        for businesses looking to scale and succeed in the digital age.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 bg-white"
                        >
                            <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: ['Features', 'Pricing', 'Security', 'Roadmap'],
        company: ['About Us', 'Careers', 'Blog', 'Press Kit'],
        resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
        legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses']
    };

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Nexora</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering businesses with innovative digital solutions.
                            Transform your operations and achieve unprecedented growth with our platform.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-400">
                                <FiMail className="text-primary" />
                                <span>info@nexora.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <FiPhone className="text-primary" />
                                <span>+62 123 4567 890</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <FiMapPin className="text-primary" />
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="max-w-md mx-auto md:mx-0">
                        <h4 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h4>
                        <p className="text-gray-400 mb-4 text-sm">
                            Get the latest updates and news delivered to your inbox.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary text-white"
                            />
                            <button className="bg-primary hover:bg-secondary px-6 py-2 rounded-lg transition-colors font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} Nexora. All rights reserved.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <FiFacebook className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <FiTwitter className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <FiInstagram className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <FiLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

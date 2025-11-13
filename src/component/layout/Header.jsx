import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import heroLogo from '../../assets/hero_logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Our Services', href: '#services' },
        { name: 'Work Process', href: '#process' }
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-white shadow-md'
                : 'bg-transparent'
        }`}>
            <nav className="container mx-auto px-4 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={heroLogo} alt="Logo" className="h-12 w-auto" />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 items-center">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={`transition-colors duration-300 font-medium font-roboto ${
                                        isScrolled
                                            ? 'text-gray-700 hover:text-primary'
                                            : 'text-gray-900 hover:text-primary'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Us Button Desktop */}
                    <button className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 font-roboto font-medium shadow-md">
                        <BiMessageDetail className="text-xl" />
                        Contact Us
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white rounded-lg">
                        <ul className="space-y-4">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium font-roboto"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 font-roboto font-medium">
                                    <BiMessageDetail className="text-xl" />
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;

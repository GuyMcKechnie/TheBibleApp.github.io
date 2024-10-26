import { useState } from "react";
import { FaCross, FaBars, FaTimes } from "react-icons/fa";
import navbarIcon from "../Assets/navbarIcon.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "The Group", href: "#the-bible-group" },
        { label: "About Us", href: "#about-us" },
        { label: "Testimonials", href: "#testimonials" },
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <div className="text-gray-700 text-lg font-medium">
                            <a href="/">
                                <FaCross className="text-sky-400" size={32} />
                            </a>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-sky-400"
                        >
                            {isOpen ? (
                                <FaTimes size={24} />
                            ) : (
                                <FaBars size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/imgs/logo.png'


const Header = () => {
    return (
        <div className="w-full">

            {/* Top Email Bar */}
            <div className=" text-white px-4 flex justify-center space-x-5 md:px-10 py-2 text-sm md:text-base">
                <a
                    href="mailto:yaadproduction.np@gmail.com"
                    className="hover:underline"
                >
                    yaadproduction.np@gmail.com
                </a>

                <a href="https://www.youtube.com/@YaadProduction" target="_blank" rel="noopener noreferrer">
                    <img className='w-8'
                        src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
                        alt="YouTube"
                    />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=61576464863080"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="w-8"
                        src="https://cdn-icons-png.flaticon.com/128/3955/3955011.png"
                        alt="Facebook"
                    />
                </a>
            </div>

            {/* Main Navbar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-10 py-4 bg-white text-black">

                {/* Logo */}
                <div>
                    <img
                        src={logo}
                        alt="logo"
                        className="w-24 md:w-28"
                    />
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-x-15 md:flex-row items-center gap-4 md:gap-6 text-base md:text-lg font-medium">
                    <Link to="/" className="hover:text-gray-600 text-4xl">HOME</Link>
                    <Link to="/services" className="hover:text-gray-600 text-4xl">SERVICES</Link>
                    <Link to="/about" className="hover:text-gray-600 text-4xl">ABOUT</Link>
                    <Link to="/contact" className="hover:text-gray-600 text-4xl">CONTACT</Link>
                </nav>

                {/* Button */}
                <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                    Register
                </button>

            </div>

        </div >

    )
}

export default Header
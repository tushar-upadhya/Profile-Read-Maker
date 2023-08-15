import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

import logo from "../assets/fav.ico";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex bg-gray-100 flex-row justify-between items-center text-2xl p-1 w-full">
            <Link to="/">
                <img src={logo} alt="logo" className="h-10 w-10" />
            </Link>

            <div className="flex items-center gap-2">
                <a
                    href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
                    className="transition text-gray-300 h-10 md:w-12   hover:text-black rounded-full outline-none flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn className="text-xl md:text-2xl" />
                </a>

                <a
                    href="https://github.com/tushar-upadhya/markdown"
                    className="transition text-gray-300 h-10 md:w-12   hover:text-black rounded-full outline-none flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <PiGithubLogoFill className="text-xl md:text-2xl" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

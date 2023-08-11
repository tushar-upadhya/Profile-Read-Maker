import { Link } from "react-router-dom";

import logo from "../assets/fav.ico";

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center text-2xl p-1 w-full">
            <Link to="/">
                <img src={logo} alt="logo" className="h-10 w-10" />
            </Link>

            <div className="text-center mt-8">
                <div className="text-xl lg:text-2xl text-slate-00">
                    Made by{" "}
                    <a
                        href="https://tusharupadhyay.vercel.app/"
                        className="no-underline font-bold hover:text-slate-500 transition"
                        target="_blank"
                    >
                        Tushar Upadhyay
                    </a>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <a
                    href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
                    className="transition bg-sky-400 h-10 md:w-12 hover:bg-white text-white hover:text-sky-400 rounded-full outline-none flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn className="text-xl md:text-2xl" />
                </a>

                <a
                    href="https://github.com/tushar-upadhya/markdown"
                    className="transition bg-sky-400 h-10 md:w-12 hover:bg-white text-white hover:text-sky-400 rounded-full outline-none flex items-center justify-center"
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

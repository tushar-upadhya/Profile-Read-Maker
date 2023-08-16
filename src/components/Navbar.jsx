import { useEffect, useState } from "react";

import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import logo from "../assets/fav.ico";

import { Link } from "react-router-dom";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                scroll ? "py-1 shadow-md" : "bg-none py-4  "
            } fixed w-full z-10 transition-all duration-300`}
        >
            <nav className="flex  flex-row justify-between items-center text-2xl p-1 w-full">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-10 w-10 hover:scale-90 transition-all"
                    />
                </Link>
                <div className="flex items-center gap-2">
                    <a
                        href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
                        className="transition-all hover:scale-90 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="h-10 md:h-12"
                        />
                    </a>
                    <a
                        href="https://github.com/tushar-upadhya/markdown"
                        className="transition-all hover:scale-90 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={github}
                            alt="github"
                            className="h-10 md:h-12"
                        />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

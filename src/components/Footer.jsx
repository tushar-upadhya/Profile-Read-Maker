import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="flex flex-row justify-between items-center  text-2xl p-1 w-full">
            <div className="text-xl lg:text-2xl  text-slate-500">
                Made by{" "}
                <a
                    href="https://pushkaryadav.in/"
                    className=" text-slate-400 hover:text-slate-900 font-semibold transition-all duration-200"
                >
                    Tushar Upadhyay
                </a>
            </div>

            <div className="flex items-center gap-2">
                <a
                    href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
                    className="transition  h-10 md:w-12 text-slate-400 hover:text-slate-900 rounded-full outline-none flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn className="text-xl md:text-2xl" />
                </a>

                <a
                    href="https://github.com/tushar-upadhya/markdown"
                    className="transition  h-10 md:w-12 text-slate-400 hover:text-slate-900 rounded-full outline-none flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <PiGithubLogoFill className="text-xl md:text-2xl" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

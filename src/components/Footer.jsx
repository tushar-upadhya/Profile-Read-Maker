import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="text-center mb-4">
                <div className="text-xl lg:text-2xl text-gray-600">
                    <span className="text-sky-400 text-xl ">Made by</span>{" "}
                    <a
                        href="https://tusharupadhyay.vercel.app/"
                        className="text-slate-400 hover:text-slate-900 font-semibold transition-all duration-200"
                    >
                        Tushar Upadhyay
                    </a>
                </div>
            </div>

            <div className="flex justify-center">
                <a
                    href="https://www.linkedin.com/in/pushkaryadav/"
                    className="text-slate-400 hover:text-slate-900 font-semibold transition-all duration-200 mx-2 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://github.com/pushkaryadav"
                    className="text-slate-400 hover:text-slate-900 font-semibold transition-all duration-200 mx-2 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

import { Link } from "react-router-dom";

import profileImage from "../assets/github.png";
import projectImage from "../assets/project.png";

const Create = () => {
    return (
        <>
            <div className="text-center py-12 lg:py-24">
                <div className="pt-20 text-center text-3xl lg:text-5xl font-medium text-sky-900">
                    Choose Template
                </div>

                <div className="pt-16 flex flex-col md:flex-row justify-center gap-4 items-center">
                    {[
                        ["/profile", profileImage, "Profile"],
                        ["/project", projectImage, "Project"],
                    ].map(([to, img, name]) => (
                        <Link
                            className="w-52 text-center transition p-8 text-4xl text-sky-400 border-2 rounded-lg "
                            key={name}
                            to={to}
                        >
                            <img
                                src={img}
                                className="w-full hover:scale-[1.05] hover:shadow-custom1 hover:-rotate-12  hover:drop-shadow-2xl transition-all duration-300 ease-in-out"
                                alt={to}
                            />
                            <div className="text-3xl font-semibold  pt-3">
                                {name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Create;

import hero from "../assets/hero.svg";

const Hero = () => {
    return (
        <div className="bg-gradient-to-tr from-sky-500 to-cyan-400 pt-24 min-h-screen text-zinc-50 flex flex-col md:flex-row justify-evenly  md:justify-between items-center p-4">
            <div className="basis-3/5 text-5xl font-semibold md:text-6xl lg:text-7xl xl:text-8xl lg:pl-8">
                Create <br /> Readme <br />
                <span className="text-sky-200">NOW</span>
                <div className="text-center mt-8 animate-bounce text-cyan-200">
                    &#8623;
                </div>
            </div>

            <div className="basis-2/5 p-8 xl:p-12">
                <img src={hero} className="w-full" alt="heroImage" />
            </div>
        </div>
    );
};

export default Hero;

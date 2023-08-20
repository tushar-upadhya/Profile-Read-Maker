import templateImage from "../assets/featuresImage/template.svg";
import guideImage from "../assets/featuresImage/guideImage.svg";
import counterImage from "../assets/featuresImage/counterImage.svg";
import badgeImage from "../assets/featuresImage/badgeImage.svg";
import socialImage from "../assets/featuresImage/socialImage.svg";
import techStackImage from "../assets/featuresImage/techStackImage.svg";

const Feature = () => {
    return (
        <div className="text-center text-3xl md:text-4xl mt-8 mb-20 lg:mt-20 font-medium text-sky-900">
            Features
            <div class="flex flex-col md:flex-row gap-2 mt-6 lg:mt-12 flex-wrap xl:px-16 2xl:px-32">
                <div class="basis-1/2 p-6 flex items-center md:max-w-sm md:mx-auto lg:max-w-lg xl:max-w-xl">
                    <div class="shrink-0">
                        <img
                            src={templateImage}
                            alt="templateImage"
                            class="w-16 "
                        />
                    </div>

                    <div class="pl-4">
                        <div class="text-2xl font-medium text-sky-900 pb-1">
                            Templates
                        </div>
                        <p class="text-slate-500 text-lg">
                            Explore some pre-made templates so that your work
                            becomes a lot faster and easier
                        </p>
                    </div>
                </div>

                <div class="basis-1/2 p-6 flex items-center md:max-w-sm md:mx-auto lg:max-w-lg xl:max-w-xl">
                    <div class="shrink-0">
                        <img src={guideImage} alt="guideImage" class="w-16 " />
                    </div>
                    <div class="pl-4">
                        <div class="text-2xl font-medium text-sky-900 pb-1">
                            Guides
                        </div>
                        <p class="text-slate-500 text-lg">
                            Add guides how to run your project locally on users
                            system
                        </p>
                    </div>
                </div>
                <div class="basis-1/2 p-6 flex items-center md:max-w-sm md:mx-auto lg:max-w-lg xl:max-w-xl">
                    <div class="shrink-0">
                        <img
                            src={counterImage}
                            alt="counterImage"
                            class="w-16"
                        />
                    </div>
                    <div class="pl-4">
                        <div class="text-2xl font-medium text-sky-900 pb-1">
                            Visit Counter
                        </div>
                        <p class="text-slate-500 text-lg">
                            Realtime count the no of visits to your repository
                        </p>
                    </div>
                </div>
                <div class="basis-1/2 p-6 flex items-center md:max-w-sm md:mx-auto lg:max-w-lg xl:max-w-xl">
                    <div class="shrink-0">
                        <img src={badgeImage} alt="badgeImage" class="w-16" />
                    </div>
                    <div class="pl-4">
                        <div class="text-2xl font-medium text-cyan-800 pb-1">
                            Badges
                        </div>
                        <p class="text-slate-500 text-lg">
                            Add some badges to your readme like code size,
                            production, version control and more
                        </p>
                    </div>
                </div>

                <div class="basis-1/2 p-6 flex items-center md:max-w-sm md:mx-auto lg:max-w-lg xl:max-w-xl">
                    <div class="shrink-0">
                        <img src={socialImage} alt="socialImage" class="w-16" />
                    </div>
                    <div class="pl-4">
                        <div class="text-2xl font-medium text-sky-900 pb-1">
                            Social
                        </div>
                        <p class="text-slate-500 text-lg">
                            We let you add a lot of social media and you can
                            create own too
                        </p>
                    </div>
                </div>
                <div class="basis-1/2 p-6 flex items-center md:max-w-sm md:mx-auto lg:max-w-lg xl:max-w-xl">
                    <div class="shrink-0">
                        <img
                            src={techStackImage}
                            alt="techStackImage"
                            class="w-16"
                        />
                    </div>
                    <div class="pl-4">
                        <div class="text-2xl font-medium text-sky-900 pb-1">
                            Tech Stacks
                        </div>
                        <p class="text-slate-500 text-lg">
                            Add badges of tech used in your project so that
                            users can identify easily which knowledge they need
                            run project
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;

import { useState } from "react";
import {
    DatabaseBadges,
    LanguageBadges,
    FPL,
    versionControlBadges,
    SocialsBadges,
} from "../data/Badges";

const Profile = () => {
    const [profile, setProfile] = useState({
        step: 1,
        name: "",
        username: "",
        about: "",
    });

    const [twitterProfile, setTwitterProfile] = useState("");

    const [language, setLanguage] = useState([...LanguageBadges]);

    const [versionControl, setVersionControl] = useState([
        ...versionControlBadges,
    ]);

    const [dataBase, setDataBase] = useState([...DatabaseBadges]);

    const [Fpl, setFpl] = useState([...FPL]);

    const [social, setSocial] = useState([...SocialsBadges]);

    const [badgeType, setBadgeType] = useState();

    const handleTechLanguage = (techName) => {
        const myNextList = [...language];
        const current = language.find((a) => a.name === techName);

        current.isSelected = current.isSelected ? false : true;
        setLanguage(myNextList);
    };

    const handleTechVersion = (techName, selected) => {
        const myNextList = [...versionControl];
        const current = versionControl.find((a) => a.name === techName);

        current.isSelected = current.isSelected ? false : true;
        setVersionControl(myNextList);
    };

    const handleTechDatabase = (techName, selected) => {
        const myNextList = [...dataBase];
        const current = dataBase.find((a) => a.name === techName);

        current.isSelected = current.isSelected ? false : true;
        setDataBase(myNextList);
    };

    const handleTechFpl = (techName, selected) => {
        const myNextList = [...Fpl];
        const current = Fpl.find((a) => a.name === techName);

        current.isSelected = current.isSelected ? false : true;
        setFpl(myNextList);
    };

    const handleSocial = (name, selected) => {
        const myNextList = [...social];
        const current = social.find((a) => a.name === name);

        current.isSelected = current.isSelected ? false : true;
        setSocial(myNextList);
    };

    return (
        <>
            <div className="min-h-screen bg-zinc-50 text-slate-800">
                <div className="text-2xl lg:text-3xl xl:text-4xl text-center text-slate-600">
                    Let's make your Profile Readme
                </div>

                <div
                    className={
                        "translate-all form w-11/12 md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-sky-100 text-white rounded mt-12 mx-auto px-4 py-8 md:p-4 lg:p-6 xl:p-8 lg:rounded-xl" +
                        (profile.step === 2 || profile.step === 6
                            ? "md:w-10/12 lg:w-2/3 xl:w-3/5 2xl:w-3/5 "
                            : profile.step === 3 || profile.step === 5
                            ? "md:w-10/12 lg:w-2/3 xl:w-4/5 2xl:w-4/5"
                            : "md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3")
                    }
                ></div>
            </div>
        </>
    );
};

export default Profile;

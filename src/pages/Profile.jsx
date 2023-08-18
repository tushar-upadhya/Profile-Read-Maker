import { useState } from "react";

import {
    DatabaseBadges,
    LanguageBadges,
    FPL,
    versionControlBadges,
    SocialsBadges,
} from "../data/BadgesData";

import Button from "../share/Button";
import BadgeButton from "../share/BadgeButton";
import StepMessage from "../share/StepMessage";

import ProfilePreview from "../components/ProfilePreview";

const Profile = () => {
    const [profile, setProfile] = useState({
        step: 1,
        name: "",
        username: "",
        about: "",
    });

    const [leetcodeUsername, setLeetcodeUsername] = useState("");

    const [language, setLanguage] = useState([...LanguageBadges]);

    const [versionControl, setVersionControl] = useState([
        ...versionControlBadges,
    ]);

    const [dataBase, setDataBase] = useState([...DatabaseBadges]);

    const [Fpl, setFpl] = useState([...FPL]);

    const [social, setSocial] = useState([...SocialsBadges]);

    const [badgeType, setBadgeType] = useState("for-the-badge");

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
                        "transition-all form w-11/12 md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-sky-100 text-white  rounded mt-12 mx-auto px-4 py-8 md:p-4 lg:p-6 xl:p-8 lg:rounded-xl " +
                        (profile.step === 2 || profile.step === 6
                            ? "md:w-10/12 lg:w-2/3 xl:w-3/5 2xl:w-3/5 "
                            : profile.step === 3 || profile.step === 5
                            ? "md:w-10/12 lg:w-2/3 xl:w-4/5 2xl:w-4/5"
                            : "md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3")
                    }
                >
                    <div className="text-white bg-violet-500 float-right w-fit px-2 py-1 text-center rounded">
                        Step: <span>{profile.step}</span> / <span>5</span>
                    </div>

                    {profile.step === 1 && (
                        <>
                            <div className="mb-6 text-slate-600 text-lg font-medium">
                                &lt;your username&gt; is a{" "}
                                <span className="bg-sky-50 px-1 mx-1 rounded">
                                    special
                                </span>{" "}
                                repository, put this Readme there and it will
                                appear on your profile
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                placeholder="Your Name"
                                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                                autoComplete="off"
                                onChange={(e) => {
                                    setProfile({
                                        ...profile,
                                        name: e.target.value,
                                    });
                                }}
                            />
                            <input
                                type="text"
                                name="name"
                                value={profile.username}
                                placeholder="Github Username"
                                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                                autoComplete="off"
                                onChange={(e) => {
                                    setProfile({
                                        ...profile,
                                        username: e.target.value,
                                    });
                                }}
                            />
                        </>
                    )}
                    {profile.step === 2 && (
                        <>
                            <textarea
                                name="about"
                                rows="12"
                                cols="30"
                                placeholder="
                                ## 🔭 I’m currently working on
                                ## 👯 I’m looking to collaborate on
                                ## 🤝 I’m looking for help with
                                ## 🌱 I’m currently learning
                                ## 💬 Ask me about
                                ## ⚡ Fun fact
                                "
                                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4 resize-none"
                                autoComplete="off"
                                value={profile.about}
                                onChange={(e) => {
                                    setProfile({
                                        ...profile,
                                        about: e.target.value,
                                    });
                                }}
                            ></textarea>
                        </>
                    )}
                    {profile.step === 3 && (
                        <>
                            <div className="text-center text-xl text-black">
                                Badge Type:{" "}
                                <select
                                    name="badge-type"
                                    id="badge-type"
                                    onChange={(e) => {
                                        setBadgeType(e.target.value);
                                    }}
                                    className="bg-black text-white p-1 rounded"
                                >
                                    <option
                                        value="for-the-badge"
                                        defaultValue={true}
                                    >
                                        For The Badge
                                    </option>
                                    <option value="plastic">Plastic</option>
                                    <option value="flat">Flat</option>
                                    <option value="flat-square">
                                        Flat Square
                                    </option>
                                    <option value="social">Social</option>
                                </select>
                            </div>

                            {/* Languages */}

                            <div className="text-slate-900 font-medium pt-6 pb-2">
                                Languages
                            </div>
                            <div className="font-medium text-xl">
                                <div className="text-slate-700">
                                    {language.map((badge) => (
                                        <div
                                            className={
                                                "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                                (badge.isSelected
                                                    ? "bg-slate-700 border-slate-700 text-slate-50"
                                                    : "border-slate-300 text-slate-800")
                                            }
                                            key={badge.name}
                                            onClick={() =>
                                                handleTechLanguage(badge.name)
                                            }
                                        >
                                            {" "}
                                            <span className="pl-2 pr-1 py-1">
                                                {badge.name}
                                            </span>{" "}
                                            <BadgeButton
                                                isSelected={badge.isSelected}
                                                onClick={() =>
                                                    handleTechLanguage(
                                                        badge.name
                                                    )
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Framework & Libraries */}

                                <div className="text-slate-900 font-medium pt-6 pb-2">
                                    Framework & Libraries
                                </div>
                                <div className="text-slate-700">
                                    {Fpl.map((badge) => (
                                        <div
                                            className={
                                                "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                                (badge.isSelected
                                                    ? "bg-slate-700 border-slate-700 text-slate-50"
                                                    : "border-slate-300 text-slate-800")
                                            }
                                            key={badge.name}
                                            onClick={() =>
                                                handleTechFpl(badge.name)
                                            }
                                        >
                                            {" "}
                                            <span className="pl-2 pr-1 py-1">
                                                {badge.name}
                                            </span>{" "}
                                            <BadgeButton
                                                isSelected={badge.isSelected}
                                                onClick={() =>
                                                    handleTechFpl(badge.name)
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* database*/}

                                <div className="text-slate-900 font-medium pt-6 pb-2">
                                    Databases
                                </div>
                                <div className="text-slate-700">
                                    {dataBase.map((badge) => (
                                        <div
                                            className={
                                                "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                                (badge.isSelected
                                                    ? "bg-slate-700 border-slate-700 text-slate-50"
                                                    : "border-slate-300 text-slate-800")
                                            }
                                            key={badge.name}
                                            onClick={() =>
                                                handleTechDatabase(badge.name)
                                            }
                                        >
                                            {" "}
                                            <span className="pl-2 pr-1 py-1">
                                                {badge.name}
                                            </span>{" "}
                                            <BadgeButton
                                                isSelected={badge.isSelected}
                                                onClick={() =>
                                                    handleTechDatabase(
                                                        badge.name
                                                    )
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/*  Version Control  */}

                                <div className="text-slate-900 font-medium pt-6 pb-2">
                                    Version Control
                                </div>
                                <div className="text-slate-700">
                                    {versionControl.map((badge) => (
                                        <div
                                            className={
                                                "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                                (badge.isSelected
                                                    ? "bg-slate-700 border-slate-700 text-slate-50"
                                                    : "border-slate-300 text-slate-800")
                                            }
                                            key={badge.name}
                                            onClick={() =>
                                                handleTechVersion(badge.name)
                                            }
                                        >
                                            {" "}
                                            <span className="pl-2 pr-1 py-1">
                                                {badge.name}
                                            </span>{" "}
                                            <BadgeButton
                                                isSelected={badge.isSelected}
                                                onClick={() =>
                                                    handleTechVersion(
                                                        badge.name
                                                    )
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Socials */}

                                <div className="text-slate-900 font-medium pt-6 pb-2">
                                    Socials
                                </div>
                                <div className="text-slate-700">
                                    {SocialsBadges.map((badge) => (
                                        <div
                                            className={
                                                "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                                (badge.isSelected
                                                    ? "bg-slate-700 border-slate-700 text-slate-50"
                                                    : "border-slate-300 text-slate-800")
                                            }
                                            key={badge.name}
                                            onClick={() =>
                                                handleSocial(badge.name)
                                            }
                                        >
                                            {" "}
                                            <span className="pl-2 pr-1 py-1">
                                                {badge.name}
                                            </span>{" "}
                                            <BadgeButton
                                                isSelected={badge.isSelected}
                                                onClick={() =>
                                                    handleSocial(badge.name)
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    {profile.step === 4 && (
                        <>
                            <div className="mb-6 text-black text-lg font-medium grid place-items-center">
                                <div className="text-xl lg:text-2xl">
                                    {" "}
                                    <span className="text-yellow-600">
                                        WAIT !
                                    </span>{" "}
                                    Now you can add your realtime{" "}
                                    <span className="text-yellow-700">
                                        LeetCode
                                    </span>{" "}
                                    stats too and see it on your profile
                                </div>

                                <input
                                    type="text"
                                    className="transition-all p-2 ring-2 rounded-lg w-full ring-purple-600/10 focus:ring-purple-600/20 text-purple-700 outline-none md:w-2/3 mx-auto mt-8 lg:mt-12  lg:mb-6 xl:mt-16 xl:mb-8"
                                    value={leetcodeUsername}
                                    onChange={(e) => {
                                        setLeetcodeUsername(e.target.value);
                                    }}
                                    id="data"
                                    placeholder={"leetcode username"}
                                    autoComplete="off"
                                />
                            </div>
                        </>
                    )}
                    {profile.step === 5 && (
                        <>
                            <ProfilePreview
                                profile={profile}
                                database={dataBase}
                                versionControl={versionControl}
                                fpl={Fpl}
                                languages={language}
                                social={social}
                                badgeType={badgeType}
                                leetcodeUsername={leetcodeUsername}
                            />
                        </>
                    )}

                    <div
                        className={
                            "w-full mt-6 text-xl " +
                            (profile.step > 1 && "flex gap-1")
                        }
                    >
                        {profile.step > 1 && (
                            <Button
                                label="&lt; Back"
                                isContinue={false}
                                step={profile.step}
                                onClick={() =>
                                    profile.step > 1 &&
                                    setProfile({
                                        ...profile,
                                        step: profile.step - 1,
                                    })
                                }
                            />
                        )}

                        {profile.step < 5 && (
                            <Button
                                label="Continue &gt;"
                                isContinue={true}
                                step={profile.step}
                                onClick={() =>
                                    profile.step < 5 &&
                                    setProfile({
                                        ...profile,
                                        step: profile.step + 1,
                                    })
                                }
                            />
                        )}
                    </div>

                    <StepMessage
                        condition={profile.step === 5}
                        message="Hey👋, Can you help me to grow by sharing"
                    />

                    <StepMessage
                        condition={profile.step > 1 && profile.step !== 5}
                        message="No fields are mandatory; you may leave them blank."
                    />
                </div>
            </div>
        </>
    );
};

export default Profile;

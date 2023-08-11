import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const AnimatedText = ({ words }) => {
    const TEXTS = words;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            1500
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
                inline
            />
        </>
    );
};
export default AnimatedText;

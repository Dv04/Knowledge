import React from "react";
import { useTypewriter } from "./Typewriter.ts";

interface TypewriterProps {
    texts: string[];
}

const TypewriterText: React.FC<TypewriterProps> = ({ texts }) => {
    const animatedText = useTypewriter(texts, 100, 2000);
    return (
        <span className="border-r-2 border-gray-300 pr-1 animate-blinkCaret">
            {animatedText}
        </span>
    );
};

export default TypewriterText;
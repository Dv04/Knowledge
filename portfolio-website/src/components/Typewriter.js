import React, { useState, useEffect } from 'react';

const Typewriter = ({ phrases }) => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting && currentPhrase.length === 0) {
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
            setIsDeleting(false);
        }

        if (!isDeleting && currentPhrase.length === phrases[phraseIndex].length) {
            setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
            return;
        }

        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(() => {
            setCurrentPhrase((prev) => {
                const text = phrases[phraseIndex].substring(0, isDeleting ? letterIndex - 1 : letterIndex + 1);
                return text;
            });

            setLetterIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
        }, typingSpeed);
    }, [currentPhrase, isDeleting, letterIndex, phraseIndex, phrases]);

    useEffect(() => {
        if (letterIndex === phrases[phraseIndex].length) {
            setIsDeleting(true);
        } else if (isDeleting && letterIndex === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
    }, [letterIndex, phrases, phraseIndex, isDeleting]);

    return <span>{currentPhrase}</span>;
};

export default Typewriter;

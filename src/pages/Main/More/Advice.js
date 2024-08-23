import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const adviceData = {
    Positive: [
        "Consult your doctor immediately.",
        "Take prescribed medications.",
        "Avoid strenuous activities.",
        "Monitor your symptoms closely.",
        "Maintain a heart-healthy diet."
    ],
    Negative: [
        "Continue with regular check-ups.",
        "Exercise regularly.",
        "Maintain a balanced diet.",
        "Stay hydrated.",
        "Avoid smoking and excessive alcohol."
    ]
};

function Advice({ riskLevel }) {
    const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0);
    const [adviceList, setAdviceList] = useState([]);

    useEffect(() => {
        setAdviceList(adviceData[riskLevel] || []);
        setCurrentAdviceIndex(0); // Reset to the first advice when risk level changes
    }, [riskLevel]);

    const handleNextAdvice = () => {
        setCurrentAdviceIndex((prevIndex) => (prevIndex + 1) % adviceList.length);
    };

    const handlePrevAdvice = () => {
        setCurrentAdviceIndex((prevIndex) =>
            prevIndex === 0 ? adviceList.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="advice-carousel flex items-center justify-center space-x-4">
            <button onClick={handlePrevAdvice} className="text-white p-2">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="advice-text text-white text-center max-w-xs">
                {adviceList[currentAdviceIndex]}
            </div>
            <button onClick={handleNextAdvice} className="text-white p-2">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Advice;

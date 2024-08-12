import { useState, useEffect } from "react";

function Advice({ riskLevel }) {
    const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0);

    const highRiskAdvice = [
        "Consulta a un médico inmediatamente.",
        "Evita el consumo de tabaco y alcohol.",
        "Mantén una dieta baja en grasas y alta en fibra.",
        "Realiza ejercicios moderados bajo supervisión médica.",
        "Controla regularmente tus niveles de presión arterial y colesterol."
    ];

    const lowRiskAdvice = [
        "Mantén un estilo de vida saludable.",
        "Realiza ejercicio regularmente.",
        "Sigue una dieta equilibrada.",
        "Evita el estrés excesivo.",
        "Realiza chequeos médicos periódicos."
    ];

    const advices = riskLevel === "Positive" ? highRiskAdvice : lowRiskAdvice;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAdviceIndex((prevIndex) => (prevIndex + 1) % advices.length);
        }, 10000); // Cambiar consejo cada 10 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, [advices.length]);

    const handleNext = () => {
        setCurrentAdviceIndex((prevIndex) => (prevIndex + 1) % advices.length);
    };

    const handlePrev = () => {
        setCurrentAdviceIndex((prevIndex) =>
            prevIndex === 0 ? advices.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="advice-carousel relative flex items-center justify-center w-full max-w-xl mx-auto">
            <button 
                className="absolute left-0 transform -translate-x-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
                onClick={handlePrev}
            >
                &lt;
            </button>
            <div className="advice-text text-center w-full px-4 py-2 h-24 overflow-hidden">
                <p className="whitespace-normal break-words text-white">{advices[currentAdviceIndex]}</p>
            </div>
            <button 
                className="absolute right-0 transform translate-x-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
                onClick={handleNext}
            >
                &gt;
            </button>
        </div>
    );
}

export default Advice;

import React from "react";
import { useState } from "react";
import { ReactComponent as HeartIcon } from "logo.svg";

export default function Documentation() {
    const [showIntroduction, setShowIntroduction] = useState(false);
    const [showObjective, setShowObjective] = useState(false);
    const [showMethodology, setShowMethodology] = useState(false);
    const [showBenefits, setShowBenefits] = useState(false);

    const toogleCard = (card) => () => {
        setShowBenefits(false);
        setShowIntroduction(false);
        setShowObjective(false);
        setShowMethodology(false);
        switch (card) {
            case "introduction":
                setShowIntroduction(!showIntroduction);
                break;
            case "objective":
                setShowObjective(!showObjective);
                break;
            case "methodology":
                setShowMethodology(!showMethodology);
                break;
            case "benefits":
                setShowBenefits(!showBenefits);
                break;
            default:
                break;
        }
    };

    return (
        <div className="h-screen overflow-y-auto p-8">
            <div className="grid gap-4 md:grid-cols-1 h-full">
                <div className="bg-black-pearl-950 text-[#eff8ff] border-2 border-black-pearl-500 shadow-lg rounded-lg p-6 flex flex-col justify-center items-center relative">
                    <div
                        onClick={toogleCard("introduction")}
                        className="cursor-pointer absolute right-5 top-5 p-2"
                    >
                        {showIntroduction ? (
                            <div className="chevron_up"></div>
                        ) : (
                            <div className="chevron"></div>
                        )}
                    </div>
                    <div className="flex items-center space-x-2 mb-4 justify-center">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">Introducción</h2>
                    </div>
                    <p>
                        Predicción del riesgo de infarto agudo de miocardio utilizando
                        técnicas de Machine Learning. Este proyecto se enfoca en mejorar la
                        precisión diagnóstica mediante el uso de parámetros clínicos y
                        demográficos, optimizando la limpieza y procesamiento de datos con
                        técnicas avanzadas de inteligencia artificial.
                    </p>
                    {showIntroduction && (
                        <p>
                            Este proyecto tiene como objetivo desarrollar un modelo de
                            inteligencia artificial para predecir el riesgo de infarto agudo
                            de miocardio utilizando datos clínicos y demográficos. El enfoque
                            incluye la limpieza exhaustiva de datos, la ingeniería de
                            características, y la implementación de algoritmos de
                            clasificación como Random Forests, SVM, y redes neuronales.
                            Además, se utilizarán técnicas de evaluación como la curva AUC-ROC
                            y herramientas de interpretabilidad como SHAP. El modelo se
                            desarrollará utilizando librerías como TensorFlow y Scikit-learn,
                            y se considera su despliegue en la nube para garantizar
                            escalabilidad y accesibilidad, con el fin de mejorar el
                            diagnóstico y salvar vidas. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer nec odio. Praesent libero.
                            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                            elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                            nec tellus sed augue semper porta. Mauris massa. Vestibulum
                            lacinia arcu eget nulla.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                            sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                            nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                            sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                            porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
                            massa. Vestibulum lacinia arcu eget nulla.Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                            lacinia arcu eget nulla.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                            sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                            nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                            sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                            porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
                            massa. Vestibulum lacinia arcu eget nulla.Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                            lacinia arcu eget nulla.
                        </p>
                    )}
                </div>

                <div className="bg-black-pearl-950 text-[#eff8ff] border-2 border-black-pearl-500 shadow-lg rounded-lg p-6 flex flex-col justify-center items-center relative">
                    <div
                        class="cursor-pointer absolute right-5 top-5 p-2"
                        onClick={toogleCard("objective")}
                    >
                        {showObjective ? (
                            <div className="chevron_up"></div>
                        ) : (
                            <div className="chevron"></div>
                        )}
                    </div>
                    <div className="flex items-center space-x-2 mb-4 justify-center">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">Objetivo del Proyecto</h2>
                    </div>
                    <p>
                        Objetivo general: Desarrollar un modelo de clasificación binaria
                    </p>
                    {showObjective && (
                        <p>
                            Crear un modelo de clasificación binaria que pueda distinguir
                            entre pacientes con riesgo alto y bajo de infarto de miocardio.
                            Desarrollar y validar un modelo de inteligencia artificial que
                            prediga de manera temprana el riesgo de infarto de miocardio en
                            pacientes, utilizando parámetros clínicos como edad, género,
                            presión arterial (alta y baja), niveles de glucosa, kcm y
                            troponina. El aspecto específico del problema que resolverá este
                            proyecto es la predicción temprana del riesgo de infarto de
                            miocardio en pacientes utilizando parámetros clínicos.
                        </p>
                    )}
                </div>

                <div className="bg-black-pearl-950 text-[#eff8ff] border-2 border-black-pearl-500 shadow-lg rounded-lg p-6 flex flex-col justify-center items-center relative">
                    <div
                        class="cursor-pointer absolute right-5 top-5 p-2"
                        onClick={toogleCard("methodology")}
                    >
                        {showMethodology ? (
                            <div className="chevron_up"></div>
                        ) : (
                            <div className="chevron"></div>
                        )}
                    </div>
                    <div className="flex items-center space-x-2 mb-4 justify-center">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">Enfoque y Metodología</h2>
                    </div>
                    <p>
                        Nuestro enfoque incluye dividir los datos en conjuntos de
                        entrenamiento, validación y prueba
                    </p>
                    {showMethodology && (
                        <p>
                            Nuestro enfoque incluye dividir los datos en conjuntos de
                            entrenamiento, validación y prueba, utilizando algoritmos de
                            clasificación avanzados y técnicas de evaluación para mejorar la
                            precisión del modelo y facilitar la toma de decisiones clínicas.
                        </p>
                    )}
                </div>

                <div className="bg-black-pearl-950 text-[#eff8ff] border-2 border-black-pearl-500 shadow-lg rounded-lg p-6 flex flex-col justify-center items-center relative">
                    <div
                        class="cursor-pointer absolute right-5 top-5 p-2"
                        onClick={toogleCard("benefits")}
                    >
                        {showBenefits ? (
                            <div className="chevron_up"></div>
                        ) : (
                            <div className="chevron"></div>
                        )}
                    </div>
                    <div className="flex items-center space-x-2 mb-4 justify-center">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">
                            Beneficios y Usuarios Potenciales
                        </h2>
                    </div>
                    <p>
                        Este modelo beneficiará a instituciones como el Ministerio de Salud
                        Pública de Ecuador, hospitales y clínicas
                    </p>
                    {showBenefits && (
                        <p>
                            Este modelo beneficiará a instituciones como el Ministerio de
                            Salud Pública de Ecuador, hospitales y clínicas, facilitando un
                            diagnóstico temprano y mejorando los resultados de salud mediante
                            intervenciones médicas optimizadas. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer nec odio. Praesent libero.
                            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                            elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                            nec tellus sed augue semper porta. Mauris massa. Vestibulum
                            lacinia arcu eget nulla. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                            sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                            nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                            sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                            porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
                            massa. Vestibulum lacinia arcu eget nulla. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                            lacinia arcu eget nulla. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                            sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                            nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                            sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                            porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
                            massa. Vestibulum lacinia arcu eget nulla. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                            lacinia arcu eget nulla. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                            sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                            nulla.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

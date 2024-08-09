import React from 'react';
import { useState } from 'react';
import { ReactComponent as HeartIcon } from 'logo.svg';

export default function Documentation() {
    const [showIntroduction, setShowIntroduction] = useState(false);

    const toogleIntroduction = () => {
        setShowIntroduction(!showIntroduction);
    };

    return (
        <div className="h-screen overflow-y-auto p-8">
            <div className="grid gap-4 md:grid-cols-1 h-full">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center relative">
                    <div class="chevron cursor-pointer absolute right-5 top-5" onClick={toogleIntroduction}></div>
                    <div className="flex items-center space-x-2 mb-4 justify-center">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">Introducción</h2>
                    </div>
                    <p>
                        Predicción del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.
                    </p>
                    {showIntroduction && (
                        <p>
                            Predicc
                            Predicción del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.

                            Predicción del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.
                            Predicción del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.
                            Predicción del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.
                            Predicción del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.
                            Predicción del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.
                            Predicción del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.
                            ión del riesgo de infarto agudo de miocardio utilizando técnicas de Machine Learning. Este proyecto se enfoca en mejorar la precisión diagnóstica mediante el uso de parámetros clínicos y demográficos, optimizando la limpieza y procesamiento de datos con técnicas avanzadas de inteligencia artificial.
                        </p>
                    )}

                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center relative">
                    <div class="chevron cursor-pointer absolute right-5 top-5" onClick={toogleIntroduction}></div>
                    <div className="flex items-center space-x-2 mb-4 justify-center">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">Objetivo del Proyecto</h2>
                    </div>
                    <p>
                        Desarrollar un modelo de clasificación binaria que, utilizando parámetros clínicos como la edad, el género y la presión arterial, prediga el riesgo de infarto de manera temprana, contribuyendo así a la mejora del diagnóstico y tratamiento.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center relative">
                    <div class="chevron cursor-pointer absolute right-5 top-5" onClick={toogleIntroduction}></div>
                    <div className="flex items-center space-x-2 mb-4 justify-center">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">Enfoque y Metodología</h2>
                    </div>
                    <p>
                        Nuestro enfoque incluye dividir los datos en conjuntos de entrenamiento, validación y prueba, utilizando algoritmos de clasificación avanzados y técnicas de evaluación para mejorar la precisión del modelo y facilitar la toma de decisiones clínicas.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center relative">
                    <div class="chevron cursor-pointer absolute right-5 top-5" onClick={toogleIntroduction}></div>
                    <div className="flex items-center space-x-2 mb-4 justify-center">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">Beneficios y Usuarios Potenciales</h2>
                    </div>
                    <p>
                        Este modelo beneficiará a instituciones como el Ministerio de Salud Pública de Ecuador, hospitales y clínicas, facilitando un diagnóstico temprano y mejorando los resultados de salud mediante intervenciones médicas optimizadas.
                    </p>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { ReactComponent as HeartIcon } from 'logo.svg';

export default function Documentation() {
    return (
        <div className="p-8">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                        <HeartIcon className="w-10 h-10 text-red-500" />
                        <h2 className="text-lg font-bold">Problema de Salud Pública</h2>
                    </div>
                    <p>
                        El infarto agudo de miocardio es una de las principales causas de muerte a nivel mundial. Esta afección resulta de la obstrucción de una arteria, y su detección temprana es crucial para la prevención y el tratamiento efectivo.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-4">Necesidad de Inteligencia Artificial</h2>
                    <p>
                        Debido a la complejidad del diagnóstico, que involucra múltiples factores y la no linealidad de las relaciones entre ellos, las técnicas de IA son ideales para identificar patrones sutiles y manejar grandes volúmenes de datos de forma eficiente.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-4">Objetivo del Proyecto</h2>
                    <p>
                        Desarrollar un modelo de clasificación binaria que, utilizando parámetros clínicos como la edad, el género y la presión arterial, prediga el riesgo de infarto de manera temprana, contribuyendo así a la mejora del diagnóstico y tratamiento.
                    </p>
                </div>
            </div>
        </div>
    );
}

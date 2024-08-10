import React from "react";

function ModelDropdown({ value, onChange }) {
    return (
        <div className="model-dropdown flex flex-col items-start">
            <select id="model" value={value} onChange={(e) => onChange(e.target.value)} className="w-full p-2 bg-gray-700 text-white rounded-lg appearance-none">
                <option value="" disabled>Select IA model</option>
                <option value="mlp">Red MLP</option>
                <option value="logistic_regression">Regresión Logística</option>
                <option value="decision_tree">Árboles de Decisión</option>
                <option value="random_forest">Random Forest</option>
                <option value="svm">SVM</option>
                <option value="gbm">GBM</option>
            </select>
        </div>
    );
}

export default ModelDropdown;

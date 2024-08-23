import React, { useState } from "react";
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function Models() {
  const [selectedModels, setSelectedModels] = useState({
    'Logistic Regression': true,
    'Decision Tree': true,
    'Random Forest': true,
    'MLP (Keras)': true,
    'GBM': true,
    'SVM': true,
  });

  const data = {
    labels: ['Accuracy', 'Recall (Sensitivity)', 'Precision', 'F1-Score', 'ROC-AUC'],
    datasets: [
      {
        label: 'Logistic Regression',
        data: [0.9286, 0.8901, 0.9818, 0.9337, 0.9343],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hidden: !selectedModels['Logistic Regression'],
      },
      {
        label: 'Decision Tree',
        data: [0.9938, 0.9890, 1.0000, 0.9945, 0.9945],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hidden: !selectedModels['Decision Tree'],
      },
      {
        label: 'Random Forest',
        data: [0.9907, 0.9835, 1.0000, 0.9917, 0.9918],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hidden: !selectedModels['Random Forest'],
      },
      {
        label: 'MLP (Keras)',
        data: [0.9441, 0.9396, 0.9607, 0.9500, 0.9448],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        hidden: !selectedModels['MLP (Keras)'],
      },
      {
        label: 'GBM',
        data: [0.9938, 0.9890, 1.0000, 0.9945, 0.9945],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        hidden: !selectedModels['GBM'],
      },
      {
        label: 'SVM',
        data: [0.9410, 0.9121, 0.9822, 0.9459, 0.9453],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        hidden: !selectedModels['SVM'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Permitir que el gráfico sea responsivo
    scales: {
      r: {
        suggestedMin: 0.85,
        suggestedMax: 1,
        pointLabels: {
          color: 'rgb(255, 255, 255)', // Aquí puedes cambiar el color de los labels
          font: {
            size: 14, // Cambia el tamaño de la fuente si lo deseas
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 1)', // Color de los labels en la leyenda
          font: {
            size: 14, // Tamaño de la fuente de los labels en la leyenda
          },
        },
        position: 'top',
      },
    },
  };

  const toggleModel = (model) => {
    setSelectedModels({
      ...selectedModels,
      [model]: !selectedModels[model],
    });
  };

  return (
    <div className="performance-chart-container max-w-4xl mx-auto p-4">
      <h2 className="text-center text-white text-2xl font-bold mb-4">Model Performance Comparison</h2>
      <div className="flex justify-center flex-wrap space-x-2 space-y-2 mb-6">
        {Object.keys(selectedModels).map((model) => (
          <button
            key={model}
            onClick={() => toggleModel(model)}
            className={`p-2 border rounded w-40 ${selectedModels[model] ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
          >
            {model}
          </button>
        ))}
      </div>
      <div className="relative h-[400px] md:h-[500px]">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}

import { useState } from "react";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import prediction_background from "assets/images/prediction_background.jpg";
import GenderDropdown from "./GenderDropdown";
import AgeRangeSlider from "./AgeRangeSlider";
import ModelDropdown from "./ModelDropDown";
import Advice from "./Advice";
import Loading from "./Loading";
import Validation from "./Validation";
import { FaStar } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";

function BatchPrediction() {
    const [csvData, setCsvData] = useState([]);
    const [csvDataTo, setCsvDataTo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dataSubmitted, setDataSubmitted] = useState(false);

    // Manejo del archivo CSV
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    setCsvData(result.data);
                },
            });
        }

    };

    const handleCsvSubmit = async () => {
        if (csvData.length === 0) {
            setError("Please upload a valid CSV file.");
            return;
        }

        setLoading(true);
        setError(null);
        let updatedCsvData = []
        console.log(csvData)
        for (let index = 0; index < csvData.length; index++) {
            const element = csvData[index];
            csvData[index]["model"] = "gbm"
            try {
                const response = await fetch("http://localhost:5000/batchpredict", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(csvData[index]),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Error in batch prediction");
                }

                const result = await response.json();

                updatedCsvData.push({
                    ...element,  // Mantén la fila original
                    prediction: result.prediction,  // Agrega el resultado de la predicción
                    probabilidad: result.percentage,  // Agrega la probabilidad
                });


                setDataSubmitted(true);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setError(error.message);
                setLoading(false);
            }

        }

        const csv = Papa.unparse(updatedCsvData);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "prediction_results.csv");
    };

    return (
        <div
            id="prediction-section"
            style={{ backgroundImage: `url(${prediction_background})` }}
        >
            <div className="prediction-main-container">
                <h1 id="prediction-title" className="titleh1">
                    Heart-Attack Prediction System
                </h1>
                <div className="prediction-container">
                    <div className="prediction-inputs">
                        <div>
                            <h3>Upload CSV File</h3>
                            <input type="file" accept=".csv" onChange={handleFileUpload} />
                            <button onClick={handleCsvSubmit} className="submit-csv-button">
                                Submit CSV
                            </button>
                        </div>
                        {loading && <Loading />}
                        {error && <div className="error-message">{error}</div>}
                        {dataSubmitted && (
                            <div className="success-message">
                                CSV file processed successfully!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BatchPrediction;
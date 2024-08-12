import { useState } from "react";
import prediction_background from "assets/images/prediction_background.jpg";
import GenderDropdown from "./GenderDropdown";
import AgeRangeSlider from "./AgeRangeSlider";
import ModelDropdown from "./ModelDropDown";
import Advice from "./Advice";
import Loading from "./Loading"; // Asegúrate de que este componente esté correctamente importado

function Prediction() {
    const [age, setAge] = useState(50);
    const [gender, setGender] = useState(1);
    const [impluse, setImpluse] = useState("");
    const [pressureHight, setPressureHight] = useState("");
    const [pressureLow, setPressureLow] = useState("");
    const [glucose, setGlucose] = useState("");
    const [kcm, setKcm] = useState("");
    const [troponin, setTroponin] = useState("");
    const [model, setModel] = useState("");  // Estado para el modelo de IA
    const [predictionResult, setPredictionResult] = useState("");
    const [percentageResult, setPercentageResult] = useState("");
    const [loading, setLoading] = useState(false); // Estado para manejar la carga
    const [dataSubmitted, setDataSubmitted] = useState(false); // Estado para manejar si los datos han sido enviados
    const [error, setError] = useState(null); // Estado para manejar errores

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Mostrar pantalla de carga
        setDataSubmitted(true); // Indicar que los datos han sido enviados

        const data = {
            age: parseInt(age),
            gender: parseInt(gender),
            impluse: parseInt(impluse),
            pressureHight: parseInt(pressureHight),
            pressureLow: parseInt(pressureLow),
            glucose: parseFloat(glucose),
            kcm: parseFloat(kcm),
            troponin: parseFloat(troponin),
            model: model  // Incluir el modelo seleccionado en los datos enviados al backend
        };

        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Error en la predicción");
            }

            const result = await response.json();
            console.log("Backend Response:", result);

            setTimeout(() => {
                setPredictionResult(result.prediction || "Unknown result");
                setPercentageResult(result.percentage || "N/A");
                setError(null); // Limpiar cualquier error anterior
                setLoading(false);  // Ocultar pantalla de carga después de 5 segundos
            }, 5000);  // Esperar 5 segundos

        } catch (error) {
            console.error("Error:", error);
            setError(error.message); // Guardar el error en el estado
            setLoading(false); // Ocultar pantalla de carga si hay un error
        }
    };

    return (
        <div id="prediction-section" style={{ backgroundImage: `url(${prediction_background})` }}>
            <div className="prediction-main-container">
                <h1 id="prediction-title" className="titleh1">Heart-Attack Prediction System</h1>
                <div className="prediction-container">
                    <div className="prediction-inputs">
                        <div><h3>Complete the data below</h3></div>
                        <div className="row max-w-full w-full overflow-hidden">
                            <AgeRangeSlider setAge={setAge}></AgeRangeSlider>
                            <GenderDropdown setGender={setGender}></GenderDropdown>
                        </div>
                        <ModelDropdown value={model} onChange={setModel}></ModelDropdown>
                        <input className="input-item" type="text" placeholder="Impulse" value={impluse} onChange={(e) => setImpluse(e.target.value)}></input>
                        <input className="input-item" type="text" placeholder="Pressure Hight" value={pressureHight} onChange={(e) => setPressureHight(e.target.value)}></input>
                        <input className="input-item" type="text" placeholder="Pressure Low" value={pressureLow} onChange={(e) => setPressureLow(e.target.value)}></input>
                        <input className="input-item" type="text" placeholder="Glucose" value={glucose} onChange={(e) => setGlucose(e.target.value)}></input>
                        <input className="input-item" type="text" placeholder="Kcm" value={kcm} onChange={(e) => setKcm(e.target.value)}></input>
                        <input className="input-item" type="text" placeholder="Troponin" value={troponin} onChange={(e) => setTroponin(e.target.value)}></input>
                        <button id="submit-button" className="border-4" type="submit" onClick={handleSubmit}>Predict</button>
                    </div>
                    <div className="prediction-output border-4 h-[400px] overflow-hidden flex flex-col justify-center items-center">
                        {!dataSubmitted ? (
                            <div className="text-center">
                                <h2 className="text-2xl text-white">Ready to Predict?</h2>
                                <p className="text-lg text-gray-300">Fill in the form and hit "Predict" to see the results.</p>
                            </div>
                        ) : (
                            loading ? (
                                <Loading />
                            ) : (
                                <>
                                    {error && <div className="error-message">{error}</div>}
                                    <div className="results-container">
                                        <div className="result-prediction">
                                            <h3>Prediction Result</h3>
                                            <span className="result text-white">{predictionResult}</span>
                                        </div>
                                        <div className="result-percentage">
                                            <h3>Percentage Result</h3>
                                            <span className="percentage text-white">{percentageResult}</span>
                                        </div>
                                    </div>
                                    {predictionResult && (
                                        <div className="advice-container">
                                            <div><h3>Advice</h3></div>
                                            <Advice riskLevel={predictionResult.includes("Positive") ? "Positive" : "Negative"} />
                                        </div>
                                    )}
                                </>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prediction;

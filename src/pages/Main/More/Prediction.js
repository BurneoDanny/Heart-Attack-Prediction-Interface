import { useState } from "react";
import prediction_background from "assets/images/prediction_background.jpg";
import GenderDropdown from "./GenderDropdown";
import AgeRangeSlider from "./AgeRangeSlider";
import ModelDropdown from "./ModelDropDown";
import Advice from "./Advice";
import Loading from "./Loading"; 
import Validation from "./Validation"; 

function Prediction() {
    const [age, setAge] = useState(50);
    const [gender, setGender] = useState(1);
    const [impluse, setImpluse] = useState("");
    const [pressureHight, setPressureHight] = useState("");
    const [pressureLow, setPressureLow] = useState("");
    const [glucose, setGlucose] = useState("");
    const [kcm, setKcm] = useState("");
    const [troponin, setTroponin] = useState("");
    const [model, setModel] = useState("");  
    const [predictionResult, setPredictionResult] = useState("");
    const [percentageResult, setPercentageResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [dataSubmitted, setDataSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({}); 

    const validateInputs = () => {
        const validationErrors = {};
        if (!model) validationErrors.model = "Select a prediction model.";
        if (!impluse || impluse < 30 || impluse > 200) validationErrors.impluse = "Enter a valid impulse between 30 and ";
        if (!pressureHight || pressureHight < 70 || pressureHight > 200) validationErrors.pressureHight = "Enter a valid high blood pressure between 70 and";
        if (!pressureLow || pressureLow < 40 || pressureLow > 120) validationErrors.pressureLow = "Enter a valid low blood pressure between 40 and";
        if (!glucose || glucose < 50 || glucose > 300) validationErrors.glucose = "Enter a valid glucose level between 50 and 300";
        if (!kcm || kcm < 2 || kcm > 10) validationErrors.kcm = "Enter a valid KCM value between 2 and 10.";
        if (!troponin || troponin < 0 || troponin > 50) validationErrors.troponin = "Enter a valid troponin level between 0 and 50";

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return; 
        setLoading(true);
        setDataSubmitted(true);

        const data = {
            age: parseInt(age),
            gender: parseInt(gender),
            impluse: parseInt(impluse),
            pressureHight: parseInt(pressureHight),
            pressureLow: parseInt(pressureLow),
            glucose: parseFloat(glucose),
            kcm: parseFloat(kcm),
            troponin: parseFloat(troponin),
            model: model
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
                setError(null);
                setLoading(false);
            }, 5000);
        } catch (error) {
            console.error("Error:", error);
            setError(error.message);
            setLoading(false);
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
                        <Validation errors={{ model: errors.model }} />
                        <ModelDropdown value={model} onChange={setModel}></ModelDropdown>
                        <Validation errors={{ impluse: errors.impluse }} />
                        <input className="input-item" type="text" placeholder="Impulse" value={impluse} onChange={(e) => setImpluse(e.target.value)} />
                        <Validation errors={{ pressureHight: errors.pressureHight }} />
                        <input className="input-item" type="text" placeholder="Pressure Hight" value={pressureHight} onChange={(e) => setPressureHight(e.target.value)} />
                        <Validation errors={{ pressureLow: errors.pressureLow }} />
                        <input className="input-item" type="text" placeholder="Pressure Low" value={pressureLow} onChange={(e) => setPressureLow(e.target.value)} />
                        <Validation errors={{ glucose: errors.glucose }} />
                        <input className="input-item" type="text" placeholder="Glucose" value={glucose} onChange={(e) => setGlucose(e.target.value)} />
                        <Validation errors={{ kcm: errors.kcm }} />
                        <input className="input-item" type="text" placeholder="Kcm" value={kcm} onChange={(e) => setKcm(e.target.value)} />
                        <Validation errors={{ troponin: errors.troponin }} />
                        <div className="gap-container-button">
                        <input className="input-item" type="text" placeholder="Troponin" value={troponin} onChange={(e) => setTroponin(e.target.value)} />
                        <button id="submit-button" className="border-4" type="submit" onClick={handleSubmit}>Predict</button>
                        </div>
                        
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

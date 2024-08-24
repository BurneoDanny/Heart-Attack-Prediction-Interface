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
  const [csvData, setCsvData] = useState([]);
  const [errorCSV, setErrorCSV] = useState(null);
  const [loadingCSV, setLoadingCSV] = useState(false);
  const [dataSubmittedCSV, setDataSubmittedCSV] = useState(false);
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

    try {
      const apiUrl = process.env.REACT_APP_API_KEY;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(csvData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error in batch prediction");
      }

      const result = await response.json();
      console.log("Batch Backend Response:", result);

      // Crear un nuevo archivo CSV con los resultados
      const updatedCsvData = csvData.map((row) => {
        const predictionResult = result.find((res) => res.id === row.id);
        return {
          ...row,
          prediction: predictionResult ? predictionResult.prediction : "N/A",
          probabilidad: predictionResult
            ? predictionResult.probabilidad
            : "N/A",
        };
      });

      const csv = Papa.unparse(updatedCsvData);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "prediction_results.csv");

      setDataSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      setLoading(false);
    }
  };
  const validateInputs = () => {
    const validationErrors = {};
    if (!model) validationErrors.model = "Select a prediction model.";
    if (!impluse || impluse < 25 || impluse > 220)
      validationErrors.impluse = "Enter a valid impulse between 25 and 220";
    if (!pressureHight || pressureHight < 70 || pressureHight > 250)
      validationErrors.pressureHight =
        "Enter a valid high blood pressure between 70 and 250";
    if (!pressureLow || pressureLow < 30 || pressureLow > 150)
      validationErrors.pressureLow =
        "Enter a valid low blood pressure between 30 and 150";
    if (!glucose || glucose < 30 || glucose > 6200)
      validationErrors.glucose =
        "Enter a valid glucose level between 30 and 620";
    if (!kcm || kcm < 0 || kcm > 520)
      validationErrors.kcm = "Enter a valid KCM value between 0 and 520";
    if (!troponin || troponin < 0 || troponin > 9)
      validationErrors.troponin =
        "Enter a valid troponin level between 0 and 9";

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
      model: model,
    };

    try {
      const apiUrl = process.env.REACT_APP_API_KEY;
      const response = await fetch(`${apiUrl}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // try {
      //   const response = await fetch("http://localhost:5000/predict", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   });

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

  const handleBestModelSelection = () => {
    setModel("gbm");
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
              <h3>Complete the data below</h3>
            </div>
            <div className="row max-w-full w-full overflow-hidden">
              <AgeRangeSlider setAge={setAge}></AgeRangeSlider>
              <GenderDropdown setGender={setGender}></GenderDropdown>
            </div>
            <div className="bestmodel w-full flex items-center mb-4">
              <div className="flex-grow">
                <Validation errors={{ model: errors.model }} />
                <ModelDropdown
                  value={model}
                  onChange={setModel}
                  className="w-full"
                />
              </div>
              <button
                onClick={handleBestModelSelection}
                className="ml-2 p-2 bg-gray-800 rounded text-white"
                data-tooltip-id="best-tooltip"
              >
                <FaStar />
              </button>
            </div>
            <Validation errors={{ impluse: errors.impluse }} />
            <input
              className="input-item"
              type="text"
              placeholder="Heart Rate (BPM)"
              value={impluse}
              onChange={(e) => setImpluse(e.target.value)}
            />
            <Validation errors={{ pressureHight: errors.pressureHight }} />
            <input
              className="input-item"
              type="text"
              placeholder="Pressure Hight (mmHg)"
              value={pressureHight}
              onChange={(e) => setPressureHight(e.target.value)}
            />
            <Validation errors={{ pressureLow: errors.pressureLow }} />
            <input
              className="input-item"
              type="text"
              placeholder="Pressure Low (mmHg)"
              value={pressureLow}
              onChange={(e) => setPressureLow(e.target.value)}
            />
            <Validation errors={{ glucose: errors.glucose }} />
            <input
              className="input-item"
              type="text"
              placeholder="Glucose (mg/dL)"
              value={glucose}
              onChange={(e) => setGlucose(e.target.value)}
            />
            <Validation errors={{ kcm: errors.kcm }} />
            <input
              className="input-item"
              type="text"
              placeholder="Kcm (ng/mL)"
              value={kcm}
              onChange={(e) => setKcm(e.target.value)}
            />
            <Validation errors={{ troponin: errors.troponin }} />
            <div className="gap-container-button">
              <input
                className="input-item"
                type="text"
                placeholder="Troponin (ng/mL)"
                value={troponin}
                onChange={(e) => setTroponin(e.target.value)}
              />
              <button
                id="submit-button"
                className="border-4"
                type="submit"
                onClick={handleSubmit}
              >
                Predict
              </button>
            </div>
          </div>
          <div className="prediction-output border-4 h-[400px] overflow-hidden flex flex-col justify-center items-center">
            {!dataSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl text-white">Ready to Predict?</h2>
                <p className="text-lg text-gray-300">
                  Fill in the form and hit "Predict" to see the results.
                </p>
              </div>
            ) : loading ? (
              <Loading />
            ) : (
              <>
                {error && <div className="error-message">{error}</div>}
                <div className="results-container">
                  <div className="result-prediction">
                    <h3>Prediction Result</h3>
                    <span className="result text-white">
                      {predictionResult}
                    </span>
                  </div>
                  <div className="result-percentage">
                    <h3>Percentage Result</h3>
                    <span className="percentage text-white">
                      {percentageResult}
                    </span>
                  </div>
                </div>
                {predictionResult && (
                  <div className="advice-container">
                    <div>
                      <h3>Advice</h3>
                    </div>
                    <Advice
                      riskLevel={
                        predictionResult.includes("Positive")
                          ? "Positive"
                          : "Negative"
                      }
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <ReactTooltip
        id="best-tooltip"
        place="right"
        content="Click to select Best Model"
      />
    </div>
  );
}

export default Prediction;

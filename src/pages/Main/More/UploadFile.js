import { useState } from "react";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import prediction_background from "assets/images/wallpapercsv.jpg";
import Loading from "./Loading";
import "./stylesheetbatch.css";
function BatchPrediction() {
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataSubmitted, setDataSubmitted] = useState(false);

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
    let updatedCsvData = [];

    for (let index = 0; index < csvData.length; index++) {
      const element = csvData[index];
      csvData[index]["model"] = "gbm";
      try {
        const baseApiUrl = process.env.REACT_APP_API_KEY;
        const apiUrl = `${baseApiUrl}/batchpredict`;
        const response = await fetch(apiUrl, {
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
          ...element,
          prediction: result.prediction,
          probabilidad: result.percentage,
        });

        setDataSubmitted(true);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
        setLoading(false);
        return;
      }
    }

    const csv = Papa.unparse(updatedCsvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "prediction_results.csv");
    setLoading(false);

    setTimeout(() => {
      setCsvData([]);
      setDataSubmitted(false);
      setError(null);
    }, 10000);
  };

  return (
    <div
      id="batch-prediction-section"
      style={{ backgroundImage: `url(${prediction_background})` }}
      className="flex justify-center items-center h-screen"
    >
      <div className="batch-prediction-wrapper flex justify-center items-center w-full">
        <div className="w-full max-w-md">
          <h1 id="batch-prediction-title" className="titleh1 text-center mb-8">
            Heart-Attack Prediction System
          </h1>
          <div className="batch-prediction-content border-4 h-[400px] flex flex-col justify-center items-center p-8 bg-black bg-opacity-50 rounded-md">
            {!dataSubmitted ? (
              <>
                <h3 className="text-white mb-4 text-xl">Upload CSV File</h3>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="mb-4 text-white"
                />
                <button
                  onClick={handleCsvSubmit}
                  className="submit-csv-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                >
                  Submit CSV
                </button>
              </>
            ) : loading ? (
              <Loading />
            ) : (
              <div className="text-center">
                <div className="success-message text-green-500 mb-4 text-lg">
                  CSV file processed successfully! Check your downloads for the
                  results.
                </div>
                <div className="text-white text-sm">
                  The page will reset in 10 seconds...
                </div>
              </div>
            )}
            {error && (
              <div className="error-message text-red-500 mt-4">{error}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchPrediction;

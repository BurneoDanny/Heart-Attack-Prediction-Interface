import prediction_background from "assets/images/prediction_background.jpg";

function Prediction(){
    return(<div id="prediction-section" style={{ backgroundImage: `url(${prediction_background})` }}>
        <div className="prediction-main-container">
            <h1 id = "prediction-title" className= "titleh1" >Hear-Attack Prediction System</h1>
            <div className="prediction-container">
            <div className="prediction-inputs">
                <div><h3>Complete the data below</h3></div>
                <div className="row">
                <input className="input-item" type="text" placeholder="Age"></input>
                <input className="input-item" type="text" placeholder="Gender"></input>
                </div>
                <input className="input-item" type="text" placeholder="Impulse"></input>
                <input className="input-item" type="text" placeholder="Pressure Hight"></input>
                <input className="input-item" type="text" placeholder="Pressure Low"></input>
                <input className="input-item" type="text" placeholder="Glucose"></input>
                <input className="input-item" type="text" placeholder="Kcm"></input>
                <input className="input-item" type="text" placeholder="Troponin"></input>
                <button id="submit-button" type="submit" >Predict</button>
            </div>
            <div className="prediction-output">
                <div className="results-container">
                    <div className="result-prediction">
                        <h3>Prediction Result</h3>
                        <span>You are in Risk of suffer heart-attack</span>

                    </div>
                    <div className="result-percentage">
                    <h3>Percentage Result</h3>
                    <span>You have 50% of heart-attack</span>
                    </div>
                </div>
                <div className="advice-container">
                    <div><h3>Advice</h3></div>
                    <div><span>yrdyrfyugiuohtfygiuhygfsefsfsfsdfadasdasdasaddfwegqwfgsdjqed</span></div>
                </div>

            </div>
            </div>
        </div>
    </div>)
}

export default Prediction;
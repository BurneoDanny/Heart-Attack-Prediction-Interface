import React from "react";

function Validation({ age, impluse, pressureHight, pressureLow, glucose, kcm, troponin, model }) {
    let errors = {};

    if (!age || age < 1 || age > 120) {
        errors.age = "Please enter a valid age between 1 and 120.";
    }
    if (!impluse || impluse < 30 || impluse > 200) {
        errors.impluse = "Please enter a valid impulse between 30 and 200.";
    }
    if (!pressureHight || pressureHight < 70 || pressureHight > 200) {
        errors.pressureHight = "Please enter a valid high blood pressure between 70 and 200.";
    }
    if (!pressureLow || pressureLow < 40 || pressureLow > 120) {
        errors.pressureLow = "Please enter a valid low blood pressure between 40 and 120.";
    }
    if (!glucose || glucose < 50 || glucose > 300) {
        errors.glucose = "Please enter a valid glucose level between 50 and 300 mg/dL.";
    }
    if (!kcm || kcm < 2 || kcm > 10) {
        errors.kcm = "Please enter a valid KCM value between 2 and 10.";
    }
    if (!troponin || troponin < 0 || troponin > 50) {
        errors.troponin = "Please enter a valid troponin level between 0 and 50 ng/mL.";
    }
    if (!model) {
        errors.model = "Please select a prediction model.";
    }

    return (
        <div>
            {Object.keys(errors).map((key) => (
                <p key={key} className="text-red-500">{errors[key]}</p>
            ))}
        </div>
    );
}

export default Validation;

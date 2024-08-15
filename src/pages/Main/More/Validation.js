import React from "react";

function Validation({ age, impluse, pressureHight, pressureLow, glucose, kcm, troponin, model, gender }) {
    let errors = {};
    let hasErrors = false;

    if (!age || age < 1 || age > 120) {
        errors.age = "Please enter a valid age between 1 and 120.";
        hasErrors = true;
    }
    if (!impluse || impluse < 30 || impluse > 200) {
        errors.impluse = "Please enter a valid impulse between 30 and 200.";
        hasErrors = true;
    }
    if (!pressureHight || pressureHight < 70 || pressureHight > 200) {
        errors.pressureHight = "Please enter a valid high blood pressure between 70 and 200.";
        hasErrors = true;
    }
    if (!pressureLow || pressureLow < 40 || pressureLow > 120) {
        errors.pressureLow = "Please enter a valid low blood pressure between 40 and 120.";
        hasErrors = true;
    }
    if (!glucose || glucose < 50 || glucose > 300) {
        errors.glucose = "Please enter a valid glucose level between 50 and 300 mg/dL.";
        hasErrors = true;
    }
    if (!kcm || kcm < 2 || kcm > 10) {
        errors.kcm = "Please enter a valid KCM value between 2 and 10.";
        hasErrors = true;
    }
    if (!troponin || troponin < 0 || troponin > 50) {
        errors.troponin = "Please enter a valid troponin level between 0 and 50 ng/mL.";
        hasErrors = true;
    }
    if (!model) {
        errors.model = "Please select a prediction model.";
        hasErrors = true;
    }
    if (!gender || gender === "") {
        errors.gender = "Please select a gender.";
        hasErrors = true;
    }

    return { errors, hasErrors };
}

export default Validation;

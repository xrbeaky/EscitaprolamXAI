import {currentPatient, meanGENDEP, sdGENDEP, modelCoefficients} from "./predictor.js";

let currentShapValues;
//https://github.com/slundberg/shap/blob/master/shap/explainers/_linear.py line 385
export function explain(data)
{
    let output = [];
    for(let i = 0; i < data.length; i++){
        output[i] = ((data[i] - meanGENDEP[i]) / sdGENDEP[i]) * modelCoefficients[i];
    }
    currentShapValues = output;
    return output;
}


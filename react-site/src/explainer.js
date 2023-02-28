let currentShapValues;

//https://github.com/slundberg/shap/blob/master/shap/explainers/_linear.py line 385
export function explain()
{
    let output = [];
    for(let i = 0; i < currentPatientData.length; i++){
        output[i] = ((currentPatientData[i] - meanGENDEP[i]) / sdGENDEP[i]) * modelCoefficients[i];
    }
    currentShapValues = output;
    return output;
}


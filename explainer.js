let currentShapValues;

let max = [2,2,2,2,52,2,2,2,2,2,2,2,2,2,2,2,2]

//https://github.com/slundberg/shap/blob/master/shap/explainers/_linear.py line 385
function explain()
{
    let output = [];
    for(let i = 0; i < currentPatientData.length; i++){
        output[i] = ((currentPatientData[i] - meanGENDEP[i]) / sdGENDEP[i]) * modelCoefficients[i];
    }
    currentShapValues = output;
    return output;
}


//estimated middle value for all variables
//look at papers to find better evidence to estimate the mean
//contact iniesta for initial data or the mean for each predictor
let currentShapValues;

//https://github.com/slundberg/shap/blob/master/shap/explainers/_linear.py line 385
function explain()
{
    let output = [];
    for(let i = 0; i < currentPatientData.length; i++){
        output[i] = (currentPatientData[i] - meanGENDEP[i]) * modelCoefficients[i];
    }
    currentShapValues = output;
    return output;
}


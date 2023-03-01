//Clinical Variables:
//appetiteDimension = 0;
//bdi_16 = 0; //0-2
//hrsd_13 = 0; //0-2
//interestActivityDimension = 0; 
//hrsdTotal = 0; //0-52
//scanFatigabilityDimension = 0; 

//Genetic Variables (0-2)
//rs1392611
//rs10812099 
//rs1891943
//rs151139256
//rs11002001
//rs62182022
//rs28373080
//rs7757702
//rs76557116
//rs9557363
//rs2704022

/*modelPredictors = [appetiteDimension,bdi_16,rs62182022,interestActivityDimension,hrsdTotal,scanFatigabilityDimension,rs1392611,rs10812099,
rs1891943,hrsd_13,rs9557363,rs151139256,rs28373080,rs7757702,rs76557116,rs11002001,rs2704022];*/

const offset = -0.018595926;
export const modelCoefficients = [-0.036970804,-0.037494038,-0.003203991,-0.033419381,-0.035164398,-0.015327153,-0.029090814,-0.032467316,
    -0.017888137,-0.037494134,0.032473920,-0.019367106,0.020377797,0.017466538,0.032473995,-0.021702248,0.039596562];
export const meanGENDEP = [0.8357628,1.6223776,1.5734266,0.6386217,24.1856829,2.1748252,1.8041958,1.8181818,1.7342657,1.6223776,1.2377622,1.8671329,
    1.4195804,1.2027972,1.2377622,1.8671329,1.0769231];
export const sdGENDEP = [0.6302054,0.9329961,0.5628087,0.7176169,5.8649321,0.8249173,0.4321375,0.4218731,0.4886176,0.9329961,0.6813206,0.3406242,0.6756592,
    0.6875087,0.6813206,0.3607067,0.7128293];

export let currentPatientData;

function subtractArray(a1, a2){
    if(a1.length === a2.length){
        let output = [];
        for(let i = 0; i < a1.length; i++){
            output[i] = a1[i] - a2[i];
        }
        return output;
    }
    else{
        console.log("Arrays not of equal length");
        return null;
    }
}
function divideArray(a1, a2){
    if(a1.length === a2.length){
        let output = [];
        for(let i = 0; i < a1.length; i++){
            output[i] = a1[i] / a2[i];
        }
        return output;
    }
    else{
        console.log("Arrays not of equal length");
        return null;
    }
}
function multiplyArray(a1, a2){
    if(a1.length === a2.length){
        let output = [];
        for(let i = 0; i < a1.length; i++){
            output[i] = a1[i] * a2[i];
        }
        return output;
    }
    else{
        console.log("Arrays not of equal length");
        return null;
    }
}
function sumArray(a1){
    let output = 0;
    for (let i = 0; i < a1.length; i++){
        output += a1[i];
    }
    return output;
}
function exp(num){
    return Math.E ** num;
}


export function predictRemission(predictors){
    let predictorsStd = divideArray(subtractArray(predictors, meanGENDEP), sdGENDEP);
    let logit = offset + sumArray(multiplyArray(predictorsStd, modelCoefficients));
    let remission = exp(logit) /  (1 + exp(logit));
    return remission;
}

function csvToArrays(str, delimiter = ",") {
   let output = [];
   let rows = str.split("\n");
   for(let i = 0; i < rows.length; i++){
        let intArray = new Array();
        let strArray = rows[i].replace('\r', "").split(",");
        for(let c = 0; c < strArray.length; c++){
            intArray[c] = parseInt(strArray[c]);
        }
        output[i] = intArray;
   }
   currentPatientData = output;
}

function csvToArray(str, delimiter = ",") {
    let output = [];
    let strArray = str.split(",");
    for(let c = 0; c < strArray.length; c++){
        output[c] = parseInt(strArray[c]);
    }
    currentPatientData = output;
}

function downloadPatientPredictions(){
    return("data:text/csv;charset=utf-8," + predictRemission(currentPatientData));
}




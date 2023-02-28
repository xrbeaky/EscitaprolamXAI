

//generate normally distributed values
function generatePatient(amount){
    let patientData = [];
    for (let i = 0; i < amount; i++){
        patientData[0] = randomInt(0, 2); //appetiteDimension ? (0-2)
        patientData[1] = randomInt(0, 2); //bdi-16 0-2
        patientData[2] = randomInt(0, 2); //rs62182022 0-2
        patientData[3] = randomInt(0, 2); //interestActivityDimension ? (0-2)
        patientData[4] = randomInt(0,52); //hrsdTotal 0-52
        patientData[5] = randomInt(0, 2); //scanFatigabilityDimension ? (0-2)
        patientData[6] = randomInt(0, 2); //rs1392611
        patientData[7] = randomInt(0, 2); //rs10812099
        patientData[8] = randomInt(0, 2); //rs1891943
        patientData[9] = randomInt(0, 2); //hrsd_13 0-2
        patientData[10] = randomInt(0, 2); //rs9557363
        patientData[11] = randomInt(0, 2); //rs151139256
        patientData[12] = randomInt(0, 2); //rs28373080
        patientData[13] = randomInt(0, 2); //rs7757702
        patientData[14] = randomInt(0, 2); // rs76557116
        patientData[15] = randomInt(0, 2); // rs11002001
        patientData[16] = randomInt(0, 2); // rs2704022
    }
    return patientData;
}

function randomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysToCSV(data)
{
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function(rowArray){
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    return csvContent;
}
function arrayToCSV(data)
{
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += data.join(",");
    return csvContent;
}

function downloadPatientData(){
    return(arrayToCSV(generatePatient(1)));
}
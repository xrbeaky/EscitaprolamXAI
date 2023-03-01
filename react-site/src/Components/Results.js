import React from "react";
import {predictRemission} from "../predictor.js"
import { formResponses } from "./Input.js";
export let currentPredictors = [2, 2 , 2, 2, 53, 2, 2, 2, 2 , 2, 2, 2, 2, 2, 2, 2, 2];
export default function Results(){

    //appetite,BDI_changes_sleep,rs62182022,interest_activity_dimension,HRSD_total,SCAN_fatigability,rs1392611,rs10812099,
    //rs1891943,HRSD_13,rs9557363,rs151139256,rs28373080,rs7757702,rs76557116,rs11002001,rs2704022
    function GetPredictors(){
        currentPredictors = [formResponses[20], formResponses[17], formResponses[26], formResponses[19], formResponses.slice(0,17).reduce((a,b) => a+b,0),  formResponses[18], formResponses[21]
        ,formResponses[22], formResponses[23], formResponses[12], formResponses[30], formResponses[24], formResponses[27], formResponses[28],
        formResponses[29], formResponses[25], formResponses[31]];
        return currentPredictors;
    }

    let prediction = (predictRemission(currentPredictors) * 100);
    prediction = prediction - (prediction % 1);

    
    return(
        <main>
            <h1 className = "main-title">Explanation</h1>
            <div className = "main-container">
                <h1>{prediction + "% chance at remission."}</h1>
            </div>
        </main>
            
    )
}
import React from "react";
import ArcProgress from 'react-arc-progress';
import {predictRemission} from "../predictor.js"
import { formResponses } from "./Input.js";
export let currentPredictors = [];
export default function Results(){

    //appetite,BDI_changes_sleep,rs62182022,interest_activity_dimension,HRSD_total,SCAN_fatigability,rs1392611,rs10812099,
    //rs1891943,HRSD_13,rs9557363,rs151139256,rs28373080,rs7757702,rs76557116,rs11002001,rs2704022
    function GetPredictors(){
        currentPredictors = [formResponses[20], formResponses[17], formResponses[26], formResponses[19], formResponses.slice(0,17).reduce((a,b) => a+b,0),  formResponses[18], formResponses[21]
        ,formResponses[22], formResponses[23], formResponses[12], formResponses[30], formResponses[24], formResponses[27], formResponses[28],
        formResponses[29], formResponses[25], formResponses[31]];
        return currentPredictors;
    }

    let prediction = (predictRemission(GetPredictors()) * 100);
    prediction = prediction - (prediction % 1);

    
    return(
        <main>
            <h1 className = "main-title">Results</h1>
            <div className = "main-container">
                <h2 className = "main-h2">Your chance of remission after 12 weeks on escitalopram:</h2>
                <div className = "arc-container">
                    <ArcProgress progress = {prediction / 100} textStyle={{ size: "100px", color: "#FFFFFF", font: "Oxygen", x: 250, y: 200}}size = {500} thickness = {35} fillColor = "#C9B0F9" text ={prediction + "%"} lineCap = "square" arcStart={180} arcEnd = {360} speed = {-75}/>
                </div> 
            </div>
        </main>
            
    )
}
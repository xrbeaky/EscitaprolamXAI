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
                    <ArcProgress progress = {prediction / 100} textStyle={{ size: "100px", color: "#FFFFFF", font: "Oxygen", x: 250, y: 200}}size = {500} thickness = {35} fillColor = "#C9B0F9" emptyColor = "#313236" text ={prediction + "%"} lineCap = "square" arcStart={180} arcEnd = {360} speed = {-75}/>
                </div> 
                <p className = "results-p">This program uses an <u>elastic net logistic regression</u> model trained on data from the Genome-based Therapeutic Drugs for Depression (GENDEP) study <a href ="https://cordis.europa.eu/project/id/503428/reporting">(Institutue of Psychiatry, 2008)</a>, a large-scale human pharmacogenomics study focused on identifying biomarkers for antidepressant response.</p>
                <p className = "results-p">The model predicted remission in the training dataset with an area under curve (AUC) of 0.77, sensitivity of 0.67, specificity of 0.71 <a href = "https://www.nature.com/articles/s41598-018-23584-z">(Iniesta et al., 2018).</a></p>
                <hr className = "main-divider"/>
                <h2 style = {{margin:"auto", textAlign : "center", paddingBottom: "15px"}}>What next?</h2>
                <p className = "results-p">About 40 to 60 out of 100 people notice symptom reduction after 8 weeks on any given antidepressant <a href = "https://www.ncbi.nlm.nih.gov/books/NBK361016/">(Informed Health, 2020)</a>. This model with an AUC of 0.77 is, generally, more reliable than the average prescription.</p>
                <p className = "results-p">This model serves only as an aid; a clinician's assessment should be the primary factor in your treatment decision.</p>
                <p className = "results-p">Note: model does consider family medical history. Patients with family history of escitalopram response/non-response may see different results. Also, symptoms after 12 weeks are not represented by this prediction.</p> 
                <hr className = "main-divider"/>
                <h2 style = {{margin:"auto", textAlign : "center", paddingBottom: "15px"}}>Risks</h2>
                <p className = "results-p">Some people may experience side effects of varying intensities. Side effects may improve over time. Consult your clinican before making a decision.</p>
                <p className = "results-p">Common side effects include: nausea, headaches, dry mouth, insomnia, drowsiness.</p>
                <p className = "results-p">Serious side effects (book appointment with doctor): weight gain/loss, menstrual changes, long cramps, coughing up blood, bloody stool, high temperature and agitation, worsening bruises.</p>
            </div>
        </main>
            
    )
}
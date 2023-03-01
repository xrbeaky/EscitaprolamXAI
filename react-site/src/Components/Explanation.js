import React from "react";
import {currentPredictors} from "./Results.js";
import {explain} from "../explainer.js"
import SimpleListVisualizer from "../Visualizers/SimpleListVisualizer.jsx";
import BarChart from "./BarChart.js";
import { predictRemission } from "../predictor.js";

export default function Explanation(){
    let prediction = (predictRemission(currentPredictors) * 100);
    prediction = prediction - (prediction % 1);
    let explanation = explain(currentPredictors , 1);

    let barChartExplanations = [
        {label : 'Appetite Dimension', value:explanation[0]},
        {label : 'Changes in Sleep (BDI)', value:explanation[1]},
        {label : 'rs62182022', value:explanation[2]},
        {label : 'Interest-Activity Dimension', value:explanation[3]},
        {label : 'HRSD Total', value:explanation[4]},
        {label : 'Fatigability (SCAN)', value:explanation[5]},
        {label : 'rs1392611', value:explanation[6]},
        {label : 'rs10812099', value:explanation[7]},
        {label : 'rs1891943', value:explanation[8]},
        {label : 'HRSD Item #13', value:explanation[9]},
        {label : 'rs9557363', value:explanation[10]},
        {label : 'rs151139256', value:explanation[11]},
        {label : 'rs28373090', value:explanation[12]},
        {label : 'rs7757702', value:explanation[13]},
        {label : 'rs76557116', value:explanation[14]},
        {label : 'rs11002001', value:explanation[15]},
        {label : 'rs2704022', value:explanation[16]}
    ];

    let features =  {
        feature1: { effect: explanation[0] },
        feature2: { effect: explanation[1] },
        feature3: { effect: explanation[2] },
        feature4: { effect: explanation[3] },
        feature5: { effect: explanation[4] },
        feature6: { effect: explanation[5] },
        feature7: { effect: explanation[6] },
        feature8: { effect: explanation[7] },
        feature9: { effect: explanation[8] },
        feature10: { effect: explanation[9] },
        feature11: { effect: explanation[10] },
        feature12: { effect: explanation[11] },
        feature13: { effect: explanation[12] },
        feature14: { effect: explanation[13] },
        feature15: { effect: explanation[14] },
        feature16: { effect: explanation[15] },
        feature17: { effect: explanation[16] }
       
      }

    let featureNames = {
        feature1: "Appetite Dimension",
        feature2: 'Changes in Sleep (BDI)',
        feature3: "rs62182022",
        feature4: "Interest-Activity Dimension",
        feature5: "HRSD Total",
        feature6: "Fatigability (SCAN)",
        feature7: "rs1392611",
        feature8: "rs10812099",
        feature9: "rs1891943",
        feature10: "HRSD Item #13",
        feature11: "rs9557363",
        feature12: "rs151139256",
        feature13: "rs28373090",
        feature14: "rs7757702",
        feature15: "rs76557116",
        feature16: "rs11002001",
        feature17: "rs2704022"
      }

    return(
        <main>
            <h1 className = "main-title">Explanation</h1>
            <div className = "main-container">
                <h1 className = "exp-h1" >{prediction + "% chance at remission."}</h1>
                <div className = "explanation">
                    <SimpleListVisualizer features = {features} featureNames = {featureNames}/>
                </div>     
            </div>
        </main>
    )
}
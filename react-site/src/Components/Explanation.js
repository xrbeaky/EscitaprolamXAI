import React from "react";
import {currentPredictors} from "./Results.js";
import {explain} from "../explainer.js"

export default function Explanation(){
    return(
        <h1>{explain(currentPredictors)}</h1>
    )
}
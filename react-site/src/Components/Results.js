import React from "react";
import {predictRemission} from "../predictor.js"

const currentPredictors = [2,1,2,2,38,0,1,0,2,2,1,2,0,2,1,2,0]

export default function Results(){
    return(
        <h1>{predictRemission(currentPredictors)}</h1>
    )
}
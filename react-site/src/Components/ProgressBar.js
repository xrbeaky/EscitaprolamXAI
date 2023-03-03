import { color } from 'd3';
import React from 'react';

export function ProgressBar(props) {
    const progressWidth = `${Math.abs(props.input) * 0.5}%`;
    let right = props.input > 0;
    
    return (
        <div className={right ? "progress-bar-right" : "progress-bar-left"}>
            <div className={right ? "progress-right" : "progress-left"} style={{ width: progressWidth, marginLeft:"50%"}}></div>
        </div>
    );
}




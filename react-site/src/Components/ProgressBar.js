import { color } from 'd3';
import React from 'react';

export function ProgressBar(props) {
    let progressWidth;
    progressWidth = (props.input * 0.5) + "$";

    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: progressWidth, marginLeft:"50%"}}></div>
        </div>
    );
}




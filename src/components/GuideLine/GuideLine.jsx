import React from 'react';
import "./GuideLine.css";

function GuideLine(props) {
    return <div className="guide-line_wrapper">
        <div className="guide-line_number">
            {props.num}
        </div>
        <p className="guide-line_description">{props.text}</p>
    </div>
}

export default GuideLine;
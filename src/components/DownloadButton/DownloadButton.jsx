import React from 'react';
import './DownloadButton.css';
function DownloadButton(props) {
    return <button onClick={props.clickHandler} disabled={!props.isDownloadable} className="download-button">Tải xuống</button>
}

export default DownloadButton;
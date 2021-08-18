import React from 'react';

function DownloadButton(props) {
    return <button onClick={props.clickHandler} disabled={!props.isDownloadable}>Tải xuống</button>
}

export default DownloadButton;
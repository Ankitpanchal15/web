import React from 'react';

const ProgressBlock = (props) => {
    return (
        <div className="col-sm-6">
        <div className="progress-block card p-3">
        <h6 className="fs-5">{props.title}</h6>
        <div className="progress">
        <div style={{width:`${props.progress}%`}} className="progress-bar" role="progressbar" ></div>
        </div>
        </div>
        </div>
    )
}

export default ProgressBlock;
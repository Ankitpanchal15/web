import React from 'react';

const GetInTouchBlock = (props)=> {
    return (
        <div className="bg-white p-2  min-he card text-center git-card">
        <div className="icon mb-3">
            {props.icon}
        </div>  
        <h3 className="fs-6 display-4 mb-3">{props.text}</h3>
        <h4 className="fs-6">{props.heading}</h4>
       
        </div>
    )
}

export default GetInTouchBlock; 
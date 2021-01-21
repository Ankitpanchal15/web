import React from 'react';

const MapBlock = (props) => {
    return (
        <div className="wrapper">
        <iframe title="Map" 
        src={props.src}
         width="600" 
         height="450" 
         frameBorder="0" 
         style={{border:"0", width:"100%"}} 
         allowFullScreen="" 
         aria-hidden="false" tabIndex="0" />
        </div>
    )
}

export default MapBlock;
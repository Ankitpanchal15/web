import React from 'react';
const ServiceCard = (props) => {
    return(
        <>
        <div className="col-md-4 col-sm-6 ">
        <div className="service-card-wrap">
        <div className="service-card">
            <div className="front-card"
                style ={{backgroundImage:`url(${props.img})`}}
            >
                <h3>{props.title}</h3>
            </div>
            <div className="back-card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            </div>
        </div>
        </div>
    </div>  

        </>
    )
}

export default ServiceCard;
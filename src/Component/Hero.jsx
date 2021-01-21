import React from 'react';

const Hero = (props) => {
    return (
        <>
             <div className="hero-section d-flex align-items-center " style={{backgroundImage:`url(${props.img})`}} >
                  <div className="container " >
                    <div className="hero-content ">
                        <h2 className=" text-center display-6">{props.topHeading}</h2>
                        <h3 className=" text-center size-lg display-0 text-shadow">{props.heading}</h3>
                    </div>
                </div> 
           </div>
        </>
    )
}

export default Hero;
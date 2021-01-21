import React from 'react';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import ServiceData from './SData';

const Service = () => {
    return (
        <>
        <div id="service" className="services-section py-5">
            <div className="container">
            <SectionHeading 
            Heading="My Services" 
            SmallHeading="What i Do" 
             />
                <div className="service-list-group">
                <div className="row g-4">

                    {
                        ServiceData.map((val)=> {
                         return   <ServiceCard
                            key = {val.id}
                            img={val.img}
                            title={val.title}
                            content={val.content}  />
                        })
                    }



                   
                </div>
                </div>

            </div>

        </div>
       
           
        </>
    )
}

export default Service;
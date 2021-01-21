import React from 'react';
import SectionHeading,{SmallHeading} from './SectionHeading'; 

import GetInTouchBlock from './GetInTouchBlock';
import {GetInTouch} from './SData';
import MapBlock from './MapBlock'

const MapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29279.54272917845!2d73.2829409478412!3d23.46252619039613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395df035f8e1c0eb%3A0x658fe8b26fb2369b!2sModasa%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1611207762036!5m2!1sen!2sin"

const Contact = () => {
    return (
        <>
           <div className="contact-section py-5">
               <div className="container">
               <SectionHeading 
                SmallHeading ="Say Hello" 
                Heading ="Contact" 
                />
                    <div className="location-wrap mb-5">
                    <SmallHeading text="Location"/>
                        <MapBlock src= {MapURL}/>
                    </div>

                    <div className="get-in-touch">
                    <SmallHeading text="Get In Touch"/>
                    <div className="row gy-4">
                    
                    {
                       GetInTouch.map((val)=>{
                           return <div className="col-md-4">
                           <GetInTouchBlock
                            key= {val.id}
                            icon={<val.icon />}
                            heading={val.heading}
                            text={val.text}
                           />
                           </div>
                       }) 
                    }
  
                    </div>
                    </div>
               </div>
           </div>
        </>
    )
}

export default Contact;
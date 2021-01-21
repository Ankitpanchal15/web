import React from 'react';

const SectionHeading = (props) => {
    return (
        <div className="section-heading text-center mb-5">
            <h4 className="display-5 text-uppercase small fs-5">{props.SmallHeading}</h4>
            <h2 className="text-uppercase fw-bold">{props.Heading}</h2>
        </div>
    )
};

const SmallHeading = (props) => {
    return (   <h5 className="fs-4 mb-4 display-3">
         {props.text}
    </h5>
    )
}


export default SectionHeading;
export {SmallHeading}
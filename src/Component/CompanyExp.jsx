import React from 'react';
import {NavLink} from 'react-router-dom';


const CompanyExp = (props) => {
    return (
    
        <div className="card company-card  bg-white p-3">
        
        <div className="row align-items-center">
            <div className="col-sm-8">
            <h4>{props.title} </h4>
            <p>{props.content}</p>
            </div>
            <div className="col-sm-4">
                    <NavLink to={`//${props.logoURL}`} target="_blank" >
                <img  className="c-logo  img-fluid " src={props.logo} alt={props.logoAlt} />
                </NavLink>
            </div>
        </div>
           
       
       
      
        </div>
       
    )
}

export default CompanyExp;
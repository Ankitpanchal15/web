import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import {NavLink} from 'react-router-dom';

const About = (props) => {
    return(
        <>  
            <div className="about-section">
                <div className="container">
                    <div className="about-container bg-white p-4 p-sm-5">
                        <div className="row align-items-center">
                            <div className="col-sm-6 order-2 order-sm-0 "  >
                                <h2 className="header text-uppercase mb-3">{props.Heading}</h2>
                                <div className="description">
                                    <p className="large">{props.Content}</p>
                                </div>
                                <div className="social-icon">
                                    <NavLink to={props.facebook} target="_blank"  ><FacebookIcon /></NavLink>
                                    <NavLink to={props.intagram} target="_blank"  ><InstagramIcon /></NavLink>
                                    <NavLink to={props.github} target="_blank"  ><GitHubIcon /></NavLink>
                                    
                                </div>
                            </div>

                                <div className="col-sm-6 d-flex justify-content-center mb-3 mb-sm-0 ">
                                <div className="image-wrap-main w-100 ">
                                    <div className="image-wrap  ">
                                    <img src={props.img1} 
                                    alt="mypic"
                                    className="img-thumbnai rounded-circle shadow-sm front-img "
                                    />
                                        <img  src={props.img2} 
                                    alt="mypic"
                                    className="img-thumbnai rounded-circle shadow-sm back-img "
                                    />
                                    </div>
                                    </div>
                                   
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
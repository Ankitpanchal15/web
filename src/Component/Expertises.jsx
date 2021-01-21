import React from 'react';
import SectionHeading from '../Component/SectionHeading';
import CompanyExp from './CompanyExp';
import {Skill, Experience} from './SData';
import ProgressBlock from  './ProgressBlock';
import {SmallHeading} from './SectionHeading';

const Expertises = () => {
    return (
    <>
        <div className="expertise-section py-5 bg-mid-gray">
            <div className="container">
            <SectionHeading 
            Heading="MY EXPERTISES" 
            SmallHeading="MY RESUME" 
            />
            <SmallHeading text="My Experience"/>
            <div className="row gy-4 g-0 mb-5">
            { Experience.map((val)=> {
                return <CompanyExp 
                    key = {val.id}
                    logo= {val.logo}
                    logoAlt = {val.logoAlt}
                    logoURL = {val.logoURL}
                    title = {val.title}
                    content= {val.content} 
                    />
            })}   
            </div> 
            <SmallHeading text="My Skills"/>
            <div className="row gy-4 gx-4">
            {Skill.map((val)=> {
                return  <ProgressBlock
                key = {val.id}
                title={val.title}
                progress={val.progress}
            />
            })}
            </div>
            </div>
        </div>
    </>
    )
}

export default Expertises;
import React from 'react';
import {NavLink} from 'react-router-dom';

const BlogItem = (props) => {
    return (
        <div className="card blog-card">
            <NavLink to="/blog">
        <div className="image-wrap  position-relative">
             <img src={props.img} className="card-img-top" alt="Blog" />
             <div className="card-img-overlay d-flex align-items-center justify-content-center">
                 <div className=" flex-wrap text-center">
                 <h4 className="text-center">{props.title}</h4>
                 <p>{props.readTime}</p>
                 </div>
             </div>
        </div>
            <div className="blog-list--desc p-3">
            <p>{props.content} </p>
            <span className="d-block text-center mt-3 fw-bold blog-cat small">Design</span>
            </div>
        </NavLink>
        </div>
    )
}

export default BlogItem;
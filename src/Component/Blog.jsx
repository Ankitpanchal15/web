import React from 'react';
import SectionHeading from '../Component/SectionHeading';
import BlogItem from './BlogItem';
import img1 from '../Image/img-1.jpg';
import img2 from '../Image/img-2.jpg';
import img3 from '../Image/img-4.jpg';

const Blog = () => {
    return (
        <>
           <div className="blog-section py-5">
               <div className="container">
                <SectionHeading 
                Heading="MY ARTICLES" 
                SmallHeading="Blog" 
                />

                <div className="row gy-4">
                    <div className="col-sm-6 col-md-4">
                       <BlogItem
                        img ={img1}
                        title="Web Design"
                        content="10 tips for drawing with coloured pencils"
                        readTime = "2 Min"
                        />
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <BlogItem
                        img ={img2}
                        title="Web Design"
                        content="10 tips for drawing with coloured pencils"
                        readTime = "2 Min"
                        />
                    </div>

                    <div className="col-sm-6 col-md-4">
                       <BlogItem
                        img ={img3}
                        title="Web Design"
                        content="10 tips for drawing with coloured pencils"
                        readTime = "2 Min"
                        />
                    </div>

                </div>

               </div>
           </div>
        </>
    )
}

export default Blog;
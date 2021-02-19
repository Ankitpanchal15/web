import React from 'react';
import HeroImage from '../Image/Ap-1.jpg';
import AboutImg1 from '../Image/Ap-2.jpg';
import AboutImg2 from '../Image/Ap-3.jpg';
import About from "./About";
import Hero from "./Hero";


const Home = () => {
    return (
        <>
         <Hero
         img = {HeroImage}
         topHeading = "Hello, I am"
         heading = "Ankit Panchal"
          />

           <About 
           img1 ={AboutImg1}
           img2 ={AboutImg2}
           Heading= "About Me"
           Content="Passionate Front End Developer who loves simplicity in things and crafts beautiful user interfaces with love."
           facebook= "##"
           intagram="//https://www.instagram.com/ankitpanchal.i/"
           github = "https://github.com/Ankitpanchal15"
            />
        </>
    )
}

export default Home;
import img1 from '../Image/img-1.jpg';
//import img2 from '../Image/img-2.jpg';
// import img3 from '../Image/img-3.jpg';
import img4 from '../Image/img-4.jpg';
import img5 from '../Image/img-5.jpg';
import img6 from '../Image/img-6.jpg';
// import img7 from '../Image/img-7.jpg';
import img8 from '../Image/img-8.jpg';


import PMLogo from '../Image/pm-logo.svg';
import TMSLogo from '../Image/tms-logo.png';

// Get In Touch 
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const ServiceData = [
    {   id: 1,
        img: img1,
        title: "Web Design",
        content: "Modern and mobile-ready website"
    },
    {
        id: 2,
        img:img6,
        title: "Hubspot",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {   id: 3,
        img:img4,
        title: "React",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        id: 4,
        img:img5,
        title: "HTML & CSS",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        id: 5,
        img:img8,
        title: "Responsive Design",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
     {
        id: 6,
        img:img5,
        title: "Web Development",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    }

];

const Experience = [
    {
        id: 1,
        Company : "PM Comunication",
        logo : PMLogo,
        logoAlt : "PM Communcation",
        logoURL : 'https://pmcommu.com/',
        title : "Web Designer",
        content: "I was working as Web Designer which i was working on HTML,CSS, js, Psd to HTML,Bootsrap & more"
    },
    {   
        id: 2,
        Company : "Thought Mate",
        logo : TMSLogo,
        logoAlt : "Thought Mate",
        logoURL : 'http://www.thoughtmate.com/',
        title : "Frontend Developer",
        content: "Working as a Frontend Developer. working on Hubspot, Html, css, Responsive Design, React, Scss, Bootsrap and More"
    }
];

const Skill = [
    {
        id: 1,
        title:"React",
        progress:"60"
    },
    {
        id: 2,
        title:"Hubspot",
        progress:"80"
    },
    {
        id: 3,
        title:"HTML",
        progress:"80"
    },
    {
        id: 4,
        title:"CSS",
        progress:"80"
    }
    ,
    {
        id: 5,
        title:"RWD",
        progress:"90"
    },
    {
        id: 6,
        title:"Java Script",
        progress:"49"
    }
    ,
   
    {
        id: 7,
        title:"Wordpress",
        progress:"60"
    },
    {
        id: 8,
        title:"Photoshop & Figma",
        progress:"70"
    }
   
];

const GetInTouch = [
    {
        id: 1,
        icon: LocationOnIcon ,
        heading:"Location",
        text:"Modasa, Gujarat"
    },
    {
        id: 2,
        icon: CallIcon ,
        heading:"Call",
        text:"+91 9913427156"
    },
    {
        id: 3,
        icon: EmailIcon ,
        heading:"Email",
        text:"panchalankit07@gmail.com"
    }
]




export default ServiceData;
export {Skill,Experience, GetInTouch};
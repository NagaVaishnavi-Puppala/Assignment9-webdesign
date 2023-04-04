import React from 'react'

//import Navbars from '../Layout/Navbar'
//import Content from '../Content/Content'

import AboutCard1 from '../Layout/AboutCard1';
import "./About.css";

const About = () => {

  const aboutUsData = [{
    img: "https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg",
    name: "Jed Rice",
    designation: "Chief Executive Officer(CEO) @CareerPath",
    quotes: "“A vision is something you see and others don’t. Some people would say that’s a pocket definition of lunacy. But it also defines entrepreneurial spirit.”"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh4ppLQ-Gz0c0gvPAVpWQwvQDsv5ejj69Hw&usqp=CAU",
    name: "Deborah Zaza",
    designation: "Chief Technology Officer(CTO) @CareerPath",
    quotes: "“I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.”"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65fmiDPZhcExH_fk2QS40vYGDZZi9Qhso6g&usqp=CAU",
    name: "Edward Cotter",
    designation: "Director Head @CareerPath",
    quotes: "“Ideas are cheap. Ideas are easy. Ideas are common. Everybody has ideas. Ideas are highly, highly overvalued. Execution is all that matters.”"
  }];

  return (
    <div className="component">
      <h3>About Us</h3>
      <p>
      Career Path is the #1 job site in the world1 with over 250M unique visitors2 every month. Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities.

      Please note that Indeed and its affiliates are directly or indirectly owned by a publicly traded Japanese parent company, Recruit Holdings Co., Ltd.
      </p>
      <p>People</p>
      <AboutCard1 data={aboutUsData}/>
    </div>
  )
}

//export default AboutUs;



// function About(){
//     return(
//       <div>
//       <Navbars/>
//       <Content title="About" content="This is the about Page"/>
//       </div>

//     )
// }

export default About
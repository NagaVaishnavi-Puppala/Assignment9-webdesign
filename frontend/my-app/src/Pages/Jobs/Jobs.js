import React from 'react'
// import Navbars from '../Layout/Navbar'
// import Content from '../Content/Content'

// function Jobs(){
//     return(
//       <div>
//       <Navbars/>
//       <Content title="Jobs" content="This is the job Page"/>
//       </div>
//     )
// }

// export default Jobs
import JobsCard3 from '../Layout/JobsCard3';

const Jobs = () => {

  const jobsData = [{
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg",
    name: "Software Developer",
    domain: "Computer Science"
  },
  {
    img: "https://dv-website.s3.amazonaws.com/uploads/2019/10/data-engineer.jpg",
    name: "Data Engineer",
    domain: "Computer Science"
  },
  {
    img: "https://www.datocms-assets.com/14946/1590690690-front-end.jpg",
    name: "Front Developer",
    domain: "Computer Science"
  },
  {
    img: "https://i0.wp.com/biztechcollege.com/wp-content/uploads/2021/05/Cloud-Engineer.png",
    name: "Cloud Development Engineer",
    domain: "Cloud"
  },
  {
    img: "https://www.roberthalf.com/sites/default/files/2019-05/cloud-engineer.jpg",
    name: "Cloud Support Engineer",
    domain: "Cloud"
  },
  {
    img: "https://www.techwalls.com/wp-content/uploads/2019/02/devops.jpg",
    name: "DevOps Manager",
    domain: "Cloud"
  },
  {
    img: "https://www.pacific-research.com/wp-content/uploads/2020/08/shutterstock_1504702805.jpg",
    name: "Product Engineer",
    domain: "Mechanical"
  },
  {
    img: "https://www.niagaracollege.ca/trades/wp-content/uploads/sites/73/2019/08/i-mt.jpg",
    name: "Machine Programmer",
    domain: "Mechanical"
  },
  {
    img: "https://inteng-storage.s3.amazonaws.com/img/iea/3oOpe9vbGW/sizes/untitled-design-2020-04-06t210323948_md.jpg",
    name: "Designer",
    domain: "Mechanical"
  }];

  return (
    <div className="component">
      <h3>Jobs</h3>
      <p>Below are some of the jobs available! Apply Now!</p>
      <JobsCard3 data={jobsData}/>
    </div>
  )
}

export default Jobs;

import React from 'react'
//import Navbars from '../Layout/Navbar';
//import Content from '../Content/Content';
import PageCard from '../Layout/PageCard';
import "./home.css"
const Home = () => {

  const homeData = [{
    img: "https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg",
    name: "Williams Rethor",
    designation: "Data Engineer @ Google",
    quotes: "I was struggling to find a job in my field, but then I discovered this job portal company and it completely changed my job search. The platform was easy to use and had a wide range of job opportunities in my area. Within a few weeks, I was able to find a job that was a perfect fit for me. I highly recommend this company to anyone looking for a new job."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh4ppLQ-Gz0c0gvPAVpWQwvQDsv5ejj69Hw&usqp=CAU",
    name: "Deborah Zaza",
    designation: "Software Developer @ Amazon",
    quotes: "As a hiring manager, I have used many job portals in the past, but this company stands out as one of the best. The platform is user-friendly and the customer service team is responsive and helpful. I have found many qualified candidates through this portal and will continue to use it for future hiring needs."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65fmiDPZhcExH_fk2QS40vYGDZZi9Qhso6g&usqp=CAU",
    name: "Edward Cotter",
    designation: "Network Engineer @ Meta",
    quotes: "This job portal company is a game-changer in the industry. Their platform is innovative and offers a unique approach to job searching. The company truly cares about its users and goes above and beyond to provide support and resources. Thanks to this company, I was able to find a job that I love and am excited to go to every day."
  }]
  return (
    <>
     
      <div className="banner-img">
        <div className="title">
       
          <h3>
            Find the Right Job In
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        
      </div>
      <div class="col-lg-6">
            <div>
              <h1 class="title-heading">Find new and interesting jobs in your domain.</h1>
              <button type="button" class="btn btn-dark btn-lg btn-download ">Download</button>
            </div>
          </div>
          <div className="col-lg-6 image-div">
            <img  src="https://media.istockphoto.com/photos/top-view-of-woman-sitting-on-floor-and-using-laptop-job-search-online-picture-id1283801331?b=1&k=20&m=1283801331&s=170667a&w=0&h=amNoEWduMWoGsyt0H5phnD7lII3MGxqQTxf3rYuyhns=" alt="iphone-mockup"/>
          </div>
          <div class="col-lg-6">
            <div>
            <h2 class="sub-heading1"> Worried Searching for jobs, We got you covered</h2>
              <h2 class="sub-heading">Follow Tips, Explore Jobs and Apply!!!!!</h2>
              <p> Pro Tip
Consider crafting, original, genuine thank you notes (one for each interviewer) the moment you get back to a computer, following the interview. The speed with which you send the notes, and the quality, will make an impact.



And finally, remember that the interviewer cares much more about what you can do for them than what you want out of the deal. Certainly, they’re going to care a bunch about what you want once you establish your worth. But during the interview, you must demonstrate why you make business sense to hire, period.

Now, go forth and show your job search exactly who is the boss.</p>
<div className="testimonials"><h1> OUR TESTIMONIALS</h1></div>

              <PageCard data = {homeData}/>
            </div>
          </div>
      <div className="social-media" data-testid="images">
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg" alt="fb" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg" alt="google" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg" alt="youtube" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg" alt="linkedin" />
      </div>
      
    </>
  );
};

export default Home;
// }

// export default Home
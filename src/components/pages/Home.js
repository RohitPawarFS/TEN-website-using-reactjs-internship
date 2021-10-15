import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import { SliderData } from './testimonialsSec';

export default function Home() {
  return (
    <div className="home-main">
      <section className="Home-sec">
        <div className="home-head">
          <h1 >A World of Knowledge at <br /> &nbsp; &nbsp; &nbsp; Your Fingertips</h1>
        </div>
      </section>
      
      <section className="about-sec">
          <div>
              <h2 className="about-head">ABOUT US</h2>
              <div>
                <img className="about-img" src={"https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_551,h_370,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp"} alt="about-image" />
              </div>
              <div  className="about-div">
                <p>Learning Together From the Comfort <br />of Your Home</p>
              </div>
              <br />
              <div style={{textAlign:'center'}}>
              <Link to='/about'>
                <button className="btn">Learn More</button>
              </Link>
              </div>
          </div> 
      </section>

      <section className="discord-sec">
        <div className="discord-div">
          <div  className="discord-head">
            <br />
            <p>Welcome to <br/><span className="discord-head-p">THE NEXT BIG THING</span></p>
            </div><br /><br /><br /><br /><br />
            <a className="discord-a" href="https://discord.gg/A8zBusy" target="_blank">
              <button className="btn"  >Virtual Campus</button>
            </a>
        </div>
      </section>
      <section className="courseEntrepreneurship-sec">
        <div className="course1Entrepreneurship-div1">
          <a href="https://www.entrepreneurshipnetwork.net/shop">&nbsp;Our Courses</a>
          <br/>
          <br/>
          <p id="course-p">Your New <br />Journey Begins Here,<br /> Today</p>
        </div>
        <div className="course1Entrepreneurship-div2">
          <p>Entrepreneurship<br /> made fun</p><br /><br /><br />
          <Link to='/CourseEntrepreneurship'>
            <button className="btn">Explore More</button>
          </Link>
        </div>
      </section>
      <section className="courseEntrepreneurship-sec">
        <div className="course2Entrepreneurship-div1">
        </div>
        <div className="course2Entrepreneurship-div2">
          <p>digital<br />marketing</p><br /><br /><br />
          <Link to='/about'>
            <button className="btn">Explore More</button>
          </Link>
        </div>
        <div className="course2Entrepreneurship-div3">
        </div>
      </section>
      <section className="courseEntrepreneurship-sec">
        <div className="course3Entrepreneurship-div1">
          <p>Product Management<br /> like a pro</p><br /><br /><br />
          <Link to='/about'>
            <button className="btn">Explore More</button>
          </Link>
        </div>
        <div className="course3Entrepreneurship-div2">
        </div>
      </section>
      <section className="benefits">
        <div className="benefits-hdiv">
          <h1 className="benefits-h1">Our Course Benefits</h1>
        </div>
        <div className="benefits-div">
          <div className="div-benifits">
          <img id="img-benifits" src={require('../../images/img1.png').default } alt="expert Teachers"/>
          <p className="p-benifits">Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>
          </div>
          <div className="div-benifits">
          <img id="img-benifits" src={require('../../images/img2.png').default } alt="online community"/>
          <p className="p-benifits">Feel like home, with a "family of invisible friends".</p>
          </div>
          <div className="div-benifits">
          <img id="img-benifits" src={require('../../images/img3.png').default } alt="flexible curriculum"/>
          <p className="p-benifits">Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</p>
          </div>
        </div>
      </section>


      <section className="imageslider-sec">
        <br/>
        <h1 className="about-head"><u>Testimonials</u></h1>
      <ImageSlider slides={SliderData}/>
      </section>
      
        
      
      <section className="consulting-sec">
      <div className="consulting-div">
        <video id="consulting-vid" autoPlay loop muted>
          <source src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
        <div className="consulting-link">
          <p><i>Power of </i><span> &nbsp; TEN  &nbsp;</span><i>Consulting</i></p>
          <a href="https://www.consulting.entrepreneurshipnetwork.net/" target="_blank">
              <button className="btn"  >Explore Here &gt;</button>
            </a>
        </div>
      </div>
    </section>
    </div>
    
  );
}




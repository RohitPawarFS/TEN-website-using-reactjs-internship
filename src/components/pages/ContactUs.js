import React from 'react';
// import React, { useState } from 'react';
// import '../../App.css';
import './ContactUs.css';


export default function ContactUs() {
  return (
    <section className="contact-sec">
      <h1 style={{textAlign: "center"}}>Contact Us</h1>
      <br/>
      <br/>
      <div className="contact-div">
        <div className="contact-fieldset">
          <fieldset >
            <legend style={{marginLeft: "2%"}}>Contact</legend><br/>
              <input className="contact-input" type="text" placeholder="Name"/><br/><br/>
              <input className="contact-input" type="email" placeholder="Email"/><br/><br/>
              <textarea className="contact-textarea" name="text" placeholder="Add a message"/><br/><br/>
              <button className="contact-btn">Submit</button><br/><br/><br/>
          </fieldset>
        </div>
        <div>
        <br />
        <br />
        <a className="contact-a" href="mailto:info@mysite.com" target="_blank">Email:</a>
        <br />
        <a className="contact-a" href="mailto:hr.contact.ten@gmail.com" target="_blank">hr.contact.ten@gmail.com</a><br /><br /><br /><br /><br /><br />
        <a className="contact-a" href="mailto:info@mysite.com" target="_blank">Phone:</a>
        <br />
        <a className="contact-a" href="mailto:info@mysite.com" target="_blank">+918595986120</a><br /><br /><br /><br />
        <h5>Address:Delhi</h5>
        </div>
      </div>
      <div className="faq-div">
        <h1>F<u>A</u>Q</h1><br /><br />
        <div className="icon-search" ><h1>Frequently asked Question</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fas fa-search"></i>
        </div><br /><br />
        <h4>What is The Entrepreneurship Network (TEN) ?</h4>
        <p>The Entrepreneurship Network (TEN) is a community based Edu-Tech group whose objective is to provide quality learning and expertise<br />Our current customer segment, at present, stands at 500+ colleges and 15000+ students, with new institutions coming in all the time.</p>
        <br />
        <div className="icon">
        <a  href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fclk.im%2FeKLC"><i class="fab fa-facebook-f"></i></a>&nbsp;&nbsp;
        <a  href="https://twitter.com/intent/tweet?url=http://clk.im/eKLC" ><i class="fab fa-twitter"></i></a>
        </div>
        <h4>Why do I join TEN ?</h4>
        <p>TEN would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.</p>
        <div className="icon">
        <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fclk.im%2FeKLC"><i class="fab fa-facebook-f"></i></a>&nbsp;&nbsp;
        <a href="https://twitter.com/intent/tweet?url=http://clk.im/eKLC" ><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </section>
  );
}
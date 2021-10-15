import React from 'react';
import './Mentorship.css';
import ImageSliderMentorship from './ImageSliderMentorship';
import { SliderData } from './Tesimonalmentorship';

export default function Mentorship() {
    return (
        <div className="mentorship">
                  <h1 className="mentor">Mentorship</h1>
              <div className="test_section">
                <ImageSliderMentorship slides={SliderData}/>
              </div>
                  <section>
           <div className="main_access">
              <div className="mentor_access_grid">
                        <div className="instant_and_image">
                               <p> GET INSTANT ACCESS TO</p>
                               <p>THESE EXCLUSIVE LESSONS</p>
                               <p>AND 100s MORE</p>
                               <img className="instant-img1"src="https://static.wixstatic.com/media/c4ea0b_0c43226c26a8442bbb1ad9533b4d2103~mv2.jpg/v1/fill/w_750,h_500,al_c,q_85,usm_0.66_1.00_0.01/book-stack.webp" alt="none"/>
                            </div>                     
                        <div className="rightside">
                             <p className="ment-p">The new way of learning.</p><br/>
                             <p>If youre like most of our members you believe in expanding your knowledge and leveling up your skillsets, but you just dont have the time to read the books that you know will get you there.</p>
                             <br/>
                              <p>We engineered a new, fun and engaging way to learn directly from the highest level authors and thinkers...</p>
                        </div>   
                       
              </div>
                   <div className="button_access">
                        <button className="btn-ment">
                            TRY TEN MENTORSHIP @INR 500
                        </button>
                    </div>
            </div>
                  </section>

                   <section>
              <div className="why_ten">
                       <div className="why">
                           <h1 className="why-h1">WHY TEN?</h1>
                       </div>
                       <div className="text_grid">
                             <div className="text-div"><p className="text-p">You will be taught directly by
                                 the authors, CEOs and experts themselves 
                                    for optimal and efficient learning... 
                                </p></div>
                             <div className="text-div"><p className="text-p">You will be taught directly by
                                the authors, CEOs and experts themselves 
                                for optimal and efficient learning...
                                </p></div>
                             <div className="text-div"><p className="text-p">You'll have access to exclusive video courses,
                                audio lessons, workbooks, and cheat sheets
                                that you can use in any combination to best
                                suit your learning preferences...
                                </p></div>
                       </div>
                       <div className="btn_mentor">
                           <button className="mentor-btn1">
                               TRY TEN MENTORSHIP @INR 500
                           </button>
                       </div>

              </div>
            </section>
            <section>
     <div className="register1"> 
       <div className="ambassador_registration1">
               <h1>Membership Registration Form</h1>
               <hr/>
               <p className="preg1" >If you would like to be campus ambassador of TEN, please fill in your details in the form bellow and you will be automatically registered.</p>
       <div className="form1">
           <div className="names1">
                <br/><br/><br/>
                <h1>Name:</h1><br/>
              <input className="inputreg1" type="text" placeholder="Enter first Name..."/>
              <input className="inputreg1" type="text" placeholder="Enter last Name..."/>
            </div>
            <br/>
            <div className="phone_emails1">
                <h1>Email:</h1><br/>
                 <input className="inputreg1" type="text" placeholder="Enter Your Email here..."/>
                 <br/>
                 <h1>Phone:</h1><br/> 
                 <input  className="inputreg1"type="number" placeholder="Enter Mobile Number..."/>
                 <br/>
                 <br/>
                 <h1>Comments Or Question:</h1>
                 <br/> 
                 <textarea className="Reg-textarea1" placeholder="Enter comments..."/>
            </div>
            <div style={{textAlign: "center"}}>
                <button className="Forum-button2">Register</button>
            </div>
       </div>
                <div className="qr-cert1">
                      <h3>To complete your registration, please scan and pay</h3>
                        <br /><img className="Reg-img" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_545,h_724,al_c,q_85,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="none"/>
                </div>
       </div>

       </div>
     </section>

        </div>

    );
}
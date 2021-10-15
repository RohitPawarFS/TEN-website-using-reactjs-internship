import React from 'react'
import './MembershipReg.css';
const MembershipReg = () => {
    return (
        <div className="membership">
            <div className="member_image">
            <h1 className="head1" >Membership Registration</h1>
            <img className="image1" src="https://static.wixstatic.com/media/cca0e48a9eea265ba6be36a1eacc66d4.jpg/v1/fill/w_1280,h_766,al_c,q_85/Business%20Team.webp" alt="none"/>
            </div>
            <div className="sectionmember">
            <section>
                <div className="member_details">
                   <p className="preg"> We, at The Entrepreneurship Network (TEN), have always been interested in associating ourselves with young professionals that show a constant zeal to learn and improve themselves. We therefore extend a cordial invitation to you to join our society.<br />
                   <br /><br />We are one of the fastest growing edu-tech startups in the world that not only provides you an opportunity to upskill yourself in the hottest technologies present today but also assist you in getting a job that complements that skill-set.
                   <br /><br />The membership starts as low as INR 100/- (RUPEES ONE HUNDRED ONLY). Register and pay today to start exploring an ocean of opportunities.
                   <br /><br />That's not it, become a member for an year and enjoy a free access to all courses, at an introductory price of INR 10000/- (RUPEES TEN THOUSAND ONLY).
                   <br /><br />HURRY UP!!! DON'T FORGET TO SCAN AND PAY FOR COMPLETING YOUR REGISTRATION.</p>
                    <div className="div-btn">
                        <button className="btn1"> PERKS</button>
                        <button className="btn1">REGISTER</button>
                    </div>
                </div>
            </section>
            </div>
            <section>
           <div className="perks">
                    <div className="perks_text">
                        <h1  className="perks_h1"> Perks</h1>
                            <img className="perks_img" src="https://static.wixstatic.com/media/c4ea0b_656145e89827461a942d23b96161f7c4~mv2.jpg/v1/fill/w_684,h_393,al_c,lg_1,q_80/Perks.webp" alt="none"/>
                            <li className="perks_li">Course Handbooks and other study material</li>

                            <li className="perks_li">Reduced product costs</li>

                            <li className="perks_li">Exclusive VIP Badges.</li>

                            <li className="perks_li">Updates on relevant news and job opportunities</li>
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
            
    )
}

export default MembershipReg
import React from 'react';
import './CampusAmb.css';

export default function CampusAmb() {
    return (
        <div style={{ margin:'3%'}} >
            <section className="ambassador"> 
                <div className="ambassador_1">
                   <h1 style={{ color:'#4BD1A0', fontSize:'50px', textAlign:'center'}}> Campus Ambassador Registration</h1> 
            <img className="ambassador_img1" src="https://static.wixstatic.com/media/c4ea0b_d49fa278f8904b70988149c703acb442~mv2.jpg/v1/crop/x_21,y_110,w_643,h_114/fill/w_615,h_109,al_c,q_80,usm_0.66_1.00_0.01/34560488_591443757892996_612353626492370.webp" alt="none" />
            <div style={{ display:'flex',position:'absolute'}}>
                <div className="ambassador_div1">
                    <div className="btns">
                        <button className="btns1">Skills</button>
                        <button className="btns1">rewards</button>
                    </div>
                    <div className="apply"><button className="btns2">Apply Now</button></div>
                    </div>
                </div>
                <div className="ambassador_div1">
                <img className="ambassador_img2" src="https://static.wixstatic.com/media/c4ea0b_bece5bb82f714728b574d12e01c6cd38~mv2.jpg/v1/crop/x_0,y_24,w_552,h_271/fill/w_529,h_259,al_c,q_80,usm_0.66_1.00_0.01/34560488_591443757892996_612353626492370.webp" alt="none"/>
                </div>
            </div>
            </section>
            <section >
               <div className="ambassador_2">
                   <div className="skills_content">
                   <h1 className="skills_h1"> Skills Required</h1>
                        <br /><br />
                        <li className="skills_li">Social Media Presence of min 500 followers</li>
                        <li className="skills_li">Strategy and planning skills</li>
                        <li className="skills_li">Relationship building</li>
                        <li className="skills_li">Part of a college society or club </li>                      
                   </div>
                   <div className="yoga_pose"/>
                </div>
            </section>

            <section>
               <div className="ambassador_3">
                 <div className="trophie">
                   <img className="camp-img" src="https://static.wixstatic.com/media/c4ea0b_77ec042294404dc3bf273c8c840398df~mv2.png/v1/fill/w_734,h_710,al_c,q_90,usm_0.66_1.00_0.01/c4ea0b_77ec042294404dc3bf273c8c840398df~mv2.webp" alt="nine"/>
                 </div>
                 <div className="reward">
                   
                         <h1 className="reward-h1"> Rewards </h1>
                          <li className="reward-li">'Campus Ambassador' certificate</li>

                          <li className="reward-li"> Performance/target based cash rewards</li>

                          <li className="reward-li">'AMBASSADOR OF THE MONTH' certificate for top performers</li>

                          <li className="reward-li">Free access to social events organised by TEN.</li>
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

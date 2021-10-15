import React from 'react'
import './Certification.css';

const Certification = () => {
    return (
    <div className="certificate">
        <div className="main_certificate">
            <p className="ten_certificate">TEN Certified Expert</p>
            <p className="per">
                <p>Dear Intern,<br />We at TEN not only strive to provide the best guidance to our interns but also ensure their experience with us proves to be a career milestone.
                <br /><br /><br />We hereby offer to certify you as an Expert in your domain for a paltry sum of INR 200/- (RUPEES TWO HUNDRED ONLY). This Internship encompasses all the major learnings you gave and received and establishes you as a certified professional.
                <br />We are certain this accomplishment will go a long way in building your fledgling career and prove instrumental in making you the best in business.
                <br /><br /><br />The <u>QR code</u> below helps you to make the required payment.
                The certificate would be shared on your email Id registered with us, once the payment is successful.
                Also, fill up the form below that helps you subscribe for the required certificate. 
                <br /><br />We look forward to certifying you and thereby enhancing your skill set and enriching your ever-growing profile.</p>
            </p>
                <p className="sub">Subscribe here to get Certificates</p>

                <div className="certificate_grid_container">
                    
                    <div className="grid-items">
                    <input className="input1" placeholder="name"/>
                    </div>

                    <div className="grid-items">
                    <input className="input1" placeholder="Email"/>
                    </div>

                    
                    <div className="grid-items">
                    <input  className="input1" placeholder="Mobile" color="black"/>
                    </div>


                    <div className="grid-items">
                        <input  className="input1" placeholder="payment"/>
                    </div>

                </div>
             <div className="cert_btn">
                 <button className="hackathon-btn">Subscribe</button>
             </div>
             <div className="qr_cert">
                        <img className="img" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_545,h_724,al_c,q_85,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="none"/>
                </div>
             
   </div>
</div>
    )
}

export default Certification
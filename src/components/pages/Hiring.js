import React from "react";
import "./Hiring.css";

export default function Hiring() {
    return (
      <section className="hiring-sec">
        <div className="hiring-div">
          <h2 className="hiring-head">We Are Hiring Interns</h2>
          <p>The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India. <br /> <br />There is a small registration fee, INR 400 /- (RUPEES Four HUNDRED ONLY) applicable to all incoming interns as part of this One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.</p>
          <div className="flex-div">
            <p className="flex-p">
            <br />
              Scan the QR code to complete your payment and submit the below application form to start with your registration process.<br />  <br /> Please keep the payment transaction ID handy for submitting the form. <br /> <br />  Note: This internship does not offer an opportunity to earn money,rather helps an individual grow by working on the job and earn a certificate upon successful completion.<br />  <br />Check out few of our open internship positions below Refer the application form for more open positions <br /> <br /><b> Digital Marketing Interns <br /> <br /> General Management Interns <br /> <br /> Technical/Software Experts <br /> <br /> Product Management Interns <br /> <br /> Content Interns and more...</b></p>
            <img className="flex-img" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_448,h_598,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="QR code" />
          </div>
        </div>

        <div className="applicationForm">
          <h2 className="applicationForm-head">Application From</h2>
          <p className="applicationForm-p">Registration Fee Rs. 400/-</p>

          <form action="#" className="applicationForm-form">
            <label>Choose relevant internship opening</label>
            <br />
            <select className="applicationForm-select">
            <option disabled selected value> -- select an option -- </option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Market Research">Market Research</option>
              <option value="Sales">Sales</option>
              <option value="Text Content Preparation">Text Content Preparation</option>
            </select>
            <br />
            <br />
            <label>what is your employment status?</label>
            <br />
            <select className="applicationForm-select">
              <option disabled selected value> -- select an option -- </option>
              <option value="College Student">College Student</option>
              <option value="Empolyed">Empolyed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <br />
            <label>DO you have previous experience?</label>
            <br />
            <select className="applicationForm-select">
            <option disabled selected value> -- select an option -- </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
            <br />
            <label>Payment Transaction ID</label>
            <br />
            <input className="payment" type="text" />
            <input className="hSubmitBtn" type="submit" value="Next"/>
          </form>
        </div>
      </section>
    );
}
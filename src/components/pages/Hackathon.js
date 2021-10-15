import React from 'react';
import './Hackathon.css';
import { Link } from 'react-router-dom';

export default function Hackathon() {
    return (
        <div className="hackathon-maindiv">
            <h1 style={{fontSize: '50px'}}>Hackathon</h1>
            <section className="hackathon-sec1">
                <div className="hackathon-div1">
                </div>
                <div className="hackathon-div2">
                <p>A problem is a chance for you to do your best.</p>
                <br/>
                <h4 style={{textAlign:'right'}}>--Duke Ellington</h4>
                </div>
            </section>
            <section className="hackathon-sec2">
                <div className="hackathon-div3">
                </div>
                <div className="hackathon-div4">
                <h1 style={{color:'white',fontSize: '50px'}}>What is TEN Hackathon?</h1>
                <p><i>​TEN Hackathon  (or the TEN Hack, as it is called) is an annual technical fest of The Entrepreneurship Network focused on bringing out the technical expertise in students, it is not only limited to the individuals with a sound technical knowhow. It is a confluence of innovation and creation wherein applicants not only try to impress others with their unique abilities but also contribute in passing down their knowledge to the younger, more hopeful applicants whose skills are at a nascent stage but have a proclivity towards gaining exposure to cutting-edge technology relevant in today’s world.</i></p>
                <br/>
                <br/>
                <br/>
                    <Link to='/about' style={{paddingRight:'5%'}}>
                        <button className="btn">Register</button>
                    </Link>
                    <Link to='/about' style={{paddingLeft:'5%'}}>
                        <button className="btn">TEN Hack'20</button>
                    </Link>
                </div>
            </section>
            <section className="hackathon-sec1">
                <div className="hackathon-div5">
                <h1 style={{color:'#BC9B5D',fontSize: '50px'}}><i>About TEN HACK'20</i></h1>
                <p>TEN Hack ’20 will be an online event and you can be a part of it by sitting anywhere in the world.It promises to be a surreal experience, with applicants witnessing new path-breaking technologies and exposure to industries of different domains. As a part of the process, every participant will be given a problem statement pertinent to today’s world and they are expected to come up with innovative solutions, present them to a panel of technical and functional architects, and convince them as to what makes their solutions work.The hack aims at providing students with a platform to get in touch with the pioneers of modern technology so as to whet their appetite for gaining technological knowledge. Under the mentorship of these seasoned veterans, participants will have the opportunity to construct their ideas in a way that makes them more pragmatic and profitable.The participants will compete for an attractive prize money and certificates. And with applications from more than 200 colleges country-wide to be expected, it surely makes for a fascinating contest.</p>
                <br />
                <Link to='/about'>
                        <button className="btn">Events</button>
                </Link>
                </div>
                <div className="hackathon-div6">
                </div>
            </section>
            <section className="hackathon-sec3">
                <div className="hackathon-div7">
                <h1 style={{textAlign:'center',fontSize:'50px', color: 'rgba(75, 209, 160)'}}>TALKS</h1>
                <br />
                <p>TEN Hack will initiate with talks from experts hailing from a plethora of versatile industries ranging from sales to tech. The participants would be given an indication on to their journey into the corporate environment, and to motivate them for the challenges that await them. TEN Hack is focused on bringing leading industry experts, tech pioneers and trailblazers to help ignite the fire of innovation in participants.</p>


                </div>
                <div className="hackathon-div8">
                    <h1 style={{textAlign:'center',fontSize:'50px', color: 'rgba(75, 209, 160)'}}>WORKSHOP</h1>
                    <br />
                    <p>While the world seems to have come to a halt, we here at TEN Hack have collaborated with leading personalities in order to ensure that our participants are provided with a real-time exposure. The purpose of these workshops is to instill the participants with a mindset to take on ever-changing obstacles arising in the industry and cultivate a problem solving ability in them.</p>
                </div>
                <div className="hackathon-div9">
                   <h1 style={{textAlign:'center',fontSize:'50px'}}>PARTNERSHIP</h1>
                   <br />
                   <ul style={{color:'white'}}>
                    <li>TEN Hack will be conducted in partnership with you as a case partner.</li>
                    <li>Monetary sponsorship in terms of cash rewards to TEN Hack winners and innovative ideas.</li>
                    <li>Get solutions to your problem statements at TEN Hack from students all over the world participating in the event.</li>
                    <li>Mentor the projects at TEN Hack by sending technical and business expertise from your company.</li>
                    <li>The best solution(s) shall be rewarded with a cash prize by your company.</li>
                   </ul>
                </div>
            </section>
            <section className="hackathon-sec1">
                <div style={{fontSize:'30px'}}>
                    <h1>Description</h1>
                    <br />
                    <ul>
                        <li>Group: 5 People</li>
                        <li>Registration fees: ₹1,000 (₹200 each)</li>
                        <li>Prize: ₹10,000 </li>
                        <li>Duration: 2 week</li>
                    </ul>
                    <br />
                    <br />
                    <h1>Hackathon<br />2020</h1>
                    <h4>Registration</h4>
                    <p>Please fill the information below to Register for HACKATHON</p>
                </div>
            </section>
            <section  className="hackathon-sec1">
                <div style={{display: "block"}}>
                        <input className="hackathon-input1" type="text" placeholder="First Name"/>
                        <input className="hackathon-input1" type="text" placeholder="Last Name"/>
                        <input className="hackathon-input1" type="email" placeholder="Email"/>
                        <input className="hackathon-input1" type="text" placeholder="Phone No"/>
                        <input className="hackathon-input1" type="text" placeholder="Team Name "/>
                        <input className="hackathon-input1" type="text" placeholder="Address"/>
                        <input className="hackathon-input1" type="text" placeholder="What is your Idea?"/>
                        <br />
                    <button className="hackathon-btn">continue</button>
            </div>
            </section>
        </div>
    );
}
import React from 'react';
import './Forum.css';

export default function Forum() {
    return (
        <section className="Forum-sec">
            <div className="Forum-div1">
                <h3 style={{ textAlign: 'left', display: 'inline',position: 'absolute'}}>Entrepreneurship A-Z</h3>
                <h3 style={{ textAlign: 'right', backgroundColor: 'black' }} className="Forum-span"><i class="fas fa-search"></i><input className="forum-input" type="email" placeholder="Search"/></h3>
                <h3 style={{ textAlign: 'left', backgroundColor: 'black' }} className="Forum-span1"><i class="fas fa-search"></i><input className="forum-input" type="email" placeholder="Search"/></h3>
                <br />
                <br />
                <h1 style={{ textAlign: 'center',fontSize: '50px',color: 'gray' }}>Entrepreneurship A-Z</h1>
                <h4 style={{ textAlign: 'center',fontSize: '30px',color: 'gray' }}>Share stories, ideas, pictures and more!</h4>
            </div>
            <div className="Forum-div2">
                <div className="Forum-p1">
                    <h1>Already Have an Account?</h1>
                    <br/>
                    <p>Log in to access the forum.</p><br /><br /><br />
                    <button className="Forum-button1">log in</button>
                </div>
                <div className="Forum-p2">
                    <h1>Sign Up Today</h1>
                    <br />
                    <p style={{ width: '50%'}}>Join the forum to check out the posts and add your voice.</p><br /><br /><br />
                    <button className="Forum-button2" >Get started</button>
                </div>
            </div>
        </section>
    );
}
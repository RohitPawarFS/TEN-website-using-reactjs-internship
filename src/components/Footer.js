import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

export default function Home() {
    return (
    <div>
      <div className="footer">
        <div className="row1">
          <SocialIcon
            className="socialIcon facebook"
            url="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"
          />
          <SocialIcon
            className="socialIcon twitter"
            url="https://twitter.com/We_Are_TEN?s=08"
          />
          <SocialIcon
            className="socialIcon insta"
            url="https://www.instagram.com/theentrepreneurshipnetwork/"
          />
        </div>
        <div className="row2">
          <p>Subscribe to out newsletter</p>
          <form action="">
            <div className="col">
              <div className="col1">
                <input type="text" placeholder="Full Name" />
                <input type="text" name="mobile" id="mobile" placeholder="Mobile No."/>
              </div>
              <div className="col2">
                <input type="text" name="college" id="collage" placeholder="College Name" />
                <input type="mail" name="mail" id="mail" placeholder="Email"/>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="Discord" />
              <p> Join TEN's Discord Community</p>
            </div>
            <input className="fSubmitBtn" type="submit" name="" />
          </form>
        </div>
        <div className="row3">
          <p>About us</p>
          <p>FAQ's</p>
          <p>Contact Us</p>
        </div>
      </div>
      <p className="copyright">
        © 2020 Limitless Technologies - The Entrepreneurship Network
      </p>
    </div>
  );
}
import React from "react";
import { Card, CardBody } from "reactstrap";
import "./SocialMedia.css";
import { socialInfo } from "../socialInfo";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const SocialMedia = () => {
  const socialCard = (socialInfo, index) => {
    return (
      <div>
        <Card className="sCard" key={index}>
          <div className="socialIcons">
            <div className="facebook">
              <a href={socialInfo.facebookLink}>
                <FaFacebook />
              </a>
            </div>
            <div className="twitter">
              <a href={socialInfo.twitterLink}>
                <FaTwitter />
              </a>
            </div>
            <div className="pinterest">
              <a href={socialInfo.pintrestLink}>
                <FaPinterest />
              </a>
            </div>
          </div>
          <CardBody>
            <div className="instagram">
              <a href={socialInfo.instagramLink}>
                <p>{socialInfo.text}</p>
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  };
  

  return (
    <div className="socialMediaContainer">
      <div className="tags">{socialInfo.map(socialCard)}</div>
      <div className="update">
        <p>Last updated: 12hours ago</p>
        <p>Made by Shushanto Sarkar</p>
      </div>
      <div className="follow">
        <h1>Follow us on social media:</h1>
        <div className="logo">
          <a href="">
            <img src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp" />
          </a>
          <a href="">
            <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp" />
          </a>
          <a href="">
            <img src="https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01/9c4b521dd2404cd5a05ed6115f3a0dc8.webp" />
          </a>
          <a href="">
            <img src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01/48a2a42b19814efaa824450f23e8a253.webp" />
          </a>
          <a href="">
            <img src="https://static.wixstatic.com/media/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01/a1b09fe8b7f04378a9fe076748ad4a6a.webp" />
          </a>
        </div>
        <div className="logoName">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>YouTube</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
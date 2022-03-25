import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitLinkedin = () => {
    window.location = "www.linkedin.com/in/sujay-kamatkar";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/rs-computers/image/upload/v1647522303/avatars/cewtna4wikclk1rwnqqd.jpg"
              alt="Founder"
            />
            <Typography>Sujay Kamatkar</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
            <span></span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.youtube.com" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="www.linkedin.com/in/sujay-kamatkar" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

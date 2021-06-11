import React, { Component } from "react";
import "./Hero.scss";
import "../../App.scss";
import Border from "../../assets/images/Border.png";
// import heroImgOne from "../../assets/images/unity__hero__model__one.png";
class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="Hero__col--content">
          <h1 className="Hero__heading">Lorem, ipsum.</h1>
          <p className="Hero__tagline">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="Hero__cta">VOLUNTEER</button>
        </div>
        <div className="Hero__col--bg">
          {/* <img src={heroImgOne} alt="hero-img-one" /> */}
        </div>
        <div className="mission__container">
          <h2>Our Mission</h2>
          <img src={Border} alt="" />
          <p>
            Connecting underprivileged patients with healthcare professionals
            who wish to volunteer their services through an accessible and
            affordable digital format.
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;

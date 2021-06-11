import React, { Component } from "react";
import "./Hero.scss";
import "../../App.scss"

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="Hero__col--content">
          {/* GIF COMING FROM UX TEAM */}
          <h1 className="Hero__heading">Lorem, ipsum.</h1>
          <p className="Hero__tagline">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="Hero__cta">VOLUNTEER</button>
        </div>
        <div className="Hero__col--bg"></div>
      </div>
    );
  }
}

export default Hero;

import React, { Component } from "react";

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
        <div className="Hero__col--bg"></div>
      </div>
    );
  }
}

export default Hero;

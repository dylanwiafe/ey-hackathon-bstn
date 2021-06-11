import React, { Component } from "react";
import "./Vision.scss";
import templateImage from "../../assets/images/unit__content__model__1.png";
import Border from "../../assets/images/Border.png";

class Vision extends Component {
  render() {
    return (
      <div className="vision">
        <div className="vision__col--photo">
          <img className="what-we-do__img" alt="vision" src={templateImage} />
        </div>
        <div className="vision__col--copy">
          <h2 className="vision__heading">Our Vision</h2>
          <img src={Border} alt="" />
          <p className="vision__copy">
            To make volunteering viable in the medical community and, in turn,
            provide healthcare to all who need it.
          </p>
        </div>
      </div>
    );
  }
}

export default Vision;

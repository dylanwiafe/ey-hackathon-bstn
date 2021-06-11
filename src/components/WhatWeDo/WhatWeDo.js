import React, { Component } from "react";
import "./WhatWeDo.scss";
import templateImage from "../../assets/images/unit__content__model__1.png";
import Border from "../../assets/images/Border.png";

class WhatWeDo extends Component {
  render() {
    return (
      <div className="what-we-do">
        <div className="what-we-do__col--photo">
          <img
            className="what-we-do__img"
            alt="what-we-do"
            src={templateImage}
          />
        </div>
        <div className="what-we-do__col--copy">
          <h2 className="what-we-do__heading">lorem ipsum</h2>
          <img src={Border} alt="" />
          <p className="what-we-do__copy">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            similique ipsum repellat excepturi modi!.
          </p>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;

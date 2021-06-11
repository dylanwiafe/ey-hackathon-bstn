import React, { Component } from "react";
import "./Vision.scss";
import templateImage from "../../assets/images/unit__content__model__1.png";
class Vision extends Component {
  render() {
    return (
      <div className="vision">
        <div className="vision__col--photo">
          <img className="what-we-do__img" alt="vision" src={templateImage} />
        </div>
        <div className="vision__col--copy">
          <h2 className="vision__heading">lorem ipsum</h2>
          <p className="vision__copy">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            similique ipsum repellat excepturi modi!.
          </p>
        </div>
      </div>
    );
  }
}

export default Vision;

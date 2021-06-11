import React, { Component } from "react";
import "./Values.scss";
import templateImage from "../../assets/images/unit__content__model__1.png";
class Values extends Component {
  render() {
    return (
      <div className="values">
        <div className="values__col--copy">
          <h2 className="values__heading">lorem ipsum</h2>
          <p className="values__copy">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            similique ipsum repellat excepturi modi!.
          </p>
        </div>
        <div className="values__col--photo">
          <img className="what-we-do__img" alt="values" src={templateImage} />
        </div>
      </div>
    );
  }
}

export default Values;

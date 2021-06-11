import React, { Component } from "react";
import "./WhatWeDo.scss";
class WhatWeDo extends Component {
  render() {
    return (
      <div className="what-we-do">
        <div className="what-we-do__col--copy">
          <h2 className="what-we-do__heading">lorem ipsum</h2>
          <p className="what-we-do__copy">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            similique ipsum repellat excepturi modi!.
          </p>
        </div>
        <div className="what-we-do__col--photo">
          <img className="what-we-do__img" src="" alt="what-we-do-img" />
        </div>
      </div>
    );
  }
}

export default WhatWeDo;

import React, { Component } from "react";
import "/Vision.scss";
class Vision extends Component {
  render() {
    return (
      <div className="vision">
        <div className="vision__col--photo">
          <img className="vision__img" src="" alt="" />
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

import React, { Component } from "react";
import "/Values.scss";
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
          <img className="values__img" src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Values;

import React, { Component } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
      </div>
    );
  }
}

export default App;

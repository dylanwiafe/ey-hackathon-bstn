import React from "react";
import HomePage from "./pages/HomePage/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

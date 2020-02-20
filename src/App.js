import React from "react";
import "./App.css";
import LayoutContainer from "./hoc/Layout/LayoutContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LayoutContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Service />
        <Contact />
      </div>
    );
  }
}

export default App;

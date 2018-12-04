import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={ToDoList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

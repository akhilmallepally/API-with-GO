import React, { Component } from "react"
import ReactDOM from "react-dom"
import AppFooter from "./AppFooter"
import AppContent from "./AppContent"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import AppHeader from "./AppHeader";

class App extends Component {
  render() {
    const myProps =  {
      title: "Hello",
      subject: "My sub",
      fav_color: "nothing",

    }

    return (
      <div className="app">
        <div>
          <AppHeader {...myProps}/>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))

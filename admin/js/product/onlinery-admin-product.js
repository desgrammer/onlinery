import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import wplogo from "../../../images/wordpress-logo-white.svg";

class App extends React.Component {
  render() {
    return (
      <div className="bg-white">
        <div className="bg-gray-900 px-3 py-3">
          <img className="h-10 w-10" src={wplogo} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("onlineryProducts"));

import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import wplogo from "../../../images/wordpress-logo-white.svg";

class App extends React.Component {
  render() {
    return (
      <>
      <div className="bg-white flex justify-between items-center border-b-2 border-gray-200">
        <div className="bg-gray-900 px-4 py-4">
          <a href="http://onlinery.test/wp-admin/edit.php?post_type=onl_products">
            <img className="h-8 w-8" src={wplogo} />
          </a>
        </div>
        <div className="mr-5">
          <button className="px-5 py-2">Save</button>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <div className="max-w-lg mx-auto">
          <input className="text-4xl w-full outline-none text-center" placeholder="Add product name"></input>
        </div>
        <div className="flex max-w-2xl mx-auto py-12 items-center">
          <div className="flex-1 h-72 w-full border-2 rounded border-dashed border-gray-200"></div>
          <div className="flex-1">
            <div className="pl-10">
              <input className="text-xl w-full outline-none" placeholder="Add price"></input>
              <textarea className="border-none h-32 w-100 my-5 text-md" placeholder="Add something that describe your product....."></textarea>
              <div className="h-10 w-full border-2 rounded border-dashed border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("onlineryProducts"));

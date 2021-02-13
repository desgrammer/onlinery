import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

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
          <button className="mr-2 px-5 py-2 text-green-700 border-green-50 bg-green-50">Discard</button>
          <button className="px-5 py-2 text-white border-green-700 bg-green-700">Save</button>
        </div>
      </div>
      <div className="flex">
        <div className="w-9/12 container mx-auto py-12">
          <div className="max-w-lg mx-auto">
            <label className="block text-xs font-semibold mb-2 text-gray-400">Product Name</label>
            <input className="text-xl w-full py-2 bg-gray-50 border-2 border-gray-100 rounded-md outline-none text-center hover:bg-green-50 focus:bg-green-50 hover:border-green-100 focus:border-green-100 transition-all" placeholder="Add product name"></input>
          </div>
          <div className="flex max-w-2xl mx-auto py-5 items-center">
            <div className="flex-1 flex-col">
              <label className="block text-xs font-semibold mb-2 text-gray-400">Thumbnail Image</label>
              <div className="flex justify-center items-center h-72 w-full rounded bg-gray-50 cursor-pointer">
                <FontAwesomeIcon className="text-gray-200" icon={faImage} size="6x" />
              </div>
            </div>
            <div className="flex-1">
              <div className="pl-5">
                <div className="mb-3">
                  <label className="block text-xs font-semibold mb-2 text-gray-400">Product Price</label>
                  <input className="text-md bg-gray-50 w-full px-3 py-2 border-2 border-gray-100 rounded-md outline-none hover:bg-green-50 focus:bg-green-50 hover:border-green-100 focus:border-green-100 transition-all" placeholder="Add price"></input>
                </div>
                <div className="mb-3">
                  <label className="block text-xs font-semibold mb-2 text-gray-400">Product Description</label>
                  <textarea className="text-md bg-gray-50 px-3 py-2 border-2 border-gray-100 rounded-md h-32 hover:bg-green-50 focus:bg-green-50 hover:border-green-100 focus:border-green-100 transition-all" placeholder="Add something that describe your product....."></textarea>
                </div>
                <div className="mb-3">
                  <label className="block text-xs font-semibold mb-2 text-gray-400">Product Variation</label>
                  <button className="group flex justify-center items-center h-10 w-full border-2 rounded border-dashed border-gray-200 cursor-pointer hover:bg-green-100  hover:border-green-100 focus:border-green-100 transition-all">
                    <FontAwesomeIcon className="text-gray-400 group-hover:text-green-700" icon={faPlus} size="1x" />
                    <span className="ml-2 text-gray-400 group-hover:text-green-700">Add variation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-10 w-3/12 bg-green-50">
          <FontAwesomeIcon className="text-green-700" icon={faEye} size="6x" />
          <h2 className="text-lg font-semibold text-gray-600 my-3">Meet the product editor!</h2>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed felis felis. Vivamus viverra egestas pulvinar. Nunc efficitur magna sit amet est viverra vehicula. Vivamus vitae lacus efficitur, ornare lacus sit amet, imperdiet ex.</p>
          <button className="mt-4 px-5 py-1 text-white border-green-700 bg-green-700">Learn more</button>
        </div>
      </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("onlineryProducts"));

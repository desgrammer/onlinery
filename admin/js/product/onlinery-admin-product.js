import React from "react";
import ReactDOM from "react-dom";
import anime from 'animejs';

import Modal from '../components/modal';

import "../../css/onlinery-admin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faEye, faPlus, faFolderPlus } from '@fortawesome/free-solid-svg-icons';

import wplogo from "../../../images/wordpress-logo-white.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        productName: '',
        productPrice: '',
        productDescription: '',
      },
      productImage: '',
      modalShow: false,
      selectedProductType: '',
    };

    this.handleLoad   = this.handleLoad.bind(this);
    this.handleModal  = this.handleModal.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.handleModal(true)
  }

  handleModal(modalStatus) {
    if (modalStatus) {
      anime({
          targets: '.modal-wrapper',
          scale: [.8, 1],
          opacity: 1,
          easing: 'easeInOutExpo',
      })
    } else {
      if (this.state.selectedProductType === '') {
        return
      }
      anime({
          targets: '.modal-wrapper',
          scale: .8,
          opacity: 0,
          easing: 'easeInOutExpo',
      })
      anime({
        targets: '.modal',
        opacity: 0,
        easing: 'easeInOutExpo',
        complete: function() {
          document.querySelector('.modal').style.display = 'none'
        }
      })
    }
    this.setState({modalShow: modalStatus})
  }

  handleChoose(type) {
    this.setState({selectedProductType: type})
  }

  handleUpload() {
    let frame = wp.media({
      title: 'Select or Upload Media',
      button: {
        text: 'Use this Image'
      },
      multiple: false
    });

    frame.on('select', function () {
      // Get media attachment details from the frame state
			let attachment = frame.state().get('selection').first().toJSON();

      jQuery('input[name=productImage]').val(attachment.id)
    })

    frame.open();
  }

  handleChange(event) {
    let name = event.target.getAttribute('name')
    this.setState(prevState => {
      let formData = {...this.state.formData}
      formData[name] = event.target.value

      return { formData }
    });
  }

  handleSubmit() {
    console.log('submitted')
    alert(this.state)
  }

  render() {
    return (
      <>
        <div className="onl-wrapper">
          <div className="bg-white flex justify-between items-center border-b-2 border-gray-200">
            <div className="bg-gray-900 px-4 py-4">
              <a href="http://onlinery.test/wp-admin/edit.php?post_type=onl_products">
                <img className="h-8 w-8" src={wplogo} />
              </a>
            </div>
            <div className="mr-5">
              <button className="mr-2 px-5 py-2 text-green-700 border-green-50 bg-green-50">Discard</button>
              <button onClick={this.handleSubmit} className="px-5 py-2 text-white border-green-700 bg-green-700">Save</button>
            </div>
          </div>
          <form className="m-0" autoComplete="off">
            <div className="flex flex-wrap p-5 sm:p-0">
                <div className="w-12/12 sm:w-9/12 container mx-auto py-12">
                  <div className="max-w-lg mx-auto">
                    <label className="block text-xs font-semibold mb-2 text-gray-400">Product Name</label>
                    <input onChange={this.handleChange} name="productName" className="text-xl w-full py-2 bg-gray-50 border-2 border-gray-100 rounded-md outline-none text-center hover:bg-green-50 focus:bg-green-50 hover:border-green-100 focus:border-green-100 transition-all" placeholder="Add product name"></input>
                  </div>
                  <div className="flex flex-wrap max-w-2xl mx-auto py-5 items-center">
                    <div className="flex flex-col w-full sm:w-6/12">
                      <label className="block text-xs font-semibold mb-2 text-gray-400">Thumbnail Image</label>
                      <div onClick={this.handleUpload} className="group flex flex-col justify-center items-center h-72 w-full rounded bg-gray-50 cursor-pointer">
                        <FontAwesomeIcon className="text-gray-200 group-hover:text-green-700 transition-all" icon={faImage} size="6x" />
                        <span className="text-md text-gray-300 group-hover:text-gray-400 transition-all">Upload your pretty product image</span>
                      </div>
                      <input onChange={this.handleChange} type="hidden" name="productImage"></input>
                    </div>
                    <div className="flex w-full sm:w-6/12 pt-3 sm:pt-0">
                      <div className="sm:pl-5 w-full">
                        <div className="mb-3">
                          <label className="block text-xs font-semibold mb-2 text-gray-400">Product Price</label>
                          <input onChange={this.handleChange} name="productPrice" className="text-md bg-gray-50 w-full px-3 py-2 border-2 border-gray-100 rounded-md outline-none hover:bg-green-50 focus:bg-green-50 hover:border-green-100 focus:border-green-100 transition-all" type="number" placeholder="Add price"></input>
                        </div>
                        <div className="mb-3">
                          <label className="block text-xs font-semibold mb-2 text-gray-400">Product Description</label>
                          <textarea onChange={this.handleChange} name="productDescription" className="text-md bg-gray-50 px-3 py-2 border-2 border-gray-100 rounded-md h-32 hover:bg-green-50 focus:bg-green-50 hover:border-green-100 focus:border-green-100 transition-all" placeholder="Add something that describe your product....."></textarea>
                        </div>
                        <div className="mb-3">
                          <label className="block text-xs font-semibold mb-2 text-gray-400">Variation and Additional Information</label>
                          <button type="button" className="relative group flex justify-center items-center h-10 w-full border-2 rounded border-dashed border-gray-200 cursor-pointer outline-none focus:outline-none hover:bg-green-100  hover:border-green-100 focus:border-green-100 transition-all">
                            <FontAwesomeIcon className="text-gray-400 group-hover:text-green-700" icon={faPlus} size="1x" />
                            <span className="ml-2 text-gray-400 group-hover:text-green-700">Add data</span>
                            <span className="absolute top-0 right-0 transform -translate-x-4 -translate-y-4 bg-green-700 text-white text-xs px-2 py-1 rounded">Coming soon</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {this.state.selectedProductType == 'digital' && (
                      <>
                      <div className="flex justify-between items-center w-full mt-16">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-500">File Configuration</h4>
                          <p className="text-xs font-semibold text-gray-400">Sell your digital products</p>
                        </div>
                        <div>
                          <button className="px-5 py-1 text-white border-green-700 bg-green-700">Add Files</button>
                        </div>
                      </div>
                      <div className="w-full mt-5">
                        <div className="relative group flex flex-col justify-center items-center h-24 w-full border-2 rounded border-dashed border-gray-200 cursor-pointer outline-none focus:outline-none focus:border-green-100 transition-all mb-3">
                          <FontAwesomeIcon className="text-gray-300 group-hover:text-green-700" icon={faFolderPlus} size="3x" />
                          <span className="text-md text-gray-300 group-hover:text-gray-400 transition-all">Upload your digital file</span>
                        </div>
                        <div className="flex flex-wrap">
                          <div className="mb-3 w-full sm:w-6/12 sm:pr-3">
                            <label className="block text-xs font-semibold mb-2 text-gray-400">File name</label>
                            <input onChange={this.handleChange} name="productFileName" className="text-md bg-gray-50 w-full px-3 py-2 border-2 border-gray-100 rounded-md outline-none hover:bg-green-50 focus:bg-green-50 hover:border-green-100 focus:border-green-100 transition-all" type="text" placeholder="Add file name"></input>
                          </div>
                          <div className="mb-3 w-full sm:w-6/12">
                            <label className="block text-xs font-semibold mb-2 text-gray-400">File notes</label>
                            <input onChange={this.handleChange} name="productFileNotes" className="text-md bg-gray-50 w-full px-3 py-2 border-2 border-gray-100 rounded-md outline-none hover:bg-green-50 focus:bg-green-50 hover:border-green-100 focus:border-green-100 transition-all" type="text" placeholder="Give a notes to files like License key or Description"></input>
                          </div>
                        </div>
                      </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-center p-10 pt-32 w-12/12 sm:w-3/12 bg-green-50">
                  <FontAwesomeIcon className="text-green-700" icon={faEye} size="6x" />
                  <h2 className="text-lg font-semibold text-gray-600 my-3">Meet the product editor!</h2>
                  <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed felis felis. Vivamus viverra egestas pulvinar. Nunc efficitur magna sit amet est viverra vehicula. Vivamus vitae lacus efficitur, ornare lacus sit amet, imperdiet ex.</p>
                  <button className="mt-4 px-5 py-1 text-white border-green-700 bg-green-700">Learn more</button>
                </div>
            </div>
          </form>
        </div>
        <Modal 
          show={this.state.modalShow}
          selectedType={this.state.selectedProductType}
          handleModal={this.handleModal}
          chooseHandler={this.handleChoose} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("onlineryProducts"));

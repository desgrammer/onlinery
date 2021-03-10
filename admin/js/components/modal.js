import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArchive, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { __ } from '@wordpress/i18n';

const Modal = props => {
    return(
        <div className="modal flex fixed justify-center items-center inset-0 bg-black bg-opacity-50">
            <div className="modal-wrapper w-2/4 rounded-md bg-gray-50 p-5">
                <div className="modal-header p-5">
                    <h4 className="modal-title text-2xl text-center text-gray-600 font-medium">{onlinery_translation.admin.add_products.modal_onboarding_header}</h4>
                    <p className="text-xs text-center text-gray-400">{onlinery_translation.admin.add_products.modal_onboarding_header_description}</p>
                </div>
                <div className="modal-body">
                    <div className="product-type-wrapper flex px-10 py-5">
                        <div className="w-full flex flex-col items-center p-10 border-2 rounded-md border-gray-200">
                            <FontAwesomeIcon className="text-gray-200 group-hover:text-green-700 transition-all" icon={faBoxOpen} size="6x" />
                            <h4 className="text-lg pt-3 pb-1 font-semibold text-gray-500">{onlinery_translation.admin.add_products.modal_physical_products}</h4>
                            <p className="text-xs text-center text-gray-400">{onlinery_translation.admin.add_products.modal_physical_products_description}</p>
                        </div>
                        <div className="w-full flex flex-col items-center p-10 border-2 rounded-md border-gray-200 ml-3">
                            <FontAwesomeIcon className="text-gray-200 group-hover:text-green-700 transition-all" icon={faFileArchive} size="6x" />
                            <h4 className="text-lg pt-3 pb-1 font-semibold text-gray-500">{onlinery_translation.admin.add_products.modal_digital_products}</h4>
                            <p className="text-xs text-center text-gray-400">{onlinery_translation.admin.add_products.modal_digital_products_description}</p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer p-5">
                {/* <button className="px-5 py-2 text-white border-green-700 bg-green-700">Save</button> */}
                </div>
            </div>
        </div>
    )
}

export default Modal;
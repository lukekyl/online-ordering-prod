import React from "react"
import tw from 'twin.macro'
import styled from 'styled-components'

const Product = ({product}) => {
    // Create product card for menu.
    return (
        <>
            <div key={product.value.id} className="flex flex-col inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl hover:shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xs">
                <div className="bg-local bg-center bg-cover h-60" style={{backgroundImage: `url(${product.value.image_url})`}}></div>
                <div className="flex-grow bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">    
                    <p className="capitalize"><strong>{product.value.name}</strong></p>
                    <p>{product.value.description}</p> 
                </div> 
                <div className="flex-shrink bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                    <p className="flex-grow text-red-600 pt-2"><strong>$ {product.value.price}</strong></p>
                    <button type="button" className="flexshrink w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Add to Order
                    </button>
                </div>
            </div>
        </>
    );
}

export default Product
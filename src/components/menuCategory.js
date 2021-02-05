import React from "react"
import Product from './menuProduct'

import { useState } from '@hookstate/core';

const Category = (props) => {
// Takes products from fetch,
// Creates new category or adds product to existing and prints product card.
    let menu = props.menu
    let state = useState(menu)

    const printMenu = (menu) => {
        return menu.map(category=>{
            const printItems = (products) => {
                return products.map(product => {
                    return (
                        <div key={product.value.id} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-local" style={{backgroundImage: `url(${product.value.image_url})`}}>Image</div>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">    
                            <p><strong>{product.value.name}</strong></p>
                        </div> 
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Add to Order
                            </button>
                        </div>
                        </div>
                    )
                })
            }
            return (
            <>
            <h3>{category.value.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {printItems(category.products)}
            </div>    
            </>
            )
        })
        
    }



    return (
        <>
            {printMenu(state)}
        </>
    );
}

export default Category
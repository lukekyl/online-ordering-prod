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
                    return <p><strong>{product.value.name}</strong></p>
                })
            }
            return (
            <>
            <h3>{category.value.name}</h3>
                {printItems(category.products)}
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
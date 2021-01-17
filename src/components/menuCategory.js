import React from "react"
import Product from './menuProduct'

import { createState, useState } from '@hookstate/core';

const Category = (props) => {
// Takes products from fetch,
// Creates new category or adds product to existing and prints product card.
    let menu = props.menu
    let state = useState(menu)

    const printNames = (menu) => {
        let categories = []
        const print = menu.value.map(product => {
                if (!categories.includes(product.category)){
                    categories.push(product.category)
                }
                console.log(product)
                return <p key={product.id} id={product.id}>{product.name}</p>
        })
        console.log(categories)
        return print
    }


    return (
        <>
            {printNames(state)}
        </>
    );
}

export default Category
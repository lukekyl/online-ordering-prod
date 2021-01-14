import React from "react"
import Product from './menuProduct'

import { createState, useState } from '@hookstate/core';

const Category = (props) => {
// Takes products from fetch,
// Creates new category or adds product to existing and prints product card.
    let product = props.product
    
    let state = useState(props)
    console.log(state)
    
    return (
        <>
            <p key={product.id} id={product.id}>{product.name}</p>
        </>
    );
}

export default Category
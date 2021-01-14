import React from "react"
import Product from './menuProduct'

const Category = (props) => {
// If called, there is at least one product in this category. 
// Iterate through all products in selected category and create a product card for each.
    let n = props.product
    return (
        <>
            <p key={n.id} id={n.id}>{n.name}</p>
        </>
    );
}

export default Category
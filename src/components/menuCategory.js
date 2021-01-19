import React from "react"
import Product from './menuProduct'

import { createState, useState } from '@hookstate/core';

const Category = (props) => {
// Takes products from fetch,
// Creates new category or adds product to existing and prints product card.
    let menu = props.menu
    let state = useState(menu)

    const printCategory = (category) => {
        return <h3>{category}</h3>
    }

    const sortCategories = (menu) => {
        let categories = []
        const print = menu.value.map(product => {
                if (!categories.filter(c => c.name === product.category).length > 0){
                    let category = {
                        name: product.category,
                        product: []
                    }
                    category.product.push(product)
                    categories.push(category)
                    printCategory(category);
                } else {
                    let category = categories.filter(c => c.name === product.category)
                    category[0].product.push(product)
                }
                // console.log(product)
                return <p key={product.id} id={product.id}>{product.name}</p>
        })
        console.log(categories)
        return print
    }


    return (
        <>
            {sortCategories(state)}
        </>
    );
}

export default Category
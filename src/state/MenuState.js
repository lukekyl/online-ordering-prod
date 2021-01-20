// import React from "react"
import { createState, useState } from '@hookstate/core';



export const resourcePath = 'http://localhost:3001/product';
const fetchMenu = async () => fetch(resourcePath)
    .then(response => response.json())
    .then(productList => {
        let menu = sortMenu(productList)
        
        return menu
    })

const sortMenu = (menu) => {
        let categories = []
        const sort = menu.map(product => {
                if (!categories.filter(c => c.name === product.category).length > 0){
                    let category = {
                        name: product.category,
                        products: []
                    }
                    category.products.push(product)
                    categories.push(category)
                } else {
                    let category = categories.filter(c => c.name === product.category)
                    category[0].products.push(product)
                }
                // console.log(product)
        })
        // console.log(categories)
        return categories
    }    

let menu = []
let globalState = createState(menu)


export const useMenuState = () => {
// Fetch menu from backend. Iterate through all categories and create category component for each.    
    globalState = useState(fetchMenu)
    const state = useState(globalState);
    // console.log(state)
    return state;
    
}

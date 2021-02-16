// import React from "react"
import { createState, useState } from '@hookstate/core';



export const resourcePath = 'http://localhost:3001/products';
const fetchMenu = async () => await fetch(resourcePath)
    .then(response => response.json())
    .then(productList => {
        console.log(productList)
        let menu = sortMenu(productList.products)
        
        return menu
    })

const sortMenu = (menu) => {
        let categories = []
        menu.map(product => {
                let name = product.category;
                if (!categories.filter(c => c.name === name).length > 0){
                    let category = {
                        name: name,
                        products: []
                    }
                    category.products.push(product)
                    categories.push(category)
                } else {
                    let category = categories.filter(c => c.name === name)
                    category[0].products.push(product)
                }
        })
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

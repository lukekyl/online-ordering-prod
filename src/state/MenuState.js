// import React from "react"
import { createState, useState } from '@hookstate/core';



export const resourcePath = 'http://localhost:3001/product';
const fetchMenu = async () => fetch(resourcePath)
    .then(response => response.json())
    .then(productList => {
        products = productList
        return products
    })

let products = []
let globalState = createState(products)


export const useMenuState = () => {
// Fetch menu from backend. Iterate through all categories and create category component for each.    
    globalState = useState(fetchMenu)
    const state = useState(globalState);

    return state;
    
}

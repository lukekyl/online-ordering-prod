import React from "react"
import { createState, useState } from '@hookstate/core';

// export interface Task {
//     id: string;
//     name: string;
//     done: boolean;
// }




export const resourcePath = 'http://localhost:3001/product';

const fetchMenu = () => fetch(resourcePath)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return products
    })


export const useMenuState = () => {
// Fetch menu from backend. Iterate through all categories and create category component for each.    
    
    const state = useState(fetchMenu);

    return state;
    
}

import React from "react"
import Category from './menuCategory'

import { createState, useState } from '@hookstate/core';

const globalState = createState(0)


    

    

const Menu = () => {
// Fetch menu from backend. Iterate through all categories and create category component for each.    
    const resourcePath = 'http://localhost:3001/product';
    const fetchMenu = () => fetch(resourcePath)
        .then(response => response.json())
        .then(products => {
            console.log(products)
            return products
        })

    const state = useState(new Promise(fetchMenu));

    // console.log(state)
    if (state.promised) {
        return <p>Loading {resourcePath}</p>;
    }

    if (state.error) {
        return <p>Failed to load {resourcePath}<br />
            <code style={{ color: 'red' }}>{state.error.toString()}</code>
        </p>
    }


    return (
        <>
            <p key=''>Loaded {resourcePath}</p>
        </>
    );
}

export default Menu
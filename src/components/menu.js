import React from "react"
import Category from './menuCategory'

import { createState, useState } from '@hookstate/core';

const globalState = createState(0)

const resourcePath = 'http://localhost:3001/product';
    const fetchMenu = async () => await fetch(resourcePath)
        .then(r => {
            console.log(r.json())
            return r.json()
        })
    globalState.set(fetchMenu)
    

    

const Menu = () => {
// Fetch menu from backend. Iterate through all categories and create category component for each.
    const state = useState(globalState);

    // console.log(state)
    return (
        <>
            {/* <p>{state.value}</p> */}
        </>
    );
}

export default Menu
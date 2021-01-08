import React from "react"
import Category from './menuCategory'

import { createState, useState } from '@hookstate/core';

const globalState = createState(0)

const resourcePath = 'http://localhost:3001/product';
    const fetchMenu = () => fetch(resourcePath)
        .then(r => {
            r.text()
            console.log(r)
        }).
    globalState.set(fetchMenu)


const Menu = () => {
// Fetch menu from backend. Iterate through all categories and create category component for each.
    resourcePath
    const state = useState(globalState);

    console.log(state)

    return (
        <>

        </>
    );
}

export default Menu
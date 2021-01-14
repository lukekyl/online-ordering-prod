import React from "react"
import Category from './menuCategory'

import { createState, useState } from '@hookstate/core';

// const globalState = createState(0)


    

    

const Menu = () => {
// Fetch menu from backend. Iterate through all categories and create category component for each.    
    const resourcePath = 'http://localhost:3001/product';
    const fetchMenu = () => fetch(resourcePath)
        .then(response => response.json())
        .then(products => {
            console.log(products)
            return products
        })

    const state = useState(fetchMenu);

    const printNames = (props) => {
        return props.value.map(p => {
                console.log(p)
                // return <p key={n.id} id={n.id}>{n.name}</p>
                return <Category product={p}/>
            })
    }

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
            <p>Loaded Menu:</p>
            <div className="Menu">{printNames(state)}</div>
        </>
    );
}

export default Menu
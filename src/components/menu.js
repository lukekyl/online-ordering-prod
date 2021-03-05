import React from "react"
import Category from './menuCategory'
import { useState } from '@hookstate/core';
import { useMenuState, resourcePath } from '../state/MenuState.js';

// const globalState = createState(0)

const Menu = () => {

    const state = useMenuState();

    const printNames = (props) => {
        return <Category menu={props}/>
    }
    console.log(state)
    
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
            <div className="Menu">{printNames(state)}</div>
        </>
    );
}

export default Menu
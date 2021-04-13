import React from "react"
import Category from './menuCategory'
import { useState } from '@hookstate/core';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useMenuState, resourcePath } from '../state/MenuState.js';

// const globalState = createState(0)

const Menu = () => {

    const state = useMenuState();

    const printMenu = (props) => {
        return <Category menu={props}/>
    }
    console.log(state)

    const printCategoryTabs = (className) => {
        return state.value.map(category=>{
            let url = `#${category.name}`
            return <HashLink smooth to={url}><option key={category.id} className={className}>{category.name}</option></HashLink>
        })
    }
    
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
            {/* Page title ends */}
            <div className="bg-gray-200 pb-10">
                <div className="container px-6 mx-auto">
                    <div className="relative z-10 w-full">
                        <div className="w-full -mt-8 h-auto">
                            <div className="w-full h-auto lg:h-20 mb-6 rounded shadow bg-white">
                                <div className="lg:hidden bg-white w-full relative">
                                    <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="8 9 12 5 16 9" />
                                            <polyline points="16 15 12 19 8 15" />
                                        </svg>
                                    </div>
                                    <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                                        <HashLink smooth to="#top">
                                        <option selected className="text-sm text-gray-600">
                                            Full Menu 
                                        </option>
                                        </HashLink>
                                        {printCategoryTabs("text-sm text-gray-600")}
                                    </select>
                                </div>
                                <ul className="hidden lg:flex flex-row items-center h-full">
                                    <li className="ml-4 my-2 lg:my-0 rounded text-base text-gray-800 px-4 py-2 bg-gray-200">
                                    <HashLink smooth to="#Top">Full Menu</HashLink>
                                    </li>
                                    {printCategoryTabs("pl-10 my-0 text-base text-gray-600")}
                                </ul>
                            </div>
                            {/* Remove class [ h-64 ] when adding a card block */}
                            <div className="container mx-auto">
                                <div className="bg-white w-full h-full rounded shadow p-8 xs:flex flex-col items-center justify-center" id="Top">{printMenu(state)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="Menu">{printNames(state)}</div> */}
        </>
    );
}

export default Menu
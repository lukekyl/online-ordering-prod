import React from "react"
import Product from './menuProduct'

import { useState } from '@hookstate/core';
import tw from 'twin.macro'
import styled from 'styled-components'

const Category = (props) => {
// Takes products from fetch,
// Creates new category or adds product to existing and prints product card.
    let menu = props.menu
    const state = useState(menu)

    const printMenu = menu => {
        return menu.map(category=>{
            const printItems = (products) => {
                return products.map(product => {
                        return <Product product={product} />
                })
            }
            return (
            <>
            

            {/* Old Styles */}
            <h3 className="py-2.5 text-lg font-bold">{category.value.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {printItems(category.products)}
            </div>    
            </>
            )
        })
        
    }



    return (
        <>
            {printMenu(state)}
        </>
    );
}

export default Category
import React from "react";
import propTypes from "prop-types";
import Item from "./Item";
import './css/ItemPage.css';

function ItemPage ({items, onAddToCart}) {
    return(
        <ul className="ItemPage-items">
            {items.map( item => 
                <li key={item.id} className='ItemPage-item'>
                <Item item={item}>
                <button className="Item-addToCart" onClick={() => onAddToCart(item)}>
                    Add to Cart
                </button>
                </Item>
            </li>)}
        </ul>
    );
} 

ItemPage.propTypes = {
    items: propTypes.array.isRequired,
    onAddToCart: propTypes.func.isRequired
};


export default ItemPage;
import React from "react";
import propTypes from "prop-types";
import "./css/Item.css"

const Item = ({item, children}) => {
   return(
    <div className="Item">
        <div className="Item-left">
            <div className="Item-image"></div>
            <div className="Item-title">
                {item.name}
            </div>
            <div className="Item-descripton">
                {item.description}
            </div>
        </div>
        <div className="Item-right">
            <div className="Item-price">
                ${item.price}
            </div>
            {children}
        </div>
    </div>
   );
}

Item.propTypes = {
    item: propTypes.object.isRequired,
};

export default Item;
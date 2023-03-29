import React from 'react';
import './Cart.css'
const Cart = ({storedMeal}) => {

    return (
        <div>
            {
                storedMeal.map((meal, index)=> <h1>{index + 1}. {meal.strMeal}</h1>)
            }
        </div>
    );
};

export default Cart;
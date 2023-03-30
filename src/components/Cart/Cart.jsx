import React from 'react';
import './Cart.css'
const Cart = ({storedMeal}) => {
const [objMeal] = storedMeal



    return (
        <div>
            {
                storedMeal.map((meal, index)=> <h1 key={index}> {index + 1}. {meal.strMeal} Quantity : {meal.quantity}</h1>)
            }
            <h3> </h3>
        </div>
    );
};

export default Cart;
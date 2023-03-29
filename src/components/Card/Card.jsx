import React from 'react';

const Card = ({ meal, clickHandle}) => {
const { strMealThumb, strMeal} = meal
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <div className="card-actions justify-end">
                    <button onClick={()=>clickHandle(meal)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
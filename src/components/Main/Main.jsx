import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Main.css'
const Main = () => {

    const [meals, setMeals] = useState([])
    const [storedMeal, setStoredMeal] = useState([])
    useEffect(()=>{
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res=>res.json())
      .then(data=> setMeals(data.meals))
    },[])

    function buyNowHandleClick(meal) {
        const findedMeal = storedMeal.find(ml=> ml.idMeal == meal.idMeal)
        if (!findedMeal) {
            setStoredMeal([...storedMeal, meal])
        }
       

    }


    return (
        <div className='main-container'>
            <div className='card-container flex flex-wrap gap-4 p-10'>
                {
                    meals.map(meal=><Card key={meal.strYoutube} meal={meal} clickHandle={buyNowHandleClick}></Card>)
                }
            </div>

            <div>
                <h1 className='text-3xl py-6 text-center'>cart</h1>
                <Cart storedMeal={storedMeal}>

                </Cart>
            </div>
        </div>
    );
};

export default Main;
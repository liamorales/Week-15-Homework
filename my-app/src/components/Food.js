import React from 'react';
import {NewFoodForm} from './NewFoodForm';

export const Food =(props) => {
    const {food, updateFood} =props;

    const deleteFood = (foodID) => {
        const updateFood ={
            ...food,
            foods: food.foods.filter((x) => x._id !== foodID)
        };
        updateFood(updateFood);
    }

    const addNewFood = (food) => updateFood({...food, foods:[...food.foods, food]})
    
    const foods = () => (
        <ul>
            {food.foods.map((foods, index) =>
            <li key={index}>
                <label> {`${food.name} Area: ${food.area}`}</label>
                <button onClick={(e)=> deleteFood(food._id)}>Delete</button>
            </li>
            )}
        </ul>
    );

    return(
        <div>
           <h1>{food.name}</h1> 
           {
               foods({foods, foodId: food._id, deleteFood})
           }
           <NewFoodForm addNewFood={addNewFood}/>
        </div>
    );
}
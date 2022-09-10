import React from 'react';
import { Food } from './Food';
import { foodApi } from '../rest/ourApi';

export class FoodList extends React.Component {
    state = {
        food:[]
    };
    componentDidMount(){
        this.fetchFood();
    }
    fetchFood = async()=> {
        const foods =await foodApi.get();
        this.setState({foods});
    }
    updateFood = async(updatedFood) => {
        await foodApi.put(updatedFood);
        this.fetchFood();
    }
    render(){
        return(
            <div className='food-list'>
                {this.state.food.map((food) =>
                <Food
                    food={food}
                    key={food._id}
                    updateFood={this.updateFood}
                />
                )}
            </div>
        )
    }
}
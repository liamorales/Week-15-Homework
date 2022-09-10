
import './App.css';
import React, {Component} from 'react';
import { FoodList } from './components/FoodList';
import { NewFoodForm } from './components/NewFoodForm';
import { Food } from './components/Food';

class App extends Component {
  render(){
    return(
      <div>
        <FoodList />
        <NewFoodForm />
        <Food />
      </div>
    )
  }
}



export default App;

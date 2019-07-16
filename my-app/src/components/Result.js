import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FoodPage from '../pages/FoodPage';
import DrinkPage from '../pages/DrinkPage';
import '../styles/Result.css';

const Result = () => {

    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/Food" exact component={FoodPage} />
            <Route path="/Drink" exact component={DrinkPage} />
        </>
    );
}

export default Result;
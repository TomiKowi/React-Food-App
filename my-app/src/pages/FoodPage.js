import React, { Component } from 'react';

class FoodPage extends Component {


    state = {
        meal: "",
    }

    handleSearchFoodClick = () => {

        const API = "https://www.themealdb.com/api/json/v1/1/random.php"

        fetch(API)
            .then(response => {
                if (response.ok) { return response }
                throw Error("Ups, something went wrong")
            })
            .then(response => response.json())
            .then(data => {
                this.setState(state => ({

                    meal: data.meals[0].idMeal
                }))
            })
    }

    render() {

        return (
            <div className="foodContainer">
                <button onClick={this.handleSearchFoodClick}>Search</button>
                <h2>{this.state.meal}</h2>
            </div>
        );
    }
}

export default FoodPage;
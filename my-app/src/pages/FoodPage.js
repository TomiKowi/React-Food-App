import React, { Component } from 'react';
import '../styles/FoodPage.css'

class FoodPage extends Component {


    state = {
        title: "",
        image: "",
        recipe: "",
        origin: "",
        category: "",
        movie: "",
    }

    handleSearchFoodClick = () => {

        const API = "https://www.themealdb.com/api/json/v1/1/random.php"
        const index = 0;

        fetch(API)
            .then(response => {
                if (response.ok) { return response }
                throw Error("Ups, something went wrong")
            })
            .then(response => response.json())
            .then(data => {
                this.setState(state => ({
                    title: data.meals[index].strMeal,
                    image: data.meals[index].strMealThumb,
                    recipe: data.meals[index].strInstructions,
                    origin: data.meals[index].strArea,
                    category: data.meals[index].strCategory,
                    movie: data.meals[index].strYoutube,
                }))
            })
    }

    render() {

        const { title, image, recipe, origin, category, movie } = this.state

        return (
            <div className="foodContainer">
                <div className="searchMeal">
                    <button onClick={this.handleSearchFoodClick}>Random Search</button>
                </div>
                <div className="myMeal">
                    <div className="mealTitle">
                        {title ? <p>{title}</p> : null}
                    </div>
                    <div className="mealContainer">
                        <div className="mealDetails">
                            <div className="mealImage">
                                {image ? <img src={image} alt="Food" /> : null}
                            </div>
                            <div className="mealIntro">
                                {origin ? <p>Origin of dish: <span>{origin}</span></p> : null}
                                {category ? <p>Category of dish: <span>{category}</span></p> : null}
                                {movie ? <p>Introduction movie: <span><a href={movie} target="_blank" rel="noopener noreferrer">Click me!</a></span></p> : null}
                            </div>
                        </div>
                        <div className="mealRecipe">
                            {recipe ? <p>{recipe}</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodPage;
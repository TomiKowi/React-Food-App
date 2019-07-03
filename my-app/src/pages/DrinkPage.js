import React, { Component } from 'react';
import '../styles/DrinkPage.css';

class DrinkPage extends Component {

    state = {
        title: "",
        image: "",
        recipe: "",
    }

    handleSearchDrinkClick = () => {

        const API = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        const index = 0;

        fetch(API)
            .then(response => {
                if (response.ok) { return response }
                throw Error("Ups, something went wrong")
            })
            .then(response => response.json())
            .then(data => {
                this.setState(state => ({
                    title: data.drinks[index].strDrink,
                    image: data.drinks[index].strDrinkThumb,
                    recipe: data.drinks[index].strInstructions,
                }))
            })
    }
    render() {

        const { title, image, recipe } = this.state

        return (
            <div className="drinksContainer">
                <div className="searchDrink">
                    <button onClick={this.handleSearchDrinkClick}>Random Search</button>
                </div>
                <div className="myDrink">
                    <div className="drinkTitle">
                        {title ? <p>{title}</p> : null}
                    </div>
                    <div className="drinkContainer">
                        <div className="drinkImage">
                            {image ? <img src={image} alt="Food" /> : null}
                        </div>
                        <div className="drinkRecipe">
                            {recipe ? <p>{recipe}</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DrinkPage;
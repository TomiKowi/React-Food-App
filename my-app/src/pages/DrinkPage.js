import React, { Component } from 'react';
import '../styles/DrinkPage.css';

class DrinkPage extends Component {

    state = {
        value: "",
        title: "",
        image: "",
        recipe: "",
    }

    handleSearchRandomDrink = () => {

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

    handleSearchDrink = (e) => {
        e.preventDefault()
        const API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.value}`
        const index = 0;

        fetch(API)
            .then(response => {
                if (response.ok) { return response }
                throw Error("Ups, something went wrong")
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState(state => ({
                    title: data.drinks[index].strDrink,
                    image: data.drinks[index].strDrinkThumb,
                    recipe: data.drinks[index].strInstructions,
                }))
            })
    }

    handleSearchByNameChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {

        const { title, image, recipe } = this.state

        return (
            <div className="drinksContainer">
                <div className="searchDrink">
                    <button onClick={this.handleSearchRandomDrink}>Random Search</button>
                    <form>
                        <input onChange={this.handleSearchByNameChange} type="text" placeholder={"enter name..."} value={this.state.value} />
                        <button onClick={this.handleSearchDrink}>Search by Name</button>
                    </form>
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
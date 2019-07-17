import React, { Component } from 'react';
import '../styles/DrinkPage.css';

class DrinkPage extends Component {

    state = {
        value: "",
        title: "",
        image: "",
        recipe: "",
        category: "",
        glass: "",
        alcoholic: "",
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
                    category: data.drinks[index].strCategory,
                    glass: data.drinks[index].strGlass,
                    alcoholic: data.drinks[index].strAlcoholic,
                }))
            })
    }

    handleSearchDrink = (e) => {
        e.preventDefault()

        if (this.state.value === "") { alert("If you want search, enter name or search random!") }
        else {
            const API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.value}`
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
                        category: data.drinks[index].strCategory,
                        glass: data.drinks[index].strGlass,
                        alcoholic: data.drinks[index].strAlcoholic,
                    }))
                })
        }
    }


    handleSearchByNameChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {

        const { title, image, recipe, category, glass, alcoholic } = this.state

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
                        <div className="drinkDetails">
                            <div className="drinkImage">
                                {image ? <img src={image} alt="Food" /> : null}
                            </div>
                            <div className="drinkIntro">
                                {category ? <p>Category: <span>{category}</span></p> : null}
                                {glass ? <p>Recommended glass: <span>{glass}</span></p> : null}
                                {alcoholic ? <p>Type: <span>{alcoholic}</span></p> : null}
                            </div>
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
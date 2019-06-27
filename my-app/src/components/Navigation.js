import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const navList = [
    { name: "Home", path: "/", exact: true },
    { name: "Food", path: "/Food" },
    { name: "Drink", path: "/Drink" },
    { name: "Favorites", path: "/Favorites" },
]

const Navigation = () => {


    const list = navList.map(item => (
        <li key={item.name}><NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>
    ))
    return (
        <nav className="navigation">
            <ul>
                {list}
            </ul>
        </nav>
    );
}

export default Navigation;
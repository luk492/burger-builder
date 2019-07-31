import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredient key={key + i} type={key}/>
            });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
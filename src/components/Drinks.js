import React from "react"
import { useSelector } from "react-redux"
import { orderDrinks } from "../selectors/drinkSelector"

const Drink = ({ drink }) => {
    return (
        <li>
            <div>name: {drink.name}</div>
            <div>price: {drink.price}€</div>
            <div>alcohol: {drink.alcohol}%</div>
            <div>price per L of ethanol: {drink.priceperethanolL}€</div>
            <br/>
        </li>
    )
}

const Drinks = () => {
    //const drinks = useSelector(state => state.drinks)
    const drinks = useSelector(orderDrinks)
    const listSize = useSelector(state => state.listSize)
    console.log(`list size is ${listSize}`)
    console.log(`drinks: ${drinks.length}`)

    const drinksToShow = drinks
        .filter(d => d.priceperethanolL !== 0)
        .slice(0, listSize)

    return (
        <ul>
            {drinks.map(d => 
                <Drink 
                    drink={d}
                    key={d.id}
                />  
            )}
        </ul>
    )
}

export default Drinks
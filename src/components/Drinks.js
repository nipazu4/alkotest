import React from "react"
import { useSelector } from "react-redux"
import { orderDrinks } from "../selectors/drinkSelector"

const Drink = ({ drink }) => {
    return (
        <li>
            <div>id: {drink.id}</div>
            <div>name: {drink.name}</div>
            <div>price: {drink.price}€</div>
            <div>alcohol: {drink.alcohol}%</div>
            <div>volume: {drink.size} L</div>
            <div>price per L of ethanol: {drink.priceperethanolL}{isNaN(drink.priceperethanolL) ? "":"€"}</div>
            <div>price per L: {drink.priceperL}€</div>
            <br/>
        </li>
    )
}

const Drinks = () => {
    //const drinks = useSelector(state => state.drinks)
    const drinks = useSelector(orderDrinks)
    //const listSize = useSelector(state => state.listSize)
    //console.log(`list size is ${listSize}`)
    //console.log(`drinks: ${drinks.length}`)

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
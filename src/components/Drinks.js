import React from "react"
import { useSelector } from "react-redux"
import { orderDrinks } from "../selectors/drinkSelector"

const Drink = ({ drink }) => {
    return (
        <tr>
            <td>
                <img src={drink.imgUrl} alt={drink.name}/>
            </td>
            <td>
                <div>id: {drink.id}</div>
                <div>name: {drink.name}</div>
                <div>price: {drink.price}€</div>
                <div>alcohol: {drink.alcohol}%</div>
                <div>manufacturer: {drink.manufacturer}</div>
                <div>volume: {drink.size} L</div>
                <div>price per L of ethanol: {drink.priceperethanolL}{isNaN(drink.priceperethanolL) ? "":"€"}</div>
                <a href={drink.url} rel="noreferrer" target="_blank">Alko</a>
            </td>
        </tr>
    )
}

const Drinks = () => {
    //const drinks = useSelector(state => state.drinks)
    const drinks = useSelector(orderDrinks)
    //const listSize = useSelector(state => state.listSize)
    //console.log(`list size is ${listSize}`)
    //console.log(`drinks: ${drinks.length}`)

    return (
        <table>
            <tbody>
                {drinks.map(d => 
                    <Drink 
                        drink={d}
                        key={d.id}
                    />  
                )}
            </tbody>
        </table>
    )
}

export default Drinks
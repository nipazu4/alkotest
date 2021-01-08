import React from "react"
import { useSelector } from "react-redux"
import { orderDrinks } from "../selectors/drinkSelector"

const Item = ({ item }) => {
    return (
        <tr>
            <td>
                <img
                    src={item.imgUrl}
                    alt={item.name}
                    crossOrigin="anonymous"
                />
            </td>
            <td>
                <div>id: {item.id}</div>
                <div>name: {item.name}</div>
                <div>price: {item.price}€</div>
                <div>alcohol: {item.alcohol}%</div>
                <div>manufacturer: {item.manufacturer}</div>
                <div>volume: {item.size} L</div>
                <div>price per L of ethanol: {item.priceperethanolL}{isNaN(item.priceperethanolL) ? "":"€"}</div>
                <a href={item.url} rel="noreferrer" target="_blank">Alko</a>
                <div>type: {item.type}</div>
            </td>
        </tr>
    )
}

const Items = () => {
    const drinks = useSelector(orderDrinks)
    return (
        <table>
            <tbody>
                {drinks.map(d => 
                    <Item 
                        item={d}
                        key={d.id}
                    />  
                )}
            </tbody>
        </table>
    )
}

export default Items
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import InfiniteScroll from "react-infinite-scroll-component"
import { orderDrinks } from "../selectors/drinkSelector"
import { setListSize } from "../reducers/listSizeReducer"

const Drink = ({ drink }) => {
    return (
        <tr>
            <td>
                <img
                    src={drink.imgUrl}
                    alt={drink.name}
                    crossOrigin="anonymous"
                />
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
                <div>type: {drink.type}</div>
            </td>
        </tr>
    )
}

const Items = () => {
    const dispatch = useDispatch()

    const currentListSize = useSelector(state => state.listSize)
    const sortedDrinks = useSelector(orderDrinks)

    console.log(`drink list length: ${sortedDrinks.length}`)
    console.log(`showing ${sortedDrinks.length} drinks`)

    const showMoreDrinks = () => {
        dispatch(setListSize(currentListSize + 20))
    }

    return (
        <InfiniteScroll
            dataLength={sortedDrinks.length}
            next={showMoreDrinks}
            hasMore={true}
            endMessage={<h1>this is the end</h1>}
        >
            <table>
                <tbody>
                    {sortedDrinks.map(d => 
                        <Drink 
                            drink={d}
                            key={d.id}
                        />  
                    )}
                </tbody>
            </table>
        </InfiniteScroll>
    )
}

export default Items
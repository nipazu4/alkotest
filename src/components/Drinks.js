import React from "react"
import { useDispatch, useSelector } from "react-redux"
import InfiniteScroll from "react-infinite-scroll-component"
import { orderDrinks } from "../selectors/drinkSelector"
import { setListSize } from "../reducers/listSizeReducer"
import "../styles/drinkStyle.css"

const Drink = ({ drink }) => {

    return (
        <div className="drinkContainer">
            <div className="drinkChildDiv drinkImg">
                <img
                    src={drink.imgUrl}
                    alt={drink.name}
                    loading="lazy"
                    height="192"
                    width="160"

                />
            </div>
            <div className="drinkChildDiv drinkTable">
                <table>
                    <colgroup>
                        <col style={{ width: "50%" }}/>
                        <col style={{ width: "50%" }}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th colSpan="2">{drink.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>price:</td>
                            <td>{drink.price.toFixed(2)}€</td>
                        </tr>
                        <tr>
                            <td>alcohol:</td>
                            <td>{drink.alcohol}%</td>
                        </tr>
                        <tr>
                            <td>manufacturer:</td>
                            <td>{drink.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>volume:</td>
                            <td>{drink.size} L</td>
                        </tr>
                        <tr>
                            <td>price per L of ethanol:</td>
                            <td>
                                {isNaN(drink.priceperethanolL) ? drink.priceperethanolL : drink.priceperethanolL.toFixed(2)}{isNaN(drink.priceperethanolL) ? "":"€"}
                            </td>
                        </tr>
                        <tr>
                            <td>type:</td>
                            <td>{drink.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="drinkChildDiv drinkDescription">
                {drink.description}
            </div>
        </div>
    )
}

const Items = () => {
    const dispatch = useDispatch()

    const currentListSize = useSelector(state => state.listSize)
    const sortedDrinks = useSelector(orderDrinks)
    //console.log(`showing ${sortedDrinks.length} drinks`)

    const showMoreDrinks = () => {
        dispatch(setListSize(currentListSize + 20))
    }

    return (
        <div id="drinkList">
            <InfiniteScroll
                dataLength={sortedDrinks.length}
                next={showMoreDrinks}
                hasMore={true}
                endMessage={<h1>this is the end</h1>}
            >
                {sortedDrinks.map(d => 
                    <Drink 
                        drink={d}
                        key={d.id}
                    />  
                )}
            </InfiniteScroll>
        </div>
    )
}

export default Items
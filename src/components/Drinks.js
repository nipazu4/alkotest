import React, { useState } from "react"
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

const BackToTopButton = () => {
    const backToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <button
            onClick={() => backToTop()}
            style={{ position: "fixed", bottom: 0, width: "100%", height: 40 }}
        >
            back to top
        </button>
    )
}

const Items = () => {
    const dispatch = useDispatch()

    const currentListSize = useSelector(state => state.listSize)
    const sortedDrinks = useSelector(orderDrinks)
    const [showBackToTop, setShowBackToTop] = useState(false)

    //console.log(`showing ${sortedDrinks.length} drinks`)

    const showMoreDrinks = () => {
        dispatch(setListSize(currentListSize + 20))
    }

    const checkPagePosition = () => {
        //console.log(`current position: ${window.pageYOffset}`)
        if(window.pageYOffset === 0) {
            dispatch(setListSize(20))
        } else if(window.pageYOffset > 3000 && showBackToTop === false) {
            setShowBackToTop(true)
        } else if(window.pageYOffset <= 3000 && showBackToTop === true) {
            setShowBackToTop(false)
        }
    }

    return (
        <div>
            <InfiniteScroll
                dataLength={sortedDrinks.length}
                next={showMoreDrinks}
                hasMore={true}
                endMessage={<h1>this is the end</h1>}
                onScroll={() => checkPagePosition()}
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
            {showBackToTop ? <BackToTopButton /> : <></>}
        </div>
    )
}

export default Items
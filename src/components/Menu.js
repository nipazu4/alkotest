import { setListSize } from "../reducers/listSizeReducer"
import { setSortMethod, toggleAlcoholic, toggleOrder } from "../reducers/sortReducer"

import { useDispatch, useSelector } from "react-redux"

const ListSizeButtons = () => {
    const dispatch = useDispatch()
    return (
        <div>
            list size:
            <button onClick={() => dispatch(setListSize(10))}>10</button>
            <button onClick={() => dispatch(setListSize(25))}>25</button>
            <button onClick={() => dispatch(setListSize(50))}>50</button>
            <button onClick={() => dispatch(setListSize(100))}>100</button>
        </div>
    )
}

const OrderByButtons = () => {
    const dispatch = useDispatch()
    return (
        <div>
            order by:
            <button onClick={() => dispatch(setSortMethod("price"))}>price</button>
            <button onClick={() => dispatch(setSortMethod("name"))}>name</button>
            <button onClick={() => dispatch(setSortMethod("alcohol"))}>alcohol content</button>
            <button onClick={() => dispatch(setSortMethod("pple"))}>price per litre of pure ethanol</button>
            <button onClick={() => dispatch(setSortMethod("ppl"))}>price per litre</button>
            <button onClick={() => dispatch(setSortMethod("size"))}>size</button>
            <button onClick={() => dispatch(setSortMethod("id"))}>id</button>
        </div>
    )
}

const ToggleAlcohol = () => {
    const dispatch = useDispatch()
    const isAlcoholic = useSelector(state => state.sortOptions.toggleAlcoholic)
    return (
        <div>
            toggle alcoholic drinks:
            <button onClick={() => dispatch(toggleAlcoholic())}>alcohol? {isAlcoholic ? "yes":"no"}</button>
        </div>
    )
}

const ToggleOrder = () => {
    const dispatch = useDispatch()
    const orderDirection = useSelector(state => state.sortOptions.toggleOrder) //asc=true, desc=false
    return (
        <div>
            toggle order: {orderDirection ? "ascending":"descending"}
            <button onClick={() => dispatch(toggleOrder())}>toggle sorting order</button>
        </div>
    )
}

const Menu = () => {
    return (
        <div>
            <ListSizeButtons />
            <OrderByButtons />
            <ToggleAlcohol />
            <ToggleOrder />
        </div>
    )
}

export default Menu
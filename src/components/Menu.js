import { setListSize } from "../reducers/listSizeReducer"
import { filterSearch, setSortMethod, toggleAlcoholic, toggleOrder } from "../reducers/sortReducer"

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
            alcohol? 
            <button onClick={() => dispatch(toggleAlcoholic())}>{isAlcoholic ? "yes":"no"}</button>
        </div>
    )
}

const ToggleOrder = () => {
    const dispatch = useDispatch()
    const orderDirection = useSelector(state => state.sortOptions.toggleOrder) //asc=true, desc=false
    return (
        <div>
            order: {orderDirection ? "ascending":"descending"}
            <button onClick={() => dispatch(toggleOrder())}>toggle</button>
        </div>
    )
}

const SearchBar = () => {
    const dispatch = useDispatch()

    const handleSearchChange = (event) => {
        event.preventDefault()
        //console.log(`search: ${event.target.value}`)
        dispatch(filterSearch(event.target.value))
    }

    return (
        <div>
            search 
            <input type="text" onChange={(e) => handleSearchChange(e)}></input>
        </div>
    )
}

const Menu = () => {
    return (
        <div>
            <ListSizeButtons />
            <OrderByButtons />
            <ToggleOrder />
            <ToggleAlcohol />
            <SearchBar />
        </div>
    )
}

export default Menu
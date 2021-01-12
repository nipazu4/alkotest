import React from "react"
import { filterSearch, setSortMethod, toggleAlcoholic, toggleOrder } from "../reducers/sortReducer"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import { setListSize } from "../reducers/listSizeReducer"
import "../styles/Menu.css"

const OrderByButtons = () => {
    const dispatch = useDispatch()

    const options = [
        { value: "name", label: "name" },
        { value: "price", label: "price" },
        { value: "alcohol", label: "alcohol content" },
        { value: "pple", label: "price per litre of pure ethanol" },
        { value: "ppl", label: "price per litre" },
        { value: "size", label: "size" },
        { value: "id", label: "id" },
    ]

    const changeOrder = (option) => {
        dispatch(setSortMethod(option.value))
        dispatch(setListSize(20))
    }

    return (
        <div id="orderDrinksBy" className="menuItem">
            <Select
                placeholder={"sort drinks by"}
                options={options}
                onChange={(option) => changeOrder(option)}
                isSearchable={false}
            />
        </div>
    )
}

const ToggleAlcohol = () => {
    const dispatch = useDispatch()

    const isAlcoholic = useSelector(state => state.sortOptions.toggleAlcoholic)

    const toggleAlcohol = () => {
        dispatch(toggleAlcoholic())
        dispatch(setListSize(20))
    }

    return (
        <div id="alcoholToggle" className="menuItem">
            <button onClick={() => toggleAlcohol()}>showing {isAlcoholic ? "alcoholic":"non-alcoholic"}</button>
        </div>
    )
}

const ToggleOrder = () => {
    const dispatch = useDispatch()

    const orderDirection = useSelector(state => state.sortOptions.toggleOrder) //asc=true, desc=false

    const toggle = () => {
        dispatch(toggleOrder())
        dispatch(setListSize(20))
    }

    return (
        <div id="orderToggle" className="menuItem">
            <button onClick={() => toggle()}>order: {orderDirection ? "ascending":"descending"}</button>
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
        <input
            id="searchInput"
            className="menuItem"
            type="text"
            onChange={(e) => handleSearchChange(e)}
            placeholder="search"
        />
    )
}

const LastFetched = () => {
    const dateString = useSelector(state => state.date)
    const date = new Date(dateString)
    return (
        <div id="lastFetched" className="menuItem">
            <div>
                Information last fetched:
            </div>
            <div>
                {date.toLocaleString()} 
            </div>
        </div>
    )
}

const Menu = () => {
    return (
        <div id="menuContainer">
            <SearchBar />
            <OrderByButtons />
            <ToggleOrder />
            <ToggleAlcohol />
            <LastFetched />
        </div>
    )
}

export default Menu
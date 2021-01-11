import React from "react"
import { filterSearch, setSortMethod, toggleAlcoholic, toggleOrder } from "../reducers/sortReducer"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import { setListSize } from "../reducers/listSizeReducer"

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
        <div>
            order by:
            <Select
                defaultValue={options.filter(o => o.value === "pple")}
                options={options}
                onChange={(option) => changeOrder(option)}
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
        <div>
            alcohol? 
            <button onClick={() => toggleAlcohol()}>{isAlcoholic ? "yes":"no"}</button>
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
        <div>
            order: {orderDirection ? "ascending":"descending"}
            <button onClick={() => toggle()}>toggle</button>
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

const LastFetched = () => {
    const dateString = useSelector(state => state.date)
    const date = new Date(dateString)
    return (
        <div>
            Information last fetched: {date.toLocaleString()} 
        </div>
    )
}

const Menu = () => {
    const menuStyle = {
        backgroundColor:"white",
        boxShadow: "0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)",
        padding: "10px",
    }

    return (
        <div style={menuStyle}>
            <LastFetched />
            <OrderByButtons />
            <ToggleOrder />
            <ToggleAlcohol />
            <SearchBar />
        </div>
    )
}

export default Menu
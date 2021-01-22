import { filterSearch } from "../reducers/sortReducer"
import { useDispatch } from "react-redux"
import "../styles/Menu.css"

const SearchBar = () => {
    const dispatch = useDispatch()

    const handleSearchChange = (event) => {
        event.preventDefault()
        //console.log(`search: ${event.target.value}`)
        dispatch(filterSearch(event.target.value))
    }

    return (
        <div id="searchContainer">
            <input
                id="searchInput"
                className="menuItem"
                type="text"
                onChange={(e) => handleSearchChange(e)}
                placeholder="search"
            />
        </div>
    )
}

export default SearchBar
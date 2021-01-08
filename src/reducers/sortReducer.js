const initialState = {
    method: "price",
    toggleAlcoholic: true,
    toggleOrder: true,
    searchFilter: "",
} //state.sortOptions rakenne

const sortReducer = (state = initialState, action) => {
    //console.log(`state now: ${JSON.stringify(state)}`)

    switch(action.type) {
        case "method":
            //console.log(`method: ${action.data}`)
            return {
                ...state,
                method: action.data.toLowerCase()
            }
        case "toggleAlcoholic":
            //console.log(`state.toggleAlcoholic: ${state.toggleAlcoholic}`)
            return {
                ...state,
                toggleAlcoholic: !state.toggleAlcoholic
            }
        case "toggleOrder":
            //console.log(`state.toggleOrder: ${state.toggleOrder ? "asc":"desc"}`) //asc=true, desc=false
            return {
                ...state,
                toggleOrder: !state.toggleOrder
            }
        case "filterSearch":
            //console.log(`filter now: ${state.searchFilter}`)
            return {
                ...state,
                searchFilter: action.data
            }
        default:
            return state
    }
}

export const setSortMethod = (method) => {
    //console.log(`method:${method}`)
    return {
        type: "method",
        data: method
    }
}

export const toggleAlcoholic = () => {
    //console.log(`alcohol toggled`)
    return {
        type: "toggleAlcoholic"
    }
}

export const toggleOrder = () => {
    //console.log(`order toggled`)
    return {
        type: "toggleOrder"
    }
}

export const filterSearch = (text) => {
    return {
        type: "filterSearch",
        data: text
    }
}

export default sortReducer
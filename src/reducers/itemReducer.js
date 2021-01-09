import { getAllDrinks, getAllNonDrinks } from "../services/dataService"

const initialState = {
    drinks: [],
    nondrinks: []
}

const itemReducer = (state = initialState, action) => {
    //console.log("action made")
    switch(action.type) {
        case "INIT_ITEMS":
            return action.data
        default:
            return state
    }
}

export const initializeItems = () => {
    return async dispatch => { 
        const drinks = await getAllDrinks()
        console.log(`drinks: ${drinks.length}`)

        const nondrinks = await getAllNonDrinks()
        console.log(`non-drinks: ${nondrinks.length}`)

        dispatch({
            type: "INIT_ITEMS",
            data: {
                drinks: drinks,
                nondrinks: nondrinks
            }
        })
    }
}

export default itemReducer
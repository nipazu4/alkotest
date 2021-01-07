import { getAll } from "../services/drinks"

const drinkReducer = (state = [], action) => {
    //console.log("action made")
    switch(action.type) {
        case "INIT_DRINKS":
            return action.data
        default:
            return state
    }
}

export const initializeDrinks = () => {
    return async dispatch => { 
        const drinks = await getAll()
        console.log(`drinks: ${drinks.length}`)
        dispatch({
            type: "INIT_DRINKS",
            data: drinks
        })
    }
}

export default drinkReducer
//TODO: toteuta reduceriin switch-case rakenne
//muista action.data
//sekä action.type


const initialState = {
    method: "price",
    toggleAlcoholic: true,
} //state.sortOptions rakenne

const sortReducer = (state = initialState, action) => {
    console.log(`state now: ${JSON.stringify(state)}`)
    if(action.type.method) {
        return {
            ...state,
            method: action.type.method.toLowerCase()
        }
    } else if (action.type.toggleAlcoholic) {
        //console.log(`alcohol toggled`)
        switch(state.toggleAlcoholic) {
            case true:
                //console.log("alcoholic sort is on")
                return {
                    ...state,
                    toggleAlcoholic: false,
                }
            case false:
                //console.log("alcoholic sort is off")
                return {
                    ...state,
                    toggleAlcoholic: true,
                }
            default:
                //console.log("alcoholic sort default option")
                return state
        }
    } else {
        return state
    }
}

export const setSortMethod = (method) => {
    //console.log(`method:${method}`)
    return {
        type: {
            method: method
        }
    }
}

export const toggleAlcoholic = () => {
    //console.log(`alcohol toggled`)
    return {
        type: {
            toggleAlcoholic: true
        }
    }
}

export default sortReducer
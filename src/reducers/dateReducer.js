import { getLastFetched } from "../services/dataService"

const initialState = []

const dateReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INIT_DATE":
            return action.data
        default:
            return state
    }
}

export const initializeDate = () => {
    return async dispatch => {
        const lastFetched = await getLastFetched()
        console.log(`last fetched: ${JSON.stringify(lastFetched)}`)

        dispatch({
            type: "INIT_DATE",
            data: lastFetched,
        })
    }
}

export default dateReducer
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import itemReducer from "./reducers/itemReducer"
import listSizeReducer from "./reducers/listSizeReducer"
import sortReducer from './reducers/sortReducer'

const reducer = combineReducers({
    listSize: listSizeReducer,
    items: itemReducer,
    sortOptions: sortReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
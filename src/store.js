import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import itemReducer from "./reducers/itemReducer"
import listSizeReducer from "./reducers/listSizeReducer"
import sortReducer from './reducers/sortReducer'
import dateReducer from './reducers/dateReducer'

const reducer = combineReducers({
    listSize: listSizeReducer,
    items: itemReducer,
    sortOptions: sortReducer,
    date: dateReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
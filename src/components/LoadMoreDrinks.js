import { useDispatch, useSelector } from "react-redux"
import { setListSize } from "../reducers/listSizeReducer"

const LoadMoreDrinks = () => {
    const dispatch = useDispatch()
    const currentListSize = useSelector(state => state.listSize)

    const loadMore = () => {
        dispatch(setListSize(currentListSize+50))
    }

    return (
        <button onClick={() => loadMore()}>load 50 more drinks</button>
    )
}

export default LoadMoreDrinks
import { initializeDrinks } from "./reducers/itemReducer"
import { setListSize } from "./reducers/listSizeReducer"
import { setSortMethod } from "./reducers/sortReducer"
import { useDispatch } from "react-redux"
import { useEffect } from "react";

import Drinks from "./components/Drinks"
import Menu from "./components/Menu"
import LoadMoreDrinks from "./components/LoadMoreDrinks";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeDrinks())
        dispatch(setListSize(25))
        dispatch(setSortMethod("pple"))
    }, [dispatch])

    return (
        <div>
            <Menu />
            <Drinks />
            <LoadMoreDrinks />
        </div>
    )
}

export default App;
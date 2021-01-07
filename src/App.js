import { initializeDrinks } from "./reducers/drinkReducer"
import { setListSize } from "./reducers/listSizeReducer"
import { setSortMethod } from "./reducers/sortReducer"
import { useDispatch } from "react-redux"
import { useEffect } from "react";

import Drinks from "./components/Drinks"
import Menu from "./components/Menu"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeDrinks())
        dispatch(setListSize(25))
        dispatch(setSortMethod("alcohol"))
    }, [])

    return (
        <div>
            <Menu />
            <Drinks />
        </div>
    )
}

export default App;
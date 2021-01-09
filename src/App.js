import { initializeItems } from "./reducers/itemReducer"
import { setListSize } from "./reducers/listSizeReducer"
import { setSortMethod } from "./reducers/sortReducer"
import { useDispatch } from "react-redux"
import { useEffect } from "react";

import Drinks from "./components/Drinks"
import Menu from "./components/Menu"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeItems())
        dispatch(setListSize(20))
        dispatch(setSortMethod("pple"))
    }, [dispatch])

    return (
        <div>
            <Menu />
            <Drinks />
        </div>
    )
}

export default App;
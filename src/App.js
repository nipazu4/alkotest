import { initializeItems } from "./reducers/itemReducer"
import { initializeDate } from "./reducers/dateReducer";
import { setListSize } from "./reducers/listSizeReducer"
import { setSortMethod } from "./reducers/sortReducer"
import { useDispatch } from "react-redux"
import { useEffect } from "react";

import Drinks from "./components/Drinks"
import Menu from "./components/Menu"
import ScrollToTopButton from "./components/ScrollToTopButton"
import Togglable from "./components/Togglable";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeItems())
        dispatch(initializeDate())
        dispatch(setListSize(20))
        dispatch(setSortMethod("pple"))
    }, [dispatch])

    return (
        <div>
            <Togglable>
                <Menu />
            </Togglable>
            <Drinks />
            <ScrollToTopButton />
        </div>
    )
}

export default App;
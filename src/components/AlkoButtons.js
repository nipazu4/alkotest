import React from "react"
import { useDispatch } from "react-redux"
import { initializeItems } from "../reducers/itemReducer"
import { initializeDate } from "../reducers/dateReducer";

const AlkoButtons = () => {
    const dispatch = useDispatch()
    const alkoButtonBoxStyle = {
        position: "fixed",
        top: "0",
        left: "0",
        margin: "30px",
        display: "flex",
        flexDirection: "column"
    }

    return (
        <div style={alkoButtonBoxStyle}>
            <button onClick={() => dispatch(initializeItems("alko"))}>Alko</button>
            <button onClick={() => dispatch(initializeItems("superalko"))}>SuperAlko</button>
        </div>
    )
}

export default AlkoButtons
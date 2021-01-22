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

    const alkoFunction = () => {
        dispatch(initializeDate("alko"))
        dispatch(initializeItems("alko"))
    }

    const superAlkoFunction = () => {
        dispatch(initializeDate("superalko"))
        dispatch(initializeItems("superalko"))
    }

    return (
        <div style={alkoButtonBoxStyle}>
            <button onClick={() => alkoFunction()}>Alko</button>
            <button onClick={() => superAlkoFunction()}>SuperAlko</button>
        </div>
    )
}

export default AlkoButtons
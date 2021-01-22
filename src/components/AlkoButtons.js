import React from "react"
import { useDispatch } from "react-redux"
import { initializeItems } from "../reducers/itemReducer"
import { initializeDate } from "../reducers/dateReducer";

const AlkoButtons = () => {
    const dispatch = useDispatch()
    const alkoButtonBoxStyle = {
        margin: "30px",
        display: "flex",
        flexDirection: "column"
    }

    const alkoButtonStyle = {
        width: "150px",
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
            <button style={alkoButtonStyle} onClick={() => alkoFunction()}>Alko</button>
            <button style={alkoButtonStyle} onClick={() => superAlkoFunction()}>SuperAlko</button>
        </div>
    )
}

export default AlkoButtons
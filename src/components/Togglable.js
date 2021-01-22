//Tämä koodi on uudelleenkäytetty (pienin muokkauksin) Full Stack Open -kurssin materiaalista.
import React, { useState } from "react"
import { Divide as Hamburger } from "hamburger-react"

const Togglable = (props) => {
    const [visible, setVisible] = useState(true)

    const showWhenVisible = { display: visible ? "" : "none" }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    const hamburgerStyle = {
        position: "absolute",
        top: "0",
        left: "0",
    }

    return (
        <div>
            <div style={showWhenVisible}>
                {props.children}
            </div>
        </div>
    )
}

export default Togglable
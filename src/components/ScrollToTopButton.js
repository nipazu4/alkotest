import React from "react"
import ScrollToTop from "react-scroll-up"
import { useDispatch } from "react-redux"

import { setListSize } from "../reducers/listSizeReducer"

const ScrollToTopButton = () => {
    const dispatch = useDispatch()

    const buttonStyle = {
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#386292",
        transitionDuration: '0.2s',
    }

    const spanStyle = {
        color: "white",
    }

    return (
        <ScrollToTop
            showUnder={2500}
            style={buttonStyle}
            onHide={() => dispatch(setListSize(20))}
            duration={400}
        >
            <span style={spanStyle}>back to top</span>
        </ScrollToTop>
    )
}

export default ScrollToTopButton
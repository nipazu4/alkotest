const listSizeReducer = (state = 5, action) => {
    //console.log(`size action made`)
    switch(action.type) {
        case "SET_LIST_SIZE":
            return action.data
        default:
            return state
    }
}

export const setListSize = (listSize) => {
    //console.log(listSize)
    return {
        type: "SET_LIST_SIZE",
        data: listSize
    }
}

export default listSizeReducer
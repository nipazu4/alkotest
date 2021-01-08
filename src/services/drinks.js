import axios from "axios"

const baseUrl = "http://localhost:3001/"

export const getAllDrinks = async () => {
    const response = await axios.get(baseUrl+"drinks")
    return response.data
}

export const getAllNonDrinks = async () => {
    const response = await axios.get(baseUrl+"nondrinks")
    return response.data
}
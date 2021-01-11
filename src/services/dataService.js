import axios from "axios"

console.log(`url=${process.env.REACT_APP_BACKEND_URI}`)
const baseUrl = process.env.REACT_APP_BACKEND_URI

export const getAllDrinks = async () => {
    const response = await axios.get(baseUrl+"drinks")
    return response.data.drinks
}

export const getAllNonDrinks = async () => {
    const response = await axios.get(baseUrl+"nondrinks")
    return response.data.nondrinks
}

export const getLastFetched = async () => {
    const response = await axios.get(baseUrl+"date")
    return response.data.date
}
import axios from "axios"

console.log(`url=${process.env.REACT_APP_BACKEND_URI}`)
const baseUrl = process.env.REACT_APP_BACKEND_URI

export const getAllDrinks = async (store) => {
    const response = await axios.get(baseUrl+store+"/drinks")
    return response.data.drinks
}

export const getAllNonDrinks = async (store) => {
    const response = await axios.get(baseUrl+store+"/nondrinks")
    return response.data.nondrinks
}

export const getLastFetched = async (store) => {
    const response = await axios.get(baseUrl+store+"/date")
    return response.data.date
}
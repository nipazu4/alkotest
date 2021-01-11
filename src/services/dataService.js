import axios from "axios"

const baseUrl = "https://alko-react-app.herokuapp.com/api/"

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
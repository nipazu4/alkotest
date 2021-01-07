import { createSelector } from "reselect"

const getDrinks = state => state.drinks
const getSortOptions = state => state.sortOptions
const getListSize = state => state.listSize

export const orderDrinks = createSelector(
    [ getSortOptions, getDrinks, getListSize ],
    (sortOptions, drinks, listSize) => {
        console.log(`sort options: ${JSON.stringify(sortOptions)}`)

        switch(sortOptions.toggleAlcoholic) {
            case true:
                drinks = drinks.filter(d => d.alcohol !== 0)
                break
            case false:
                drinks = drinks.filter(d => d.alcohol === 0)
                break
            default:
                break
        }

        switch(sortOptions.method) {
            case "price":
                return drinks.sort((a, b) => a.price - b.price).slice(0, listSize)
            case "alcohol":
                return drinks.sort((a, b) => b.alcohol - a.alcohol).slice(0, listSize)
            case "name":
                return drinks.sort((a, b) => a.name.localeCompare(b.name)).slice(0, listSize)            
            default:
                return drinks.slice(0, listSize)
        }
    }
)
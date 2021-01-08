import { createSelector } from "reselect"

const getDrinks = state => state.items.nondrinks
const getSortOptions = state => state.sortOptions
const getListSize = state => state.listSize

export const orderDrinks = createSelector(
    [ getSortOptions, getDrinks, getListSize ],
    (sortOptions, drinks, listSize) => {
        //console.log(`sort options: ${JSON.stringify(sortOptions)}`)

        //Suodatetaan hakukentän tekstin perusteella
        drinks = drinks.filter(d => d.name.toLowerCase().includes(sortOptions.searchFilter))

        //Suodatetaan alkoholipitoisuuden perusteella.
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

        //Seuraavana lajittelu valitulla tavalla
        switch(sortOptions.method) {
            case "price":
                drinks = drinks.sort((a, b) => b.price - a.price)
                break
            case "alcohol":
                drinks = drinks.sort((a, b) => b.alcohol - a.alcohol)
                break
            case "name":
                drinks = drinks.sort((a, b) => a.name.localeCompare(b.name)).reverse()
                break
            case "pple":
                drinks = drinks.sort((a, b) => b.priceperethanolL - a.priceperethanolL)
                break
            case "ppl":
                drinks = drinks.sort((a, b) => b.priceperL - a.priceperL)
                break
            case "size":
                drinks = drinks.sort((a, b) => b.size - a.size)
                break
            case "id":
                drinks = drinks.sort((a, b) => b.id - a.id)
                break
            default:
                break
        }

        //Käännetään lista tarvittaessa
        if (sortOptions.toggleOrder) {
            drinks = drinks.reverse()
        }

        //Lopuksi määrätään listan koko
        drinks = drinks.slice(0, listSize)

        //ja palautetaan lajiteltu lista juomista
        return drinks
    }
)
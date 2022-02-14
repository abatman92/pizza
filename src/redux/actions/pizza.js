import { api } from "../../api"

export const SetPizzaItems = (items) => ({
    type: "SetPizzaItems",
    payload: items,
})

export const fetchPizza = (category, sortBy) => async (dispatch) => {
    const res = await api.get(`pizzas?${category !== null ? category=`category=${category}` : ''}&_sort=${sortBy}&_order=desc`)
    dispatch(SetPizzaItems(res.data))
}

export const SetLoaded = (value) => ({
    type: "SetLoaded",
    payload: value
})
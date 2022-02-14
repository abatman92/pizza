const initialState = {
    sortBy: "popularity" ,
    category: null
}

export const filters = (state=initialState, action) => {
    switch (action.type) {
        case "SortBy": {
            return {...state, sortBy: action.payload}
        }
        case "SetCategory": {
            return {...state, category: action.payload}
        }
        default: {
            return state
        }
    }
}
const initialState = {
    items: [],
    isLoaded: false,
}

export const pizzas = (state=initialState, action) => {
    switch (action.type) {
        case "SetPizzaItems": {
            return {
              items: action.payload,
              isLoaded: true,
            };
        }
        case "SetLoaded": {
            return {
                ...state,
                isLoaded: action.payload
            }  
        } 
        default: {
            return state
        }
    }
}
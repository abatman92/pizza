const InitialState = {
    items: {},
    totalPrice: 0,
    itemsInCart: 0,
};

export const cart = (state = InitialState, action) => {
    switch (action.type) {
        case "RemoveAllCartItems": {
            return {
                items: {},
                totalPrice: 0,
                itemsInCart: 0,
                counts: {}
            }
        }
        case "SetCartItems": {
            const newItems = {
                  ...state.items,
                  [action.payload.pizzaInfo.id]: !state.items[action.payload.pizzaInfo.id]
                    ? [action.payload.pizzaInfo]
                    : [...state.items[action.payload.pizzaInfo.id], action.payload.pizzaInfo],
            };
            const counts = {
                ...state.counts,
                [action.payload.pizzaInfo.id]: [action.payload.count]
            }
            const newItemsArr = Object.values(newItems).reduce((acc, item)=> {
                return [...acc, ...item]
            }, [])
            return {
              ...state,
              items: newItems,
              itemsInCart: newItemsArr.length,
              totalPrice: newItemsArr.reduce(
                (acc, item) => acc + item.price,
                0
              ),
              counts: counts
            };
        }
        case "RemoveCurrentItem": {
          const newItems = state.items;
          delete newItems[action.payload];
          const newItemsArr = Object.values(newItems).reduce((acc, item) => {
            return [...acc, ...item];
          }, []);
          const counts = state.counts
          delete counts[action.payload]
          return {
            items: newItems,
            itemsInCart: newItemsArr.length,
            totalPrice: newItemsArr.reduce((acc, item) => acc + item.price, 0),
            counts: counts,
          };
        }
        default:  {
            return state
        }
    }
}
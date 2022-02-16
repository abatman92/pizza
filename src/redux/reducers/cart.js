const InitialState = {
    items: {},
    totalPrice: 0,
    itemsInCart: 0,
};


const countTotal = (arr) => arr.reduce(
  (acc, item) => acc + item.price,
  0
)

export const cart = (state = InitialState, action) => {
    switch (action.type) {
        case "RemoveAllCartItems": {
            return {
                items: {},
                totalPrice: 0,
                itemsInCart: 0,
            }
        }
        case "SetCartItems": {
            const newItems = {
                  ...state.items,
                  [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            };
            const newItemsArr = Object.values(newItems).reduce((acc, item)=> {
                return [...acc, ...item]
            }, [])
            return {
              ...state,
              items: newItems,
              itemsInCart: newItemsArr.length,
              totalPrice: countTotal(newItemsArr)
            };
        }
        case "RemoveCurrentItem": {
          const newItems = state.items;
          delete newItems[action.payload];
          const newItemsArr = Object.values(newItems).reduce((acc, item) => {
            return [...acc, ...item];
          }, []);
          return {
            items: newItems,
            itemsInCart: newItemsArr.length,
            totalPrice: countTotal(newItemsArr)
          };
        }
        default:  {
            return state
        }
    }
}
export const setCartItems = (item) => ({
  type: "SetCartItems",
  payload: item,
});

export const RemoveAllCartItems = () => ({
    type: "RemoveAllCartItems",
})

export const RemoveCurrentItem = (id) => ({
  type: "RemoveCurrentItem",
  payload: id
})
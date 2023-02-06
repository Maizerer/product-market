export const state = () => ({
  cart: [],
})
export const mutations = {
  addItem(state, item) {
    state.cart.push({ ...item, quantity: 1 })
  },
  removeProduct(state, item) {
    state.cart = state.cart.filter((product) => {
      return item.id !== product.id
    })
    item.quantity = 0
  },
  setCount(state, payload) {
    const itemIndex = state.cart.findIndex((product) => {
      return payload.item.id === product.id
    })
    if (itemIndex !== -1) {
      state.cart[itemIndex].quantity = payload.quantity
      if (payload.quantity === 0) {
        state.cart.splice(itemIndex, 1)
      }
    }
  },
  setCart(state, payload) {
    state.cart = payload
  },
}
export const actions = {}
export const getters = {
  productsCount(state) {
    let count = 0
    state.cart.forEach((product) => {
      count += product.quantity
    })
    return count
  },
}

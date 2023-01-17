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
  },
  setCount(state, payload) {
    const itemIndex = state.cart.findIndex((product) => {
      return payload.item.id === product.id
    })
    if (itemIndex !== -1) {
      state.cart[itemIndex].quantity = payload.quantity
    }
  },
}
export const actions = {}
export const getters = {}

export const state = () => ({
  cart: [],
})
export const mutations = {
  addItem(state, item) {
    state.cart.push(item)
  },
}
export const actions = {}
export const getters = {}

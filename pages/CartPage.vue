<template>
  <div>
    <Cart v-if="cart.length" :cart-data="cart" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cart from '~/components/partials/Cart.vue'
export default {
  components: {
    Cart,
  },
  computed: {
    ...mapState('cart', ['cart']),
  },
}
</script>

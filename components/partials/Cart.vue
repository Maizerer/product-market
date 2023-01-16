<template>
  <div class="container">
    <h1>Корзина</h1>
    <CartItem
      v-for="(item, index) in cartData"
      :key="index"
      :cart-item-data="item"
    />
  </div>
</template>
<script>
import CartItem from '~/components/partials/Cart-Item.vue'
export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
<style scoped></style>

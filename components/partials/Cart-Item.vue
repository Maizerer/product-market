<template>
  <div class="cart-item">
    <img :src="cartItemData.image" alt="" />
    <div>
      <div class="flex justify-between text-sm leading-none text-price">
        <div>В наличии {{ cartItemData.count }} шт</div>
        <div>
          {{ (cartItemData.price * cartItemData.quantity).toFixed(2) }} Руб
        </div>
      </div>
      <div>
        <div>Добавлено: {{ cartItemData.quantity }}</div>
      </div>
      <div class="font-semibold text-xl leading-none my-[7px] h-[82px]">
        {{ cartItemData.title }}, {{ cartItemData.weight }}
      </div>
    </div>
    <button @click="deleting">Удалить</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CartItem',
  props: {
    cartItemData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapMutations('cart', ['removeProduct']),
    deleting() {
      this.removeProduct(this.cartItemData)
    },
  },
}
</script>
<style scoped>
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>

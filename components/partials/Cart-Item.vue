<template>
  <div class="cart-item">
    <img :src="cartItemData.image" alt="" />
    <div>
      <div class="flex justify-between text-sm leading-none text-price">
        <div>В наличии {{ cartItemData.count }} шт</div>
        <div>{{ cartItemData.price }} Руб</div>
      </div>
      <div class="font-semibold text-xl leading-none my-[7px] h-[82px]">
        {{ cartItemData.title }}, {{ cartItemData.weight }}
      </div>
    </div>
    <button>Удалить</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  computed: {},
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

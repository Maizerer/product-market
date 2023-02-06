<template>
  <div class="flex">
    <div class="w-[130px] h-[130px]">
      <img :src="cartItemData.image" alt="" />
    </div>
    <div class="flex flex-col ml-10">
      <div class="font-bold text-xl max-w-[292px]">
        {{ cartItemData.title }}, {{ cartItemData.weight }}
      </div>
      <div class="text-sm">В наличии {{ cartItemData.count }}</div>
    </div>
    <div v-if="cartItemData.saleprice" class="flex flex-col ml-[22px]">
      <div class="text-xl text-red-dark font-semibold text-left">
        {{ cartItemData.price }} Р.
      </div>
      <div class="text-sm line-through text-price text-center">
        {{ cartItemData.saleprice }} Р.
      </div>
    </div>
    <div v-else>
      <div class="text-xl font-semibold ml-[22px] text-center">
        {{ cartItemData.price }} Р.
      </div>
    </div>
    <div class="ml-5">
      <div
        class="flex max-w-[110px] max-h-[42px] p-1.5 text-yellow gap-2.5 text-base border bg-filterBtn border-counterBorder rounded-[58px]"
      >
        <button
          class="hover:bg-yellow hover:text-white rounded-full p-2.5 flex items-center"
          @click="decrementQuantity"
        >
          <div>-</div>
        </button>
        <div class="font-bold flex items-center">
          {{ cartItemData.quantity }}
        </div>
        <button
          class="hover:bg-yellow hover:text-white rounded-full p-2.5 flex items-center"
          @click="incrementQuantity"
        >
          <div>+</div>
        </button>
      </div>
    </div>
    <button
      class="flex items-start border border-productBorder ml-2 p-[11px] rounded-full text-productBorder h-[44px] hover:border-yellow hover:text-yellow duration-300"
    >
      <i-favorites size="22" />
    </button>
    <div class="ml-7">
      <div>
        {{ (cartItemData.price * cartItemData.quantity).toFixed(2) }} Руб
      </div>
      <div>{{ cartItemData.quantity }}</div>
    </div>

    <!-- <button @click="deleting">Удалить</button> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import IFavorites from '~/components/icons/i-favorites.vue'
export default {
  name: 'CartItem',
  components: {
    IFavorites,
  },
  props: {
    cartItemData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations('cart', ['removeProduct', 'addItem', 'setCount']),
    incrementQuantity() {
      this.setCount({
        item: this.cartItemData,
        quantity: this.cartItemData.quantity + 1,
      })
    },
    decrementQuantity() {
      this.setCount({
        item: this.cartItemData,
        quantity: this.cartItemData.quantity - 1,
      })
    },
  },
}
</script>

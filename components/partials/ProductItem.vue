<template>
  <div
    class="flex flex-col max-w-[304px] border border-borders rounded-[20px] overflow-hidden"
  >
    <div>
      <img :src="item.image" alt="" />
    </div>
    <div class="px-4 pb-5">
      <div class="flex justify-between text-sm leading-none text-price">
        <div>В наличии {{ item.count }} шт</div>
        <div>{{ item.price }} Руб</div>
      </div>
      <div class="font-semibold text-xl leading-none my-[7px] h-[82px]">
        {{ item.title }}, {{ item.weight }}
      </div>
      <div class="flex justify-between items-center">
        <div>
          <div
            :class="{ 'text-red': item.saleprice }"
            class="text-2xl leading-none font-semibold"
          >
            {{ item.price }} Руб.
          </div>
          <div v-if="item.saleprice" class="text-price line-through text-sm">
            {{ item.saleprice }} Руб.
          </div>
        </div>
        <div
          v-if="showCounter"
          class="flex max-w-[110px] max-h-[42px] p-1.5 text-yellow gap-2.5 text-base border bg-filterBtn border-counterBorder rounded-[58px]"
        >
          <button
            class="hover:bg-yellow hover:text-white rounded-full p-2.5 flex items-center"
          >
            <div>-</div>
          </button>
          <div class="font-bold flex items-center">{{ quantity }}</div>
          <button
            class="hover:bg-yellow hover:text-white rounded-full p-2.5 flex items-center"
          >
            <div>+</div>
          </button>
        </div>
        <button
          v-else
          class="text-red py-2.5 px-4 border border-red rounded-[60px] cursor-pointer hover:bg-red hover:text-white duration-300"
          @click="addToCart"
        >
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProductItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {
    showCounter() {
      return this.quantity >= 1
    },
  },
  methods: {
    ...mapMutations('cart', ['addItem']),
    addToCart() {
      this.addItem(this.item)
      this.quantity = 1
    },
  },
}
</script>

<style scoped></style>

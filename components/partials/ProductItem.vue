<template>
  <div class="flex flex-col max-w-[304px] border border-borders rounded-[20px]">
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
          class="text-red py-2.5 px-4 border border-red rounded-[60px] cursor-pointer hover:bg-red hover:text-white duration-300"
        >
          В корзину
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style scoped></style>

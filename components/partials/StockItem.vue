<template>
  <div class="flex container gap-6 pt-11">
    <div
      :style="{
        'background-image': `url(${good.image})`,
      }"
      class="bg-cover bg-center bg-no-repeat w-[310px] h-[449px] pt-9 px-9 border border-borders rounded-[30px] cursor-pointer"
    >
      <div
        class="text-2xl font-bold text-supermarket"
        v-html="good.title"
      ></div>
      <div
        v-if="good.discount"
        class="text-black py-[9px] px-[14px] mt-[9px] bg-white max-w-[121px] max-h-[40px] rounded-[39px]"
      >
        {{ good.discount }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StockItem',
  props: {
    good: {
      type: Object,
      required: true,
    },
  },
}
</script>

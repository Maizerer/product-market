<template>
  <div class="bg-[#F7FFE5] rounded-[58px]">
    <div
      :style="{
        'background-image': `url(${subcategory.image})`,
      }"
      class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px] cursor-pointer"
    >
      <div class="text-3xl text-supermarket" v-html="subcategory.title"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubCategory',
  props: {
    subcategory: {
      type: Object,
      required: true,
    },
  },
}
</script>

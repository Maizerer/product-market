<template>
  <section>
    <div class="pt-[200px] container">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">{{ category.title }}</div>
        <button
          class="flex items-center py-[10px] font-medium px-[22px] gap-4 text-categoryBtn hover:text-white hover:bg-yellow duration-300 bg-filterBtn border border-categoryBorder rounded-2xl cursor-pointer"
        >
          <div class="text-[22px]">Смотреть всё</div>
          <i-arrow size="11" direction="right"></i-arrow>
        </button>
      </div>
    </div>
    <div class="flex container gap-6 pt-11 flex-wrap">
      <sub-category
        v-for="(subcategory, index) in category.subcategory"
        :key="index"
        :subcategory="subcategory"
      />
    </div>
  </section>
</template>
<script>
import SubCategory from '~/components/partials/subCategory.vue'
import IArrow from '~/components/icons/i-arrow.vue'
export default {
  name: 'CategoryBlock',
  components: { IArrow, SubCategory },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

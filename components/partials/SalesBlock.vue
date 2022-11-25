<template>
  <section>
    <div class="pt-28 flex container justify-between items-center">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">Скидки</div>
        <button
          class="flex items-center py-[10px] font-medium px-[22px] gap-4 text-categoryBtn hover:text-white hover:bg-yellow duration-300 bg-filterBtn border border-categoryBorder rounded-2xl cursor-pointer"
        >
          <div class="text-[22px]">Смотреть всё</div>
          <i-arrow size="11" direction="right"></i-arrow>
        </button>
      </div>
      <div
        class="flex gap-2 bg-filterBtn border border-categoryBorder p-2 rounded-[58px]"
      >
        <button class="hover:bg-yellow rounded-full cursor-pointer">
          <div class="px-2 py-2 text-yellow hover:text-white duration-200">
            <i-arrow size="11" direction="left"></i-arrow>
          </div>
        </button>
        <button class="hover:bg-yellow rounded-full cursor-pointer">
          <div class="px-2 py-2 text-yellow hover:text-white duration-200">
            <i-arrow size="11" direction="right"></i-arrow>
          </div>
        </button>
      </div>
    </div>
    <div class="flex gap-6 container pt-9">
      <product-item
        v-for="(product, index) in products"
        :key="index"
        :item="product"
      />
    </div>
  </section>
</template>

<script>
import IArrow from '~/components/icons/i-arrow.vue'
import ProductItem from '~/components/partials/ProductItem'
export default {
  name: 'SalesBlock',
  components: { ProductItem, IArrow },
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.get(
        'https://api.apisful.com/v1/collections/products/'
      )
      this.products = response.data.results
    } catch (e) {}
  },
}
</script>

<style scoped></style>

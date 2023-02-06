<template>
  <div>
    <sales-block />

    <category-block
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
    />
    <stocks-block />
    <div class="pt-[200px] container">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">Доставка и оплата</div>
      </div>
    </div>
    <div class="flex container gap-7 pt-12 text-xl">
      <div>
        <div>
          <div class="text-red font-bold">Зона доставки</div>
          <div class="pt-1.5">
            Доставка осуществляется в районе ЖК «Ильинские Луга» (Харьковськая
            обл., Красногорск, пос. Ильинское-Усово, ул. Заповедная) и ЖК «Новая
            Рига» (Харьковськая обл., Красногорск, д. Глухово, ул. Рублевское
            Предместье)
          </div>
        </div>
        <div>
          <div class="pt-8 text-red font-bold">25 минут</div>
          <div class="pt-1.5">
            Доставка 25 минут. Принимаем заказы с 7:00 до 23:00
          </div>
        </div>
        <div>
          <div class="pt-8 text-red font-bold">300 грн</div>
          <div class="pt-1.5">
            Минимальная сумма бесплатной доставки с учетом скидок. Иначе
            стоимость доставке 50 грн
          </div>
        </div>
        <div>
          <div class="text-red font-bold pt-6">Оплата</div>
          <div class="pt-1.5">
            При оформлении заказа вы можете выбрать удобный для вас спобос
            рассчета
          </div>
        </div>
        <div class="pt-8">
          Изображение продуктов могут отличаться от продуктов в заказе.
        </div>
      </div>
      <div>
        <div class="text-red font-bold">Карта доставки</div>
        <div class="w-[633px] h-[480px] pt-5">
          <img class="w-full" src="~/assets/images/deliveryMap.png" alt="" />
        </div>
      </div>
    </div>
    <div
      :style="{
        'background-image': `url(${require('~/assets/images/promocode-bg.png')})`,
      }"
      class="flex items-start bg-contain bg-center bg-no-repeat container gap-[100px] pb-10 pl-16 pt-10 text-white mt-[90px]"
      style="margin-top: 94px"
    >
      <div class="flex gap-[15px] font-bold text-[38px]">
        <div>
          <div>БЕСПЛАТНАЯ ДОСТАВКА</div>
          <div class="text-[22px]">первого заказа</div>
        </div>
        <div>+</div>
        <div>
          <div>Скидка 10%</div>
          <div class="text-[22px]">на заказы клинарии</div>
        </div>
      </div>
      <button
        class="font-semibold text-[22px] px-7 py-3 border border-white rounded-[30px] cursor-pointer"
      >
        Получить промокод
      </button>
    </div>
    <div
      :style="{
        'background-image': `url(${require('~/assets/images/markShop.png')})`,
      }"
      class="flex bg-cover bg-no-repeat bg-center container gap-[150px] pl-16 py-7 overflow-visible"
      style="margin-top: 98px"
    >
      <div>
        <div class="uppercase text-[38px] font-bold">оцените магазин</div>
        <div class="text-[20px] max-w-[353px]">
          Поделитесь впечатлением о заказе и помогите сделать нас лучше
        </div>
      </div>
      <div class="flex flex-col gap-[15px]">
        <div><img src="~/assets/images/stars.png" alt="" /></div>
        <button
          class="text-red text-[22px] font-semibold py-3.5 px-9 border border-red rounded-[30px] cursor-pointer"
        >
          Оставить отзыв
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SalesBlock from '~/components/partials/SalesBlock'
import CategoryBlock from '~/components/partials/categoryBlock'
import StocksBlock from '~/components/partials/StocksBlock.vue'

export default {
  name: 'HomePage',
  components: {
    SalesBlock,
    CategoryBlock,
    StocksBlock,
  },
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get(
        'https://api.apisful.com/v1/collections/categories/?expand=subcategory&order_by=id'
      )
      const categories = response.data.results
      return { categories }
    } catch (e) {}
  },
  data() {
    return {
      categories: [],
    }
  },
  computed: {
    ...mapState('cart', ['cart']),
  },
}
</script>

<style lang="scss"></style>

<template>
  <div class="container">
    <div class="flex gap-2.5 mt-[56px]">
      <div>
        <div class="flex justify-between">
          <div class="font-bold text-[32px] leading-none uppercase">
            Корзина
          </div>
          <button class="text-sm leading-none text-textlight">Очистить</button>
        </div>
        <div class="w-[853px] mt-[38px]">
          <CartItem
            v-for="(item, index) in cartData"
            :key="index"
            :cart-item-data="item"
          />
        </div>
      </div>
      <div
        class="flex flex-col pl-[42px] pt-5 pr-[22px] pb-8 bg-orderInfoBg rounded-2xl"
      >
        <div class="flex gap-[47px]">
          <div class="font-bold text-xl leading-none">
            Доставка сегодня, 18:11
          </div>
          <button class="text-red text-sm leading-none">Изменить</button>
        </div>
        <div class="text-sm mt-3">
          ул. Новая, д. 13, посёлок Ильинское-Усово, <br />
          городской округ Красногорск
        </div>
        <div
          class="flex max-w-[350px] bg-white justify-between pl-[22px] pr-[5px] py-[5px] rounded-2xl mt-[22px]"
        >
          <input type="text" placeholder="Есть промокод?" />
          <button
            class="text-red font-semibold border border-red py-[11px] px-[14px] rounded-xl hover:bg-red hover:text-white duration-300"
          >
            Применить
          </button>
        </div>
        <div class="flex gap-2 items-center">
          <button class="max-h-[14px]">
            <div class="relative w-[14px] h-[14px] bg-white rounded-full">
              <div
                class="absolute w-[6px] h-[6px] bg-red rounded-full left-1 top-1 right-1"
              ></div>
            </div>
          </button>
          <div class="mt-[18px] text-sm">
            <span class="font-bold mr-[7px]">Списать бонусы</span> Всего 170
            бонусов
            <div>Доступно к списанию <span>17</span> бонусов</div>
          </div>
        </div>
        <div class="flex flex-col gap-[14px] mt-8 text-xl leading-none">
          <div class="flex justify-between">
            <div>Товары (5)</div>
            <div>2.443 кг</div>
          </div>
          <div class="flex justify-between">
            <div>Скидки</div>
            <div class="text-red">–104 грн</div>
          </div>
          <div class="flex justify-between">
            <div>Бонусы</div>
            <div class="text-red">-17 грн</div>
          </div>
          <div class="flex justify-between">
            <div>Промокод</div>
            <div>0 грн</div>
          </div>
          <div class="flex justify-between">
            <div>Доставка</div>
            <div>Бесплатно</div>
          </div>
        </div>
        <div class="mt-[23px] flex justify-between items-center">
          <div class="text-xl leading-none">К оплате</div>
          <div class="text-[26px] leading-none font-bold">586 грн</div>
        </div>
        <button
          class="text-white bg-red border border-red rounded-[31px] py-[13px] px-[88px] font-semibold text-[22px] mt-6 text-center"
        >
          Оформить заказ
        </button>
        <div class="text-center mt-2.5 text-sm">Будет начислено 25 бонусов</div>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from '~/components/partials/Cart-Item.vue'

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style scoped></style>

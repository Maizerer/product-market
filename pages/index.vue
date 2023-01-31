<template>
  <div>
    <div
      :style="{
        'background-image': `url(${require('~/assets/images/offer-bg.jpg')})`,
      }"
      class="flex justify-center items-center gap-6 bg-cover bg-center bg-no-repeat text-white"
    >
      <div
        class="uppercase py-[12px] text-[22px] font-nunito font-black max-w-[355px]"
      >
        Питайтесь разнообразно и копите
        <span class="rounded-[8px] text-red p-[3px] bg-yellow">скидку</span>
        <span class="lowercase">до 10%</span>
      </div>
      <button
        class="px-[20px] py-[4px] border rounded-[30px] text-[20px] font-nunito font-semibold"
      >
        Получить скидку
      </button>
    </div>

    <div class="flex gap-[14px] container pt-[30px]">
      <div class="flex gap-[26px]">
        <img src="~assets/images/svg/logo.svg" alt="" />
        <div class="flex gap-2 bg-red text-white rounded-[31px] py-[13px] px-5">
          <button class="font-extrabold">Каталог</button>
        </div>
        <div
          class="flex border border-borders rounded-2xl py-[13px] px-[15px] gap-4 items-center"
        >
          <input class="min-w-[240px]" type="text" placeholder="Начать поиск" />
          <i-search size="22" color="search"></i-search>
        </div>
        <div class="flex rounded-2xl overflow-hidden text-white">
          <button
            class="flex flex-col items-center justify-center bg-yellow-70 py-[9px] pb-[2px] pr-[11px] pl-[19px] cursor-pointer"
          >
            <i-geolocation size="14" color="white"></i-geolocation>
            <span class="text-base leading-none font-nunito mt-[4px]">МСК</span>
          </button>
          <button class="bg-yellow pl-[15px] font-nunito cursor-pointer">
            <div class="text-sm pt-[6px]">Выберите способ получения</div>
            <div class="text-base pr-[18px] font-bold">
              Доставка или самовывоз
            </div>
          </button>
        </div>
      </div>
      <div class="flex gap-[14px]">
        <button
          class="px-[15px] py-3.5 border border-borders rounded-2xl hover:border-yellow hover:text-yellow duration-300 text-borders"
        >
          <i-favorites size="22"></i-favorites>
        </button>
        <button
          class="px-4 py-3.5 border border-borders rounded-2xl hover:border-yellow hover:text-yellow text-borders duration-300"
        >
          <i-profile size="22"></i-profile>
        </button>
        <nuxt-link
          class="flex bg-red rounded-2xl gap-[13px] pr-[11px] py-[11px] pl-[17px] items-center"
          to="/CartPage"
        >
          <i-backet size="24" color="white"></i-backet>
          <span class="text-white text-base leading-none font-bold mx-0 my-auto"
            >Корзина</span
          >
        </nuxt-link>
      </div>
    </div>

    <div class="flex gap-[14px] container font-semibold pt-[20px]">
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300 cursor-pointer"
      >
        <img src="~/assets/images/apple.png" alt="" />
        <div>Супермаркет</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300 cursor-pointer"
      >
        <img src="~/assets/images/categoryPizza.png" alt="" />
        <div>Кулинария</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300 cursor-pointer"
      >
        <img src="~/assets/images/freezing.png" alt="" />
        <div>Заморозка</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300 cursor-pointer"
      >
        <img src="~/assets/images/other.png" alt="" />
        <div>Другое</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300 cursor-pointer"
      >
        <img src="~/assets/images/fire.png" alt="" />
        <div>Акции</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300 cursor-pointer"
      >
        <img src="~/assets/images/point.png" alt="" />
        <div>Магазины</div>
      </div>
    </div>

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
    <div class="bg-red mt-24">
      <div class="flex items-center container text-white text-sm pt-9 pb-5">
        <div>
          <div class="flex gap-16">
            <div class="flex flex-col gap-1 cursor-pointer">
              <div class="font-bold">Ильинский онлайн</div>
              <a>Кулинария</a>
              <a>Супермаркет</a>
              <a>Заморозка</a>
              <a>Другое</a>
            </div>
            <div class="flex flex-col gap-1 cursor-pointer">
              <div class="font-bold">Ильинский клуб</div>
              <a>Акции</a>
              <a>Доставка и оплата</a>
              <a>Программа лояльности</a>
              <a>Политика конфиденциальности</a>
              <a>Вакансии</a>
            </div>
          </div>
          <div class="text-xs mt-20">
            © 2022 Ильинский онлайн — доставка товаров и продуктов на дом
          </div>
        </div>
        <div class="ml-[100px]">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2.5">
              <div><img src="~/assets/images/svg/phone.svg" alt="" /></div>
              <div>
                <div class="text-xl font-semibold">+38 (000) 49-09-99</div>
                <div class="text-white/40">Ежедневно c 09:00 до 21:00</div>
              </div>
            </div>
            <div class="flex gap-5 mt-3.5">
              <div><img src="~/assets/images/svg/compass.svg" alt="" /></div>
              <div class="font-semibold">Адреса магазинов</div>
            </div>
            <div class="flex gap-5">
              <div><img src="~/assets/images/svg/follow.svg" alt="" /></div>
              <div>Следите за нами</div>
            </div>
            <div class="flex gap-5">
              <div><img src="~/assets/images/svg/mail.svg" alt="" /></div>
              <div>Обратная связь</div>
            </div>
          </div>
          <div class="text-xs mt-20">
            Информация на сайте не является публичной офертой
          </div>
        </div>
        <div class="flex flex-col gap-2.5 text-lg font-semibold ml-[63px]">
          <div class="">Подпишитесь на вкусные и полезые новости</div>
          <div class="flex items-center gap-3 max-w-[406px]">
            <input
              class="min-w-[250px] min-h-[45px] rounded-2xl pl-1.5 pr-1.5 text-black"
              type="text"
            />
            <button
              class="py-2.5 px-[13px] border border-white rounded-2xl cursor-pointer"
            >
              Подписаться
            </button>
          </div>
          <div class="flex items-center gap-2">
            <img src="~/assets/images/svg/circle.svg" alt="" />
            <div class="text-white/50 text-sm">
              Согласен с политикой конфиденциальности
            </div>
          </div>
          <div class="flex gap-4 mt-[85px]">
            <img src="~/assets/images/svg/banks.svg" alt="" />
            <img src="~/assets/images/svg/developed.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IGeolocation from '~/components/icons/i-geolocation.vue'
import IFavorites from '~/components/icons/i-favorites.vue'
import IProfile from '~/components/icons/i-profile.vue'
import IBacket from '~/components/icons/i-backet.vue'
import ISearch from '~/components/icons/i-search.vue'
import SalesBlock from '~/components/partials/SalesBlock'
import CategoryBlock from '~/components/partials/categoryBlock'
import StocksBlock from '~/components/partials/StocksBlock.vue'
export default {
  name: 'HomePage',
  components: {
    SalesBlock,
    IGeolocation,
    IFavorites,
    IProfile,
    IBacket,
    ISearch,
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

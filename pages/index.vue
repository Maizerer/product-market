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
        <div class="flex border border-borders rounded-2xl py-[13px] px-[15px]">
          <input class="" type="text" placeholder="Начать поиск" />
          <i-search size="22" color="search" class="ml-[69px]"></i-search>
        </div>
        <div class="flex rounded-2xl overflow-hidden text-white">
          <div
            class="flex flex-col items-center justify-center bg-yellow-70 py-[9px] pb-[2px] pr-[11px] pl-[19px]"
          >
            <i-geolocation size="14" color="white"></i-geolocation>
            <span class="text-base leading-none font-nunito mt-[4px]">МСК</span>
          </div>
          <div class="bg-yellow pl-[15px] font-nunito">
            <div class="text-sm pt-[6px]">Выберите способ получения</div>
            <div class="text-base pr-[18px] font-bold">
              Доставка или самовывоз
            </div>
          </div>
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
        <button
          class="flex bg-red rounded-2xl gap-[13px] pr-[11px] py-[11px] pl-[17px]"
        >
          <i-backet size="24" color="white"></i-backet>
          <span class="text-white text-base leading-none font-bold mx-0 my-auto"
            >Корзина</span
          >
        </button>
      </div>
    </div>
    <div class="flex gap-[14px] container font-semibold pt-[20px]">
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300"
      >
        <img src="~/assets/images/apple.png" alt="" />
        <div>Супермаркет</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300"
      >
        <img src="~/assets/images/pizza.png" alt="" />
        <div>Кулинария</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300"
      >
        <img src="~/assets/images/freezing.png" alt="" />
        <div>Заморозка</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300"
      >
        <img src="~/assets/images/other.png" alt="" />
        <div>Другое</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300"
      >
        <img src="~/assets/images/fire.png" alt="" />
        <div>Акции</div>
      </div>
      <div
        class="flex gap-[6px] items-center bg-filterBtn hover:bg-hoverFilterBtn py-3.5 pl-3.5 pr-4 border border-yellow/40 rounded-2xl duration-300"
      >
        <img src="~/assets/images/point.png" alt="" />
        <div>Магазины</div>
      </div>
    </div>
  </div>
</template>

<script>
import IGeolocation from '~/components/icons/i-geolocation.vue'
import IFavorites from '~/components/icons/i-favorites.vue'
import IProfile from '~/components/icons/i-profile.vue'
import IBacket from '~/components/icons/i-backet.vue'
import ISearch from '~/components/icons/i-search.vue'
export default {
  name: 'HomePage',
  components: {
    IGeolocation,
    IFavorites,
    IProfile,
    IBacket,
    ISearch,
  },
}
</script>

<style lang="scss"></style>

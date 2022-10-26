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
          <btn
            class="flex flex-col items-center justify-center bg-yellow-70 py-[9px] pb-[2px] pr-[11px] pl-[19px] cursor-pointer"
          >
            <i-geolocation size="14" color="white"></i-geolocation>
            <span class="text-base leading-none font-nunito mt-[4px]">МСК</span>
          </btn>
          <btn class="bg-yellow pl-[15px] font-nunito cursor-pointer">
            <div class="text-sm pt-[6px]">Выберите способ получения</div>
            <div class="text-base pr-[18px] font-bold">
              Доставка или самовывоз
            </div>
          </btn>
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
          class="flex bg-red rounded-2xl gap-[13px] pr-[11px] py-[11px] pl-[17px] items-center"
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

    <div class="pt-28 flex container justify-between items-center">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">Скидки</div>
        <btn
          class="flex py-[10px] px-[22px] gap-4 text-categoryBtn hover:text-white hover:bg-yellow duration-300 bg-filterBtn border border-categoryBorder rounded-2xl cursor-pointer"
        >
          <div class="text-[22px]">Смотреть всё</div>
          <img src="~/assets/images/svg/right-arrow.svg" alt="" />
        </btn>
      </div>
      <div
        class="flex gap-2 bg-filterBtn border border-categoryBorder p-2 rounded-[58px]"
      >
        <btn class="hover:bg-yellow px-2 py-2 rounded-full cursor-pointer">
          <img src="~/assets/images/left-arrow.png" alt="" />
        </btn>
        <btn class="hover:bg-yellow px-2 py-2 rounded-full cursor-pointer">
          <img src="~/assets/images/right-arrow.png" alt="" />
        </btn>
      </div>
    </div>
    <div class="flex gap-6 container pt-9">
      <div
        class="flex flex-col max-w-[304px] border border-borders rounded-[20px]"
      >
        <div>
          <img src="~/assets/images/BionolaMusli.jpg" alt="" />
        </div>
        <div class="px-4 pb-5">
          <div class="flex justify-between text-sm leading-none text-price">
            <div>В наличии 2 шт</div>
            <div>99,90 грн</div>
          </div>
          <div class="font-semibold text-xl leading-none my-[7px] h-[82px]">
            Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г
          </div>
          <div class="flex justify-between items-center">
            <div>
              <div class="text-red text-2xl leading-none font-semibold">
                99,90 грн
              </div>
              <div class="text-price line-through text-sm">129,00 грн</div>
            </div>
            <div
              class="text-red py-2.5 px-4 border border-red rounded-[60px] cursor-pointer hover:bg-red hover:text-white duration-300"
            >
              В корзину
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col max-w-[304px] border border-borders rounded-[20px]"
      >
        <div>
          <img src="~/assets/images/oranjeJuice.png" alt="" />
        </div>
        <div class="px-4 pb-5">
          <div class="flex justify-between text-sm leading-none text-price">
            <div>В наличии 33 шт</div>
            <div>70,90 грн</div>
          </div>
          <div class="font-semibold text-xl leading-none my-[7px] h-[82px]">
            Сок Ideas тыквенно-апельсиновый, 1л
          </div>
          <div class="flex justify-between">
            <div>
              <div class="text-2xl leading-none font-semibold">70,90 грн</div>
            </div>
            <div
              class="text-red py-2.5 px-4 border border-red rounded-[60px] cursor-pointer hover:bg-red hover:text-white duration-300"
            >
              В корзину
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col max-w-[304px] border border-borders rounded-[20px]"
      >
        <div>
          <img src="~/assets/images/BionolaMusli.jpg" alt="" />
        </div>
        <div class="px-4 pb-5">
          <div class="flex justify-between text-sm leading-none text-price">
            <div style="color: #bf7373">Появится завтра</div>
            <div>99,90 грн</div>
          </div>
          <div class="font-semibold text-xl leading-none my-[7px] h-[82px]">
            Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г
          </div>
          <div class="flex justify-between items-center">
            <div>
              <div class="text-red text-2xl leading-none font-semibold">
                99,90 грн
              </div>
              <div class="text-price line-through text-sm">129,00 грн</div>
            </div>
            <div
              class="text-red py-2.5 px-4 border border-red rounded-[60px] cursor-pointer hover:bg-red hover:text-white duration-300"
            >
              На завтра
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col max-w-[304px] border border-borders rounded-[20px]"
      >
        <div>
          <img src="~/assets/images/oranjeJuice.png" alt="" />
        </div>
        <div class="px-4 pb-5">
          <div class="flex justify-between text-sm leading-none text-price">
            <div>В наличии 3 шт</div>
            <div>70,90 грн</div>
          </div>
          <div class="font-semibold text-xl leading-none my-[7px] h-[82px]">
            Сок Ideas тыквенно-апельсиновый, 1л
          </div>
          <div class="flex justify-between">
            <div>
              <div class="text-2xl leading-none font-semibold">70,90 грн</div>
            </div>
            <div
              class="flex bg-filterBtn border border-categoryBorder font-bold gap-2 text-yellow p-1.5 rounded-[58px]"
            >
              <div
                class="flex- justify-center hover:bg-yellow hover:text-white hover:rounded-full px-2"
              >
                <div class="rounded-full">-</div>
              </div>
              <div>1</div>
              <div
                class="flex justify-center hover:bg-yellow hover:text-white hover:rounded-full px-2"
              >
                <div>+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-[200px] container">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">Супермаркет</div>
        <btn
          class="flex py-[10px] px-[22px] gap-4 text-categoryBtn hover:text-white hover:bg-yellow duration-300 bg-filterBtn border border-categoryBorder rounded-2xl cursor-pointer"
        >
          <div class="text-[22px]">Смотреть всё</div>
          <img src="~/assets/images/svg/right-arrow.svg" alt="" />
        </btn>
      </div>
    </div>
    <div class="flex container gap-6 pt-11">
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/drinks.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Вода <br />
          и напитки
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/milks.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Молоко, масло <br />
          и яйца
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/snacks.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Снэки <br />
          и сухофрукты
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/coffee.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Кофе, чай <br />и сладости</div>
      </div>
    </div>
    <div class="flex container gap-6 pt-5">
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/cereals.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Макароны <br />
          и крупы
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/bread.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Хлеб <br />
          и выпечка
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/sausage.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Масло, соусы <br />
          и специи
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/pickles.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Консервы <br />и соления</div>
      </div>
    </div>
    <div class="pt-[200px] container">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">Кулинария</div>
        <btn
          class="flex py-[10px] px-[22px] gap-4 text-categoryBtn hover:text-white hover:bg-yellow duration-300 bg-filterBtn border border-categoryBorder rounded-2xl cursor-pointer"
        >
          <div class="text-[22px]">Смотреть всё</div>
          <img src="~/assets/images/svg/right-arrow.svg" alt="" />
        </btn>
      </div>
    </div>
    <div class="flex container gap-6 pt-11">
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/bakery.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Выпечка</div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/pizza.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Пиццы</div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/grill-menu.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Гриль-меню</div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/meat.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Свежее мясо</div>
      </div>
    </div>
    <div class="flex container gap-6 pt-11">
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/salat.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Салаты</div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/soups.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Супы</div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/hot.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Горячие блюда</div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/deserts.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Десерты</div>
      </div>
    </div>
    <div class="pt-[200px] container">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">Заморозка</div>
        <btn
          class="flex py-[10px] px-[22px] gap-4 text-categoryBtn hover:text-white hover:bg-yellow duration-300 bg-filterBtn border border-categoryBorder rounded-2xl cursor-pointer"
        >
          <div class="text-[22px]">Смотреть всё</div>
          <img src="~/assets/images/svg/right-arrow.svg" alt="" />
        </btn>
      </div>
    </div>
    <div class="flex container gap-6 pt-11">
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/pelmeni.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Пельмени, вареники <br />
          и равиоли
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/hinkali.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Хинкали <br />
          и манты
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/half-fabrics.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Полу- <br />
          фабрикаты
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/freeze-veg.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Замороженные <br />
          овощи
        </div>
      </div>
    </div>
    <div class="flex container gap-6 pt-11">
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/fish.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Рыба и <br />
          морепродукты
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/fishMeat.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">Мясо</div>
      </div>
    </div>
    <div class="pt-[200px] container">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">Другое</div>
        <btn
          class="flex py-[10px] px-[22px] gap-4 text-categoryBtn hover:text-white hover:bg-yellow duration-300 bg-filterBtn border border-categoryBorder rounded-2xl cursor-pointer"
        >
          <div class="text-[22px]">Смотреть всё</div>
          <img src="~/assets/images/svg/right-arrow.svg" alt="" />
        </btn>
      </div>
    </div>
    <div class="flex container gap-6 pt-11">
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/beauty.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Красота <br />
          и гигиена
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/washes.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Стирка <br />
          и уборка
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/usefulTrifle.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Полезные <br />
          мелочи
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/appliances.png')})`,
        }"
        class="bg-contain bg-bottom bg-no-repeat w-[304px] h-[304px] pt-12 pl-10 border border-borders rounded-[58px]"
      >
        <div class="text-3xl text-supermarket">
          Бытовая <br />
          техника
        </div>
      </div>
    </div>
    <div class="pt-[200px] flex container justify-between items-center">
      <div class="flex gap-7 items-center">
        <div class="uppercase font-bold text-[32px]">Акции</div>
        <btn
          class="flex py-[10px] px-[22px] gap-4 text-categoryBtn hover:text-white hover:bg-yellow duration-300 bg-filterBtn border border-categoryBorder rounded-2xl cursor-pointer"
        >
          <div class="text-[22px]">Смотреть всё</div>
          <img src="~/assets/images/svg/right-arrow.svg" alt="" />
        </btn>
      </div>
      <div
        class="flex gap-2 bg-filterBtn border border-categoryBorder p-2 rounded-[58px]"
      >
        <btn class="hover:bg-yellow px-2 py-2 rounded-full cursor-pointer">
          <img src="~/assets/images/left-arrow.png" alt="" />
        </btn>
        <btn class="hover:bg-yellow px-2 py-2 rounded-full cursor-pointer">
          <img src="~/assets/images/right-arrow.png" alt="" />
        </btn>
      </div>
    </div>
    <div class="flex container gap-6 pt-11">
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/preorder.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[310px] h-[449px] pt-9 px-9 border border-borders rounded-[30px]"
      >
        <div class="text-2xl font-bold text-supermarket">
          Сделай предзаказ в кулинарии <br />
          со скидкой
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/celeb.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[310px] h-[449px] pt-9 px-9 border border-borders rounded-[30px]"
      >
        <div class="text-2xl font-bold text-supermarket">
          Праздник <br />
          к нам приходит
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/saleFor3.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[310px] h-[449px] pt-9 px-9 border border-borders rounded-[30px]"
      >
        <div class="text-2xl font-bold text-supermarket">
          Скидка на третий товар в корзине "Чистая линия"
        </div>
      </div>
      <div
        :style="{
          'background-image': `url(${require('~/assets/images/combo.png')})`,
        }"
        class="bg-cover bg-center bg-no-repeat w-[310px] h-[449px] pt-9 px-9 border border-borders rounded-[30px]"
      >
        <div class="text-2xl font-bold text-supermarket">
          Комбо-набор <br />
          3 пиццы за 1500 Р
        </div>
      </div>
    </div>
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
      <btn
        class="font-semibold text-[22px] px-7 py-3 border border-white rounded-[30px] cursor-pointer"
      >
        Получить промокод
      </btn>
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
        <btn
          class="text-red text-[22px] font-semibold py-3.5 px-9 border border-red rounded-[30px] cursor-pointer"
        >
          Оставить отзыв
        </btn>
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
            <btn
              class="py-2.5 px-[13px] border border-white rounded-2xl cursor-pointer"
              >Подписаться</btn
            >
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

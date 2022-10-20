<template>
  <div class="xiy flex justify-center items-center gap-6">
    <div class="uppercase">
      Питайтесь разнообразно и копите
      <span class="xiy-test rounded-[8px] text-red p-[3px] bg-yellow"
        >скидку</span
      >
      <span class="lowercase">до 10%</span>
    </div>
    <button class="px-[20px] py-[4px] border rounded-[30px]">
      Получить скидку
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
body {
  font-family: 'Nunito-Regular', 'serif';
}
.xiy {
  background: #ccc;
  &-test {
    background: yellow;
  }
}
</style>

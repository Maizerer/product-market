<template>
  <svg
    :class="getDirection"
    :width="size"
    :height="size"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.69322 0.289794L6.67075 5.26732C7.05701 5.65559 7.05701 6.28273 6.67075 6.671L1.69322 11.6485C1.32092 11.9681 0.770393 11.9681 0.398088 11.6485C-0.0190492 11.2911 -0.0677967 10.662 0.289598 10.2449L4.56027 5.97413L0.289548 1.69347C-0.0967141 1.3052 -0.0967141 0.678064 0.289548 0.289794C0.677818 -0.0964679 1.305 -0.0964679 1.69322 0.289794Z"
      :fill="iconColor"
    />
  </svg>
</template>
<script>
export default {
  name: 'IArrowRight',
  props: {
    size: {
      type: [Number, String],
      default: 18,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    direction: {
      type: String,
      default: 'right',
    },
  },
  computed: {
    iconColor() {
      return this.$utils.getColor(this.color)
    },
    getDirection() {
      return {
        'rotate-180': this.direction === 'left',
        'rotate-90': this.direction === 'bottom',
        '-rotate-90': this.direction === 'top',
      }
    },
  },
}
</script>

<template>
  <svg class="svg-icon" :style="{width: `${size}px`, height: `${size}px`}" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
  export default {
    name: 'icon-svg',
    props: {
      size: {
        type: Number,
        default: 14
      },
      iconClass: {
        type: String,
        required: true
      }
    },
    computed: {
      iconName () {
        return `#icon-${this.iconClass}`
      }
    }
  }
</script>

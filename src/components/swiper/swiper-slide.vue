<template>
  <div :class="slideClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swiper-slide',
  data () {
    return {
      slideClass: 'swiper-slide'
    }
  },
  created () {
    this.update()
  },
  mounted () {
    this.update()
    if (this.$parent.options.slideClass) {
      this.slideClass = this.$parent.options.slideClass
    }
  },
  updated () {
    this.update()
  },
  attached () {
    this.update()
  },
  methods: {
    update () {
      if (this.$parent && this.$parent.swiper && this.$parent.swiper.update) {
        this.$parent.swiper.update(true)
        if (this.$parent.options.loop) {
          this.$parent.swiper.reLoop()
        }
      }
    }
  }
}
</script>

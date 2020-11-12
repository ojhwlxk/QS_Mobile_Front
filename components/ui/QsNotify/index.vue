<template>
  <transition name="fade">
    <div class="qs_notify d-flex" @click="close" v-if="isShow">
      <div class="_content">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  model: {
    prop: 'isShow'
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '테스트입니다.'
    },
    closeAuto: {
      type: [Boolean, Number],
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.$emit('input', false)
    },
    setAutoClose () {
      if (this.closeAuto) {
        const delay = typeof this.closeAuto === 'number' ? this.closeAuto : 3000
        setTimeout(() => {
          this.close()
        }, delay)
      }
    }
  },
  watch: {
    isShow (val) {
      if (val) this.setAutoClose()
    }
  }
}
</script>

<style lang="scss" scoped>
.qs_notify {
  position: fixed;
  z-index: $zindex-fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;

  ._content {
    display: inline-block;
    font-size: 14px;
    color: $white;
    letter-spacing: -.5px;
    padding: 10px 16px;
    margin: auto;
    background-color: $gray-900;
    border-radius: 4px;
    opacity: .8
  }
}
</style>

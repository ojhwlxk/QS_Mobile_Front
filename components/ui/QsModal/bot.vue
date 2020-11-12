<template>
  <transition name="modal">
    <section class="modal qs_modal" v-if="isShow">

      <div class="modal-dialog modal_dialog_bot">
        <div class="modal-content">
          <div class="modal-body">
            <slot/>
          </div>
        </div>
      </div>

      <div class="modal-backdrop" @click="close"></div>
    </section>
  </transition>
</template>

<script>
export default {
  inject: ['$validator'],
  model: {
    prop: 'isShow'
  },
  props: {
    isShow: { // v-model로 바인딩 한 값
      type: Boolean,
      default: false
    },
    title: String
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    handleScroll (val) {
      document.body.style.overflow = val ? 'hidden' : ''
    }
  },
  watch: {
    isShow (val) {
      this.handleScroll(val)
    }
  },
  beforeDestroy () {
    this.handleScroll(false)
  }
}
</script>

<style lang="scss">
.modal_dialog_bot {
  display: flex;
  min-height: 100%;
  margin: 0 auto;

  // Ensure `modal-dialog-centered` extends the full height of the view (IE10/11)
  &::before {
    display: block; // IE10
    height: 100vh;
    content: "";
  }

  .modal-content {
    padding: 32px 16px 20px;
    border: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    align-self: flex-end;
    @include media-breakpoint-up(xl) {
      align-self: center;
      border-radius: 8px;
    }
  }

  .modal-body {
    text-align: center;

    ._tit {
      font-size: 14px;
    }

    ._txt {
      font-size: 12px;
      color: $body-color;
      letter-spacing: -.5px;
    }
  }
}
</style>

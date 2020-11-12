<template>
  <transition name="modal">
    <section class="modal qs_modal" v-if="isShow">

      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" :class="size ? `modal-${size}` : ''">
        <div class="modal-content">
          <header class="d-flex align-items-center mb-6">
            <h4 class="_tit" v-if="title">{{title}}</h4>
            <button type="button" @click="close" class="btn btn_close ml-auto" v-if="isClose"><i class="icon-qs-close"></i></button>
          </header>
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
      isClose: {
        type: Boolean,
        default: true
      },
      title: String,
      size: { // 1.sm, 2.(default), 3.lg, 4.xl
        type: String,
        default: ''
      }
    },
    methods: {
      close () {
        if (this.isClose) this.$emit('input', false)
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

<style lang="scss" scoped>
  .qs_modal {
    .modal-content {
      padding: 30px;
      border-top: 3px solid $primary;

      ._tit {
        font-size: 24px;
        color: $primary;
        font-weight: $font-weight-normal;
      }
    }

    .btn_close {
      padding: 0;
      border: 0;

      > i {
        font-size: 16px;
        color: #999;
      }
    }
  }
</style>

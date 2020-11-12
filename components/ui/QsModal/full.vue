<template>
  <transition name="page">
    <section class="modal qs_modal" v-if="isShow">

      <div class="modal-dialog">
        <div class="modal-content">
          <header class="modal_header px-16">
            <div class="row align-items-center h-100">
              <div class="col text-left" v-if="isClose">
                <button type="button" @click="close" class="btn btn_close"><i class="icon-qs-close"></i></button>
              </div>
              <div class="col-auto" v-if="title">
                <h4 class="_tit">{{title}}</h4>
              </div>
              <div class="col" v-if="isClose && title"></div>
            </div>
          </header>
          <div class="modal-body" :class="bodyClass">
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
      bodyClass: String
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
    .modal-dialog {
      margin: 0 auto;
      max-width: map-get($container-max-widths, "xl");
    }

    .modal-content {
      z-index: $zindex-modal;
      height: 100vh;
      border: none;
      @include transition($transition-base);
      @include media-breakpoint-up(xl) {
        max-height: calc(100vh - #{$modal-dialog-margin * 2}); // IE10/11
        margin-top: $modal-dialog-margin;
        overflow: hidden;
      }
    }

    .modal_header {
      height: $navbar-height;

      .btn_close {
        padding: 0;
        border: 0;

        > i {
          font-size: 20px;
          color: $black;
        }
      }

      ._tit {
        font-size: 16px;
      }
    }
  }
</style>

<style lang="scss">
  .list_filter {
    margin-top: 20px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      & + li {
        margin-top: 20px;
      }

      > i {
        font-size: 0;
        color: $primary;
        /*@include transition(font-size .1s ease);*/
      }

      ._label {
        font-size: 16px;
        padding: 0 8px;
      }

      &.active {
        > i {
          font-size: 16px;
        }

        ._label {
          font-weight: $font-weight-bold;
          color: $primary;
        }
      }
    }
  }
</style>

<!--
** Collapse
* slot: title, content
* isShareActive 가 참이면 index 를 필수로 받아야한다. 아코디언 기능
-->
<template>
  <div class="nb_collapse">
    <div class="d-flex align-items-center justi " :class="{'show': isShow}" v-if="$slots.left">
      <slot name="left"/>
      <div @click="isShow = !isShow" class="_tit ml-auto" :class="btnClass">
        <slot name="right"/>
      </div>
    </div>
    <div @click="isShow = !isShow" class="_tit" :class="btnClass" v-else>
      <slot/>
    </div>
    <transition name="collapse">
      <div class="_content" v-if="isShow">
        <slot name="content"/>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    inject: ['$validator'],
    model: {
      prop: 'activeIndex'
    },
    props: {
      activeIndex: [String, Number],
      index: Number,
      isActive: {
        type: Boolean,
        default: false
      },
      btnClass: String
    },
    computed: {
      isShareActive () {
        return typeof this.activeIndex !== 'undefined'
      },
      isShow: {
        get () {
          return this.isShareActive ? `${this.activeIndex}` === `${this.index}` : this.newIsActive
        },
        set (val) {
          if (this.isShareActive) {
            this.$emit('input', val ? this.index : '')
          } else {
            this.newIsActive = val
          }
        }
      }
    },
    data () {
      return {
        newIsActive: this.isActive
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nb_collapse {
    ._content {
      overflow: hidden;
      @include transition($transition-collapse);
    }
  }

  /* transition */
  .collapse-enter-to,
  .collapse-leave {
    max-height: 500px; // 원래 height 보다 작으면 수정해줘야함.
  }

  .collapse-enter,
  .collapse-leave-to {
    max-height: 0;
  }
</style>

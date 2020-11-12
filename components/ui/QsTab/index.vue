<template>
  <div class="qs_tab">
    <div class="container">
      <div class="row no-gutters">
        <div class="col" v-for="item in list">
          <nuxt-link :to="item.to" :replace="item.isReplace" :exact="item.isExact" class="_item" v-if="item.to">
            <span>{{item.name}}</span></nuxt-link>
          <button type="button" @click="item.func" class="btn _item" v-else-if="item.func">
            <span>{{item.name}}</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: function () {
          return [{ title: '제목', to: { name: 'index' } }]
        }
      },
      isExact: {
        type: Boolean,
        default: false
      },
      isReplace: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .qs_tab {
    background-color: $white;

    ._item {
      display: block;
      width: 100%;
      text-align: center;
      padding: 0;
      border: none;

      > span {
        display: inline-block;
        height: 38px;
        font-size: 14px;
        font-weight: $font-weight-bold;
        color: #999dad;
        line-height: 34px;
        padding: 0 4px;
      }

      &.active > span {
        color: $black;
        font-weight: $font-weight-bold;
        border-bottom: 4px solid $primary;
      }
    }
  }
</style>

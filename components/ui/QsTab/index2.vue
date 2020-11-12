<template>
  <div class="qs_tab container">
    <ul class="row no-gutters">
      <li class="col" @click="$emit('input', index)" v-for="(item, index) in list">
        <Item v-bind="item" :color="color" :isActive="value === index" :key="index"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Item from './Item'

export default {
  components: {
    Item
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
    color: String
  }
}
</script>

<style lang="scss">
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

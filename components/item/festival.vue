<template>
  <nuxt-link :to="to" class="festival_item">
    <div class="_img mb-8" :style="{ 'backgroundImage': `url('/sample/festival.jpg')`}"></div>
    <span class="_label" :class="{'_end': isEnd}">{{ isEnd ? '판매종료' : '판매중'}}</span>
    <h3 class="_tit mt-4">{{title}}</h3>
    <div class="_date">{{ date.start|date }}{{date.end ? ' - ' : ''}}{{ date.end|date }}</div>
  </nuxt-link>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    to: {
      type: Object,
      default: function () {
        return {}
      }
    },
    title: String,
    date: {
      type: Object,
      default: function () {
        return {
          start: '',
          end: ''
        }
      }
    }
  },
  computed: {
    isEnd () {
      return this.date.end < moment().format('x')
    }
  }
}
</script>

<style lang="scss" scoped>
.festival_item {
  display: block;

  ._img {
    width: 100%;
    padding-bottom: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
  }

  ._label {
    display: inline-block;
    font-size: 9px;
    //font-weight: $font-weight-bold;
    color: $primary;
    border: 1px solid $primary;
    border-radius: 2px;
    padding: 0 2px;

    &._end {
      color: #999dad;
      border-color: #999dad;
    }
  }

  ._tit {
    font-size: 16px;
    font-weight: $font-weight-normal;
    letter-spacing: .5px;
    color: $white;
    @include ellipsis-fix($headings-line-height);
  }

  ._date {
    font-size: 12px;
    color: $dark-text-gray;
  }
}
</style>

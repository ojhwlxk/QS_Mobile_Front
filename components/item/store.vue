<template>
  <nuxt-link :to="to" class="item_store">
    <div class="_img" :style="`backgroundImage: url('${img}')`"></div>
    <h3 class="_tit text-truncate">{{ title }}</h3>
    <div class="_info d-flex align-items-center">
      <img src="~assets/img/star.svg" class="mr-4">
      <b class="color-primary">{{ star }}</b>
      <span class="color-primary2">(200)</span>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      img: {
        type: String,
        default: '/sample/food-20.jpg'
      },
      title: {
        type: String,
        default: '또보겠지떡볶이집 호호'
      },
      star: {
        type: Number,
        default: 5
      },
      to: {
        type: [Object, String],
        default: '/'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item_store {
    display: block;

    ._tit {
      font-size: 16px;
      margin-top: 2px;
    }

    ._img {
      width: 100%;
      padding-bottom: 100%;
      background-size: cover;
      background-position: center;
    }

    ._info {
      font-size: 12px;

      > img {
        width: 1em;
        height: auto;
      }

      > b {
        margin-right: 2px;
      }
    }
  }
</style>

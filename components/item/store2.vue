<template>
  <nuxt-link :to="to" class="item_store d-flex align-items-center">
    <div>
      <div class="_img" :style="`backgroundImage: url('${imageURL}')`"></div>
    </div>
    <div class="ml-12">
      <h3 class="_tit text-truncate">{{title}}</h3>
      <p class="_txt mt-4">{{text}}</p>
      <div class="_info d-flex align-items-center">
        <img src="~assets/img/star.svg" class="mr-4">
        <b class="color-primary">{{star}}</b>
        <span class="color-primary2">({{comment}})</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      to: {
        type: [Object, String],
        default: '/'
      },
      imageURL: String,
      title: String,
      text: String,
      star: String,
      comment: Number
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

    ._txt {
      font-size: 12px;
      color: #999dad;
      line-height: 1.33;
    }

    ._img {
      width: 88px;
      height: 88px;
      background-size: cover;
      background-position: center;
      border-radius: $border-radius;
      overflow: hidden;
    }

    ._info {
      font-size: 12px;
      margin-top: 2px;

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

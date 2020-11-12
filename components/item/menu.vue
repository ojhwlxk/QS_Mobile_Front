<template>
  <nuxt-link :to="to" class="item_menu d-flex align-items-center">
    <div>
      <div class="_img" :style="`backgroundImage: url('${imageURL}')`"></div>
    </div>
    <div class="ml-12">
      <h3 class="_tit">{{title}}</h3>
      <div class="_info">{{text}}</div>
      <div class="_location" v-if="location">
        <span class="color-primary" v-if="location.text">{{location.text}},</span>
        <span class="color-primary2" v-if="location.meter">{{location.meter}}m</span>
      </div>
      <div class="_price">{{price | price}}원</div>
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
      location: {
        type: [Object, String],
        default: ''
      },
      price: Number
    }
  }
</script>

<style lang="scss" scoped>
  .item_menu {
    display: block;

    ._img {
      width: 88px;
      height: 88px;
      border-radius: 13px;
      background-position: center;
      background-size: cover;
    }

    ._tit {
      font-size: 16px;
    }

    ._info {
      font-size: 12px;
      color: #999dad;
    }

    ._location {
      font-size: 12px;
      font-weight: $font-weight-bold;
      color: #e95e89;
      margin-top: 2px;
    }

    ._price {
      font-size: 16px;
      color: $black;
      font-weight: $font-weight-bold;
      margin-top: 2px;
    }

    .dark & {
      ._price {
        font-weight: $dark-font-weight-bold;
        color: $dark-text-white;
      }
    }
  }
</style>

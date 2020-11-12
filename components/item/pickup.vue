<template>
  <nuxt-link :to="to" class="item_menu d-flex align-items-center">
    <div class="_img" :style="`backgroundImage: url('${imageURL}')`"></div>
    <div class="ml-12">
      <h3 class="d-flex align-items-center">
        <span class="_tit">{{title}}</span>
        <label class="_label" :style="{ backgroundColor: festival.color }" v-if="festival">{{festival.title}}</label>
      </h3>
      <div class="_info">{{info}}</div>
      <div class="_menus">{{detail}}</div>
      <div class="_time"><i class="icon-qs-time"></i> {{time}}</div>
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
      info: String,
      detail: String,
      time: String,
      festival: {
        type: [Boolean, Object],
        default: false
      }
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

    ._label {
      display: inline-block;
      max-width: 80px;
      min-width: 60px;
      font-size: 10px;
      font-weight: $font-weight-normal;
      color: $white;
      text-align: center;
      letter-spacing: .05em;
      padding: 1px 4px;
      margin: 0 0 0 6px;
      border-radius: 8px;
      border-top-right-radius: 0;
      @include ellipsis-fix(1.6);
    }

    ._info {
      font-size: 12px;
      color: #999dad;
    }

    ._menus {
      font-size: 10px;
      color: #555;
      margin-top: 2px;
    }

    ._time {
      font-size: 16px;
      color: $primary;
      font-weight: $font-weight-bold;
      margin-top: 4px;
    }
  }
</style>

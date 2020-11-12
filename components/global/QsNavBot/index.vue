<template>
  <nav class="nav_bot">
    <div class="container pt-12">
      <div class="row gx-4">
        <div class="col">
          <nuxt-link :to="{ name: 'main' }" class="nav_bot_item">
            <div class="_icon"><i class="icon-qs-queens"></i></div>
            <div class="_txt">홈</div>
          </nuxt-link>
        </div>
        <div class="col">
          <nuxt-link :to="{ name: 'main-surround' }" class="nav_bot_item">
            <div class="_icon"><i class="icon-qs-store"></i></div>
            <div class="_txt">주변매장</div>
          </nuxt-link>
        </div>
        <div class="col">
          <nuxt-link :to="{ name: 'main-pickup' }" class="nav_bot_item">
            <div class="_icon"><i class="icon-qs-qrcode"></i></div>
            <div class="_txt">픽업</div>
          </nuxt-link>
        </div>
        <div class="col">
          <nuxt-link :to="{ name: 'festival' }" class="nav_bot_item _new">
            <div class="_icon"><i class="icon-qs-festival"></i></div>
            <div class="_txt">페스티벌</div>
          </nuxt-link>
        </div>
        <div class="col">
          <nuxt-link :to="{ name: 'mypage' }" class="nav_bot_item">
            <div class="_icon"><i class="icon-qs-user-o"></i></div>
            <div class="_txt">마이퀸스</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.nav_bot {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: $zindex-fixed - 1;
  height: $nav-bot-height;
  background-color: $white;
  border-top: 1px solid rgba(3, 3, 3, 0.06);

  .dark & {
    background-color: $dark-component-background-color;
  }
}

.nav_bot_item {
  position: relative;
  display: block;
  text-align: center;
  color: #999dad;

  ._icon {
    i:before {
      font-size: 20px;
    }
  }

  ._txt {
    font-size: 9px;
    margin-top: 4px;
  }

  &.active {
    color: $primary;
  }

  &._new:before {
    content: '';
    position: absolute;
    top: -2px;
    right: calc(50% - 14px);
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: $primary;
  }

  /* dark */
  .dark & {
    color: $body-color;

    &.active {
      color: $dark-text-white;
    }

    &._new:before {
      background-color: $dark-text-white;
    }
  }
}
</style>

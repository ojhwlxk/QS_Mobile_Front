<template>
  <div>
    <hr class="_space">
    <div class="container">
      <ul class="list_order">
        <li v-for="n in 2">
          <!-- Item -->
          <div class="_item">
            <h2 class="_tit">헝그리베어 외 1</h2>
            <div class="_info text-truncate mt-4">헝그리베어 피자 L / 12:00 / 콤비네이션 1개 / 쉬림프 1개 / 마운틴듀 L 3…</div>
            <div class="_info mt-4">20,000원</div>
            <div class="row no-gutters mt-16">
              <div class="col pr-4">
                <nuxt-link :to="{ name: 'mypage-order-id-review', params: { id: 1 } }"
                           class="btn btn-sm btn-outline-default btn-block color-black font-weight-bold">리뷰 남기기</nuxt-link>
              </div>
              <div class="col pl-4">
                <nuxt-link :to="{ name: 'mypage-order-id', params: { id: 1 } }"
                           class="btn btn-sm btn-outline-default btn-block color-black font-weight-bold">주문내역</nuxt-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        bodyAttrs: {
          class: 'bg-light'
        }
      }
    },
    global: {
      nav: ['back', '주문/결제내역']
    },
    asyncData ({ store }) {
    }
  }
</script>

<style lang="scss" scoped>
  .list_order {
    li {
      border-bottom: 1px solid $border-color;
    }

    ._item {
      padding: 16px;
      margin-left: -16px;
      margin-right: -16px;
      background-color: $white;

      ._tit {
        font-size: 16px;
      }

      ._info {
        font-size: 12px;
        color: $black;
        letter-spacing: -.5px;
      }
    }
  }
</style>

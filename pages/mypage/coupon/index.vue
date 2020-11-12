<template>
  <div>
    <QsTab :list="tabs"/>
    <hr class="_space">
    <div class="container pb-20">
      <ul class="list_coupon" v-if="$route.query.type === 'end'">
        <li v-for="n in 3">
          <!-- Item -->
          <div class="_item">
            <div>
              <h2 class="_tit">헝그리베어 에이드 1잔 무료 쿠폰</h2>
              <div class="_info mt-8">헝그리베어 감사 쿠폰</div>
              <div class="_date">2020.02.20 ~ 2020.03.31</div>
            </div>
            <div class="ml-auto">
              <nuxt-link :to="{ name: 'fid-sid', params: { fid: 1, sid: 1 } }" type="button" class="btn btn_link">
                매장 바로가기 <i class="icon-qs-right"></i></nuxt-link>
            </div>
          </div>
        </li>
      </ul>
      <div class="txt_notice mt-8" v-else>사용 가능한 쿠폰이 없습니다.</div>
    </div>
  </div>
</template>

<script>
  import QsTab from '~/components/ui/QsTab/index'

  export default {
    components: {
      QsTab
    },
    head () {
      return {
        bodyAttrs: {
          class: 'bg-light'
        }
      }
    },
    global: {
      nav: ['back', '쿠폰', ['add']]
    },
    asyncData ({ query, redirect }) {
      if (!query.type) redirect({ name: 'mypage-coupon', query: { type: 'ing' } })
    },
    mounted () {
      this.$bus.$on('add', this.goRegister)
    },
    beforeDestroy () {
      this.$bus.$off('add')
    },
    data () {
      return {
        tabs: [
          { name: '사용가능쿠폰', to: { name: 'mypage-coupon', query: { type: 'ing' } }, isReplace: true, isExact: true },
          { name: '사용완료쿠폰', to: { name: 'mypage-coupon', query: { type: 'end' } }, isReplace: true, isExact: true }
        ]
      }
    },
    methods: {
      goRegister () {
        console.log('goRegister')
        this.$router.push({ name: 'mypage-coupon-register' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list_coupon {
    li {
      border-bottom: 1px solid $border-color;
    }

    ._item {
      display: flex;
      padding: 16px;
      margin-left: -16px;
      margin-right: -16px;
      background-color: $white;

      ._tit {
        font-size: 14px;
      }

      ._info {
        font-size: 12px;
        color: $black;
        letter-spacing: -.5px;
      }

      ._date {
        font-size: 10px;
      }

      .btn_link {
        font-size: 12px;
        color: $primary;
        letter-spacing: -.5px;
        padding: 0;
        border: none;
      }
    }
  }

  .txt_notice {
    font-size: 12px;
    text-align: center;
    letter-spacing: -.5px;
  }
</style>


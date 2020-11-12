<template>
  <div>
    <template>
      <header class="store_header">
        <div class="container">
          <h1 class="_tit">헝그리베어</h1>
          <div class="d-inline-flex align-items-center mx-auto mt-8">
            <QsStar :score="3.5"/>
            <b class="color-primary ml-8">3.5</b>
          </div>
          <div class="_info mt-4">리뷰 24 I 사장님리뷰 22</div>
          <div class="group_links d-flex justify-content-around mt-32">
            <button type="button" @click="handleZzim" class="btn _item">
              <i :class="`icon-qs-heart${isZzim ? '-fill color-primary' : ''}`"></i>
              <div>찜한가게</div>
            </button>
            <button type="button" class="btn _item"><i class="icon-qs-share-b"></i>
              <div>공유</div>
            </button>
          </div>
        </div>
      </header>

      <QsTab :list="tabs"/>
      <hr class="_space">
    </template>
    <nuxt-child/>
  </div>
</template>

<script>
  import QsTab from '~/components/ui/QsTab/index'
  import QsStar from '~/components/ui/QsStar'

  export default {
    components: {
      QsTab,
      QsStar
    },
    global: {
      nav: ['back', {
        text: '헝그리베어',
        scrollActive: true
      }]
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        tabs: [
          { name: '메뉴', to: { name: 'fid-sid', params: { fid: 1, sid: 1 } }, isExact: true, isReplace: true },
          { name: '리뷰', to: { name: 'fid-sid-review', params: { fid: 1, sid: 1 } }, isReplace: true },
          { name: '정보', to: { name: 'fid-sid-info', params: { fid: 1, sid: 1 } }, isReplace: true }
        ],
        isZzim: false
      }
    },
    methods: {
      handleZzim () {
        this.isZzim = !this.isZzim
      }
    }
  }
</script>

<style lang="scss" scoped>
  .store_header {
    padding: 76px 0 32px;
    text-align: center;

    ._tit {
      font-size: 20px;
    }

    ._info {
      font-size: 12px;
    }

    .group_links ._item {
      color: $black;
      padding: 0;
      border: none;

      i:before {
        font-size: 14px;
      }
    }
  }
</style>

<template>
  <div>
    <header class="foodcourt_header">
      <div class="_bg" :style="`backgroundImage: url('/sample/store.jpg')`"></div>
      <div class="container">
        <h1 class="_tit">푸드코트 메세나폴리스</h1>
        <div class="_address mt-8">서울 마포구 서교동 391-5</div>
        <div class="group_links d-flex justify-content-around my-28">
          <a href="tel:000" class="_item">
            <i class="icon-qs-call"></i>
            <div>전화</div>
          </a>
          <nuxt-link :to="{ name: 'fid-store', params: { fid: $route.params.fid } }" class="_item">
            <i class="icon-qs-store"></i>
            <div>가게</div>
          </nuxt-link>
          <nuxt-link :to="{ name: 'fid-info', params: { fid: $route.params.fid } }" class="_item">
            <i class="icon-qs-info"></i>
            <div>정보</div>
          </nuxt-link>
        </div>
        <button type="button" @click="() => {isCoupon = false}" class="btn btn-primary btn-block" v-if="isCoupon">2,000원 쿠폰받기</button>
        <div class="already_coupon" @click="() => {isCoupon = true}" v-else><i class="icon-qs-check-flower color-primary2 mr-8"></i>2,000원 쿠폰을 받았어요</div>
      </div>
      <transition name="fade">
        <div class="fixed-top header_category" ref="headerCategory" v-show="isHeaderCategory">
          <div class="container">
            <!-- Swiper -->
            <div v-swiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide slide_item" key="all">
                  <nuxt-link :to="{ name: 'fid-menu', params: { fid: $route.params.fid } }" exact class="_inner">
                    전체
                  </nuxt-link>
                </div>
                <div class="swiper-slide slide_item" v-for="(item, index) in categories" :key="index">
                  <nuxt-link :to="{ name: 'fid-menu', params: { fid: 1 }, query: { category: index + 1 } }" class="_inner" exact>
                    {{item.title}}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <div class="container">
      <ul class="list_category row no-gutters" ref="listCategory">
        <li class="col-3" v-for="(item, index) in categories" :key="index">
          <nuxt-link :to="{ name: 'fid-menu', params: { fid: $route.params.fid }, query: { category: index + 1 } }" class="_item">
            <div class="_img">
              <i class="icon-qs-store"></i>
            </div>
            <div class="_tit mt-4">{{item.title}}</div>
          </nuxt-link>
        </li>
      </ul>

      <ul class="list_">
        <li v-for="n in 9">
          <ItemMenu v-bind="menuData"/>
        </li>
      </ul>
    </div>

    <QsModal v-model="isFilter">
      <ul class="list_filter">
        <template v-for="(item, index) in filters">
          <li :class="{ 'active': selectedFilter === item.value }" @click="() => { handleFilter(item.value) }" :key="item.value">
            <i class="icon-qs-check-square"></i>
            <span class="_label">{{item.label}}</span>
          </li>
        </template>
      </ul>
    </QsModal>
  </div>
</template>

<script>
  import ItemMenu from '~/components/item/menu.vue'
  import QsModal from '~/components/ui/QsModal/full'
  import {throttle} from 'lodash'

  export default {
    components: {
      ItemMenu,
      QsModal
    },
    global: {
      nav: ['back', {
        text: '푸드코트 메세나폴리스',
        scrollActive: true
      }, 'filter'],
      navFloat: true
    },
    asyncData ({ store }) {
      return {
        categories: [
          { title: '한식' },
          { title: '분식' },
          { title: '양식' },
          { title: '중식' },
          { title: '일식' },
          { title: '세계음식' },
          { title: '패스트푸드' },
          { title: '카페·디저트' }
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        const listCategoryTop = this.$refs.listCategory.offsetTop
        const listCategoryHeight = this.$refs.listCategory.offsetHeight
        window.addEventListener('scroll', throttle((e) => {
          this.isHeaderCategory = window.scrollY > (listCategoryTop + listCategoryHeight - 100)
        }, 100))
      })
      this.$bus.$on('filter', () => {
        this.isFilter = true
      })
    },
    beforeDestroy () {
      this.$bus.$off('filter')
    },
    data () {
      return {
        isCoupon: true,
        menuData: {
          to: { name: 'fid-menu-mid', params: { fid: 1, mid: 1 } },
          imageURL: '/sample/food-23.jpg',
          title: '크림새우우동',
          text: '헝그리베어',
          price: 10000
        },
        filters: [
          { label: '추천순', value: 0 },
          { label: '인기순', value: 1 },
          { label: '높은가격순', value: 2 },
          { label: '낮은가격순', value: 3 }
        ],
        isFilter: false,
        selectedFilter: '',
        isHeaderCategory: false,
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 36,
          slideToClickedSlide: true,
          breakpoints: {
            767: {
              spaceBetween: 12
            }
          }
        }
      }
    },
    methods: {
      handleFilter (val) {
        if (this.selectedFilter === val) this.selectedFilter = ''
        else this.selectedFilter = val
      }
    }
  }
</script>

<style lang="scss" scoped>
  .foodcourt_header {
    position: relative;
    padding: 96px 0 80px;
    text-align: center;

    ._bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -10;
      background-size: cover;
      background-position: center;

      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba($black, .3);
      }
    }

    ._tit {
      font-size: 28px;
      color: $white;
    }

    ._address {
      font-size: 10px;
      color: #ecedee;
    }

    .group_links {
      ._item {
        color: $white;

        i:before {
          font-size: 14px;
        }
      }
    }

    .already_coupon {
      font-size: 14px;
      /*font-weight: $font-weight-bold;*/
      color: $white;
      line-height: 44px;
      /*letter-spacing: -.5px;*/
    }
  }

  .header_category {
    top: $navbar-height;
    height: 38px;
    background-color: $white;

    .slide_item {
      width: auto;

      ._inner {
        display: block;
        font-size: 14px;
        color: $body-color;
        line-height: 34px;
        padding: 0 4px;

        &.active {
          color: $black;
          font-weight: $font-weight-bold;
          border-bottom: 4px solid $primary;
        }
      }
    }
  }

  .list_category {
    border-top-left-radius: 40px;
    padding: 40px 16px 4px;
    margin-top: -40px;
    margin-left: -16px;
    margin-right: -16px;
    background-color: $white;

    li {
      margin-bottom: 20px;
    }

    ._item {
      display: block;
      color: $black;
      text-align: center;

      ._img {
        width: 57px;
        height: 57px;
        border-radius: 50%;
        background-color: #ecedee;
        padding: 9px 0;
        margin: 0 auto;

        > i:before {
          font-size: 38px;
        }
      }

      ._tit {
        font-size: 13px;
        font-weight: $font-weight-bold;
      }
    }
  }
</style>

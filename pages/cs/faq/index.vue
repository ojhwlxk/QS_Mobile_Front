<template>
  <div class="page_faq">
    <div class="fixed-top faq_category">
      <div class="container">
        <!-- swiper -->
        <div v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide_item" v-for="(item, index) in categories" :key="index">
              <div class="_inner" :class="{ 'active': activeCategory === item.value }" @click="() => { handleCategory(item.value) }">
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="_space">

    <div class="container bg-white">
      <ul class="list_faq">
        <li v-for="(n, index) in 5">
          <div class="_item" :class="{ 'active': activeIndex === index }" @click="setActiveIndex(index)">
            <div class="d-flex">
              <h3 class="_tit">주문 취소는 어떻게 하나요?</h3>
              <div class="ml-auto">
                <i class="icon-qs-down arr_rotate"></i>
              </div>
            </div>
            <transition name="collapse">
              <div v-show="activeIndex === index" style="max-height: 150px;">
                <div class="_content pt-16">
                  공지와 관련된 내용이 표시되는 부분입니다. 공지와 관련된 내용이 표시되는 부분입니다. 공지와 관련된 내용이 표시되는 부분입니다.<br><br>

                  <b>• 소제목</b><br>
                  공지와 관련된 내용이 표시되는 부분입니다. 공지와 관련된 내용이 표시되는 부분입니다. 공지와 관련된 내용이 표시되는 부분입니다.
                </div>
              </div>
            </transition>
          </div>
        </li>
      </ul>
    </div>
    <hr class="_space">
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
      nav: ['back', '자주 묻는 질문', ['search']]
    },
    asyncData ({ query, redirect }) {
    },
    data () {
      return {
        activeCategory: 1,
        activeIndex: -1,
        categories: [
          { title: 'TOP10', value: 1 },
          { title: '회원가입', value: 2 },
          { title: '바로결제', value: 3 },
          { title: '리뷰관리', value: 4 },
          { title: '이용관리', value: 5 }
        ],
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 36,
          slideToClickedSlide: true,
          breakpoints: {
            767: {
              spaceBetween: 24
            }
          }
        }
      }
    },
    methods: {
      setActiveIndex (index) {
        this.activeIndex = this.activeIndex === index ? -1 : index
      },
      handleCategory (value) {
        console.log('handleCategory', value)
        this.activeCategory = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page_faq {
    padding-top: 38px;
  }

  .faq_category {
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

  .list_faq {
    li + li {
      border-top: 1px solid $border-color;
    }

    ._item {
      padding: 16px;
      margin-left: -16px;
      margin-right: -16px;

      ._tit {
        font-size: 14px;
      }

      ._arr {
        display: block;
        font-size: 14px;
        color: $black;
      }

      ._content {
        font-size: 12px;
        color: $black;
        letter-spacing: -.5px;
      }

      &.active {
        background-color: #f8f9fa;
      }
    }
  }
</style>

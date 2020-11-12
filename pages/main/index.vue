<template>
  <div>
    <!-- Swiper -->
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <nuxt-link :to="{ name: 'cs-event-id', params: {id:1} }" class="reco_banner_item d-flex flex-column" :style="`backgroundImage: url('${item.imgURL}')`">
            <div class="_tit" v-html="item.title"></div>
            <div class="mt-20" v-html="item.text"></div>
            <div class="_date mt-auto">{{ item.date }}</div>
          </nuxt-link>
        </div>
      </div>
      <div class="swiper_pagination"></div>
    </div>

    <div class="container pt-20 pb-40">
      <h2 class="main_tit"><span class="color-primary">퀸스</span> 추천 상품</h2>
      <ul>
        <li v-for="n in 3" class="mt-16">
          <ItemMenu v-bind="menuData"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ItemMenu from '~/components/item/menu.vue'

export default {
  components: {
    ItemMenu
  },
  global: {
    nav: ['', 'logo', 'cart'],
    navColor: 'primary',
    navBot: true,
    footer: true
  },
  asyncData ({ store }) {
    return {
      list: [
        {
          title: '집에서 즐기는<br><b>Premium Dining</b>',
          text: '<span class="_txt">영양제부터 홍삼까지</span><label class="_label ml-8">-50%</label>',
          date: '02.14 - 02.29',
          imgURL: '/sample/dining.jpg'
        },
        {
          title: '집에서 즐기는<br><b>Premium Dining</b>',
          text: '<span class="_txt">영양제부터 홍삼까지</span><label class="_label ml-8">-50%</label>',
          date: '02.14 - 02.29',
          imgURL: '/sample/food-11.jpg'
        },
        {
          title: '집에서 즐기는<br><b>Premium Dining</b>',
          text: '<span class="_txt">영양제부터 홍삼까지</span><label class="_label ml-8">-50%</label>',
          date: '02.14 - 02.29',
          imgURL: '/sample/menu.jpg'
        }
      ]
    }
  },
  data () {
    return {
      menuData: {
        to: { name: 'fid-menu-mid', params: { fid: 1, mid: 1 } },
        imageURL: '/sample/food-23.jpg',
        title: '크림새우우동',
        text: '메세나폴리스 I 테이스틸러',
        location: {
          meter: 59,
          text: '도보 4분'
        },
        price: 6900
      },
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper_pagination',
          type: 'fraction'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.reco_banner_item {
  height: 340px;
  padding: 36px 16px 16px;
  background-size: cover;
  background-position: center;

  ._tit {
    font-size: 30px;
    color: $white;
    line-height: $headings-line-height;
  }

  ._txt {
    font-size: 14px;
    letter-spacing: -.5px;
    color: $white;
  }

  ._label {
    display: inline-block;
    font-size: 10px;
    color: $white;
    letter-spacing: 0;
    background-color: $primary;
    padding: 0 6px;
    margin-left: 6px;
    border-radius: 20px;
    border-top-right-radius: 0;
  }

  ._date {
    font-size: 13px;
    color: $white;
  }
}
</style>

<style lang="scss" scoped>
.swiper_pagination {
  position: absolute;
  left: auto;
  right: 16px;
  bottom: 16px;
  z-index: 9999;
  display: inline-block;
  width: 33px;
  font-size: 10px;
  color: $white;
  line-height: 18px;
  text-align: center;
  background-color: rgba($black, .1);
  border-radius: 9px;
}
</style>

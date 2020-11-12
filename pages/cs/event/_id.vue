<template>
  <div>
    <img src="/sample/event-detail.jpg" class="img-fluid">
    <div class="container pb-40">
      <ul>
        <li v-for="(item, index) in menuList" class="mt-16">
          <ItemMenu v-bind="item" :key="index"/>
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
    nav: ['back', '이벤트']
  },
  asyncData ({ store }) {
    return {
      menuList: [
        {
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
        {
          to: { name: 'fid-menu-mid', params: { fid: 1, mid: 1 } },
          imageURL: '/sample/food-22.jpg',
          title: '칠리 파스타',
          text: '메세나폴리스 I 테이스틸러',
          location: {
            meter: 59,
            text: '도보 4분'
          },
          price: 15000
        },
        {
          to: { name: 'fid-menu-mid', params: { fid: 1, mid: 1 } },
          imageURL: '/sample/food-21.jpg',
          title: '버터치킨커리',
          text: '메세나폴리스 I 테이스틸러',
          location: {
            meter: 59,
            text: '도보 4분'
          },
          price: 13500
        }
      ]
    }
  }
}
</script>

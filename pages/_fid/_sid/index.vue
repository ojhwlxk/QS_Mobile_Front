<template>
  <div>
    <div class="container">
      <ul class="list_">
        <li v-for="n in 3">
          <ItemMenu v-bind="menuData"/>
        </li>
      </ul>
    </div>
    <footer class="store_footer">
      <div class="container py-16">
        ･ 메뉴이미지는 상품의 종류에 따라 제공되는 이미지로 실제 음식과 다를 수 있습니다.<br>
        ･ 상단 메뉴 및 가격은 업소에서 제공한 정보를 기준으로 작성되었으며 변동될 수 있습니다.<br>
        ･ (주)퀸스스마일은 상품거래에 대한 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
        따라서, (주)퀸스스마일은 상품･거래정보 및 거래에 대하여 책임을 지지 않습니다.<br>
        ･ 퀸스스마일 고객센터 : 0000-0000<br>
      </div>
    </footer>
  </div>
</template>

<script>
  import ItemMenu from '~/components/item/menu.vue'

  export default {
    components: {
      ItemMenu
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        menuData: {
          to: { name: 'fid-menu-mid', params: { fid: 1, mid: 1 } },
          imageURL: '/sample/food-23.jpg',
          title: '크림새우우동',
          text: '입 안 가득 퍼지는 다섯 가지 프리미엄 치즈의 풍부한 맛!',
          price: 10000
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .store_footer {
    font-size: 10px;
    background-color: $light;
    border-top: 1px solid $border-color;
  }
</style>

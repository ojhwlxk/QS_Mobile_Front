<template>
  <div>
    <hr class="_space">
    <div class="container py-4">
      <ul class="list_">
        <li v-for="n in 9">
          <ItemStore2 v-bind="storeData"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ItemStore2 from '~/components/item/store2.vue'

  export default {
    components: {
      ItemStore2
    },
    global: {
      nav: ['back', '찜한가게']
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        storeData: {
          to: { name: 'fid-sid', params: { fid: 1, sid: 1 } },
          imageURL: '/sample/food-6.jpg',
          title: '헝그리베어',
          text: '저렴하고 토핑 가득한 맛 좋은 피자와 시원한 맥주 즐기러 오세요~! 치맥보단 피맥이지!!',
          star: '4.5',
          comment: 20
        }
      }
    }
  }
</script>

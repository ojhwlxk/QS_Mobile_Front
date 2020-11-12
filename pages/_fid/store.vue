<template>
  <div>
    <hr class="_space">
    <div class="container py-20">
      <ul class="list_store">
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
      nav: ['back', '메세나폴리스 가게', ['search']]
    },
    asyncData ({ store }) {
    },
    mounted () {
      this.$bus.$on('search', this.handleSearch)
    },
    beforeDestroy () {
      this.$bus.$off('search')
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
    },
    methods: {
      handleSearch (keyword) {
        console.log(this.$route.name, keyword)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list_store {
    li + li {
      margin-top: 16px;
    }
  }
</style>

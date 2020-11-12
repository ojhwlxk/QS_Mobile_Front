<template>
  <div class="container pt-4 pb-24">
    <ul class="list_">
      <li v-for="(item, index) in list" :key="index">
        <ItemPickup v-bind="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import ItemPickup from '@/components/item/pickup.vue'

  export default {
    components: {
      ItemPickup
    },
    global: {
      navColor: 'primary',
      navBot: true
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        list: [
          {
            to: { name: 'main-pickup-id', params: { id: 1 } },
            imageURL: '/sample/food-23.jpg',
            title: '크림새우우동',
            info: '메세나폴리스 / 테이스틸러',
            detail: '크림새우우동(매운맛) 1개 외 2',
            time: '2020.02.02 I PM 12:30',
            festival: false
          },
          {
            to: { name: 'main-pickup-id', params: { id: 1 } },
            imageURL: '/sample/food-23.jpg',
            title: '크림새우우동',
            info: '메세나폴리스 / 테이스틸러',
            detail: '크림새우우동(매운맛) 1개 외 2',
            time: '2020.02.02 I PM 12:30',
            festival: {
              title: '워터밤 서울',
              color: '#00bc09'
            }
          },
          {
            to: { name: 'main-pickup-id', params: { id: 1 } },
            imageURL: '/sample/food-23.jpg',
            title: '크림새우우동',
            info: '메세나폴리스 / 테이스틸러',
            detail: '크림새우우동(매운맛) 1개 외 2',
            time: '2020.02.02 I PM 12:30',
            festival: {
              title: '2020 워터밤 부산',
              color: '#254087'
            }
          }
        ]
      }
    }
  }
</script>

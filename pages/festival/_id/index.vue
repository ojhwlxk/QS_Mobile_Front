<template>
  <div class="festival_detail">
    <div class="_img" :style="{ backgroundImage: `url('${detail.thumbnail}')`}"></div>
    <div class="container pt-16 pb-20">
      <h3 class="_tit">{{ detail.title }}</h3>
      <div class="_date mt-8 mb-16">{{ detail.date.start|date }}{{ detail.date.end ? ' - ' : '' }}{{ detail.date.end|date }}</div>
      <button type="button" @click="() => { isModalLocation = true }" class="btn btn-darker _location"><i class="icon-qs-location"></i> &nbsp; 페스티벌 위치 보기
      </button>
    </div>

    <!-- Tab -->
    <QsTab :list="categories" v-model="activeCate" color="#00bc09" class="px-xs-0"/>
    <hr class="_space">

    <!-- Content -->
    <section v-if="activeCate === 0">
      티켓
    </section>
    <section v-else-if="activeCate === 1">
      주차장
    </section>
    <section v-else-if="activeCate === 2">
      락커
    </section>
    <section v-else-if="activeCate === 3">
      F&B
    </section>

    <QsModal v-model="isModalLocation">
      <div class="model_inner d-flex align-items-center">
        <img src="/sample/location.jpg" class="img-fluid">
      </div>
    </QsModal>
  </div>
</template>

<script>
import QsTab from '~/components/ui/QsTab/index2'
import QsModal from '~/components/ui/QsModal/full'

export default {
  components: {
    QsTab,
    QsModal
  },
  global: {
    nav: ['back', '워터밤 서울', 'info'],
    navBot: true
  },
  asyncData ({ query }) {
    return {
      type: query.type
    }
  },
  mounted () {
    this.$bus.$on('info', () => {
      this.$router.push({
        name: 'festival-id-info',
        params: { id: this.detail.id }
      })
    })
  },
  beforeDestroy () {
    this.$bus.$off('info')
  },
  data () {
    return {
      detail: {
        id: 1,
        thumbnail: '/sample/festival.jpg',
        title: '워터밤 서울 2020',
        date: {
          start: 1628175600000,
          end: 1628348400000
        },
        color: '#00bc09'
      },
      activeCate: 0,
      activeFood: 0,
      categories: [
        { name: '티켓' },
        { name: '주차장' },
        { name: '락커' },
        { name: 'F&B' }
      ],
      foodCategories: [
        { name: '전체' },
        { name: '한식' },
        { name: '분식' },
        { name: '양식' },
        { name: '중식' },
        { name: '일식' },
        { name: '세계음식' },
        { name: '패스트푸드' },
        { name: '카페·디저트' }
      ],
      isModalLocation: false
    }
  }
}
</script>

<style lang="scss" scoped>
.festival_detail {
  text-align: center;

  ._img {
    padding-bottom: (564/735)*100%;
    background-size: cover;
    background-position: center;
  }

  ._tit {
    font-size: 20px;
    font-weight: $font-weight-normal;
    color: $white;
    letter-spacing: -.5px;
  }

  ._date {
    font-size: 14px;
    color: $dark-text-gray;
  }

  ._location {
    font-size: 12px;
    font-weight: $font-weight-base;
    padding: 6px 17px;
  }
}

.model_inner {
  height: 100%;
  padding-bottom: $navbar-height;
}
</style>

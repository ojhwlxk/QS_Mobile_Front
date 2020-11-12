<template>
  <div>
    <!-- banner -->
    <transition name="collapse">
      <section class="festival_banner container" v-show="isBanner">
        <div class="d-flex align-items-center">
          <div class="_txt mr-auto">페스티벌 티켓부터 락커까지 구매하실 수 있습니다.</div>
          <button type="button" @click="() => { isBanner = false }" class="btn btn_close"><i class="icon-qs-close"></i></button>
        </div>
      </section>
    </transition>

    <div class="container py-20">
      <header class="festival_header d-flex align-items-center">
        <span class="_num mr-auto">전체({{ list.length }})</span>
        <button type="button" @click="() => {isFilter=true}" class="btn btn_icon"><i class="icon-qs-filter"></i></button>
      </header>
      <ul class="list_festival row gx-8 mt-16">
        <li class="col-6" v-for="(item, index) in list" :key="index">
          <FetivalItem v-bind="item" :to="{ name: 'festival-id', params: {id: item.id}}"/>
        </li>
      </ul>
    </div>

    <QsModal v-model="isFilter">
      <div class="container">
        <ul class="list_filter">
          <template v-for="(item, index) in filters">
            <li :class="{ 'active': selectedFilter === item.value }" @click="() => { handleFilter(item.value) }" :key="item.value">
              <i class="icon-qs-check-square"></i>
              <span class="_label">{{ item.label }}</span>
            </li>
          </template>
        </ul>
        <hr class="my-28">
        <ul class="list_filter">
          <template v-for="(item, index) in sorts">
            <li :class="{ 'active': selectedSort === item.value }" @click="() => { handleSort(item.value) }" :key="item.value">
              <i class="icon-qs-check-square"></i>
              <span class="_label">{{ item.label }}</span>
            </li>
          </template>
        </ul>
      </div>
    </QsModal>
  </div>
</template>

<script>
import FetivalItem from '~/components/item/Festival'
import QsModal from '~/components/ui/QsModal/full'

export default {
  components: {
    FetivalItem,
    QsModal
  },
  global: {
    nav: ['', 'logo', 'search'],
    navBot: true
  },
  data () {
    return {
      isBanner: true,
      isFilter: false,
      selectedFilter: '',
      selectedSort: '',
      filters: [
        { label: '전체', value: 0 },
        { label: '판매중', value: 1 },
        { label: '판매종료', value: 2 }
      ],
      sorts: [
        { label: '인기순', value: 0 },
        { label: '거리순', value: 1 }
      ],
      list: [
        {
          id: 1,
          thumbnail: '/sample/festival.jpg',
          title: '레인보우 페스티벌',
          date: {
            start: 1628175600000,
            end: 1628348400000
          }
        },
        {
          id: 1,
          thumbnail: '/sample/festival.jpg',
          title: '워터밤 서울 워터밤 서울워터밤 서울',
          date: {
            start: 1630681200000
          }
        },
        {
          id: 1,
          thumbnail: '/sample/festival.jpg',
          title: '워터밤 부산',
          date: {
            start: 1630781200000
          }
        },
        {
          id: 1,
          thumbnail: '/sample/festival.jpg',
          title: '5TARDIUM',
          date: {
            start: 1562943600000,
            end: 1601132400000
          }
        }
      ]
    }
  },
  methods: {
    handleFilter (val) {
      if (this.selectedFilter === val) this.selectedFilter = ''
      else this.selectedFilter = val
    },
    handleSort (val) {
      if (this.selectedSort === val) this.selectedSort = ''
      else this.selectedSort = val
    }
  }
}
</script>

<style lang="scss" scoped>
.festival_banner {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: $primary;

  ._txt {
    font-size: 12px;
    color: $white;
  }

  .btn_close {
    padding: 0;
    border: none;

    i:before {
      display: block;
      font-size: 16px;
      color: $white;
    }
  }
}

.festival_header {
  ._num {
    font-size: 12px;
    font-weight: $font-weight-normal;
    color: #999dad;
  }

  .btn_icon {
    padding: 0;
    border: none;

    i:before {
      display: block;
      font-size: 20px;
      color: $white;
    }
  }
}

.list_festival li {
  margin-bottom: 24px;
}
</style>

<template>
  <div>
    <div class="container py-20">
      <div class="group_spot">
        <div class="_item"><i class="icon-qs-spot"></i> <span>{{ currentPosition }}</span></div>
      </div>
      <div class="item_foodcourt mt-20">
        <div class="d-flex align-items-center px-16 py-12" @click="() => { goStore(1) }">
          <div>
            <h2 class="_tit">{{ detail.title }}</h2>
            <div class="_location">
              <span class="color-primary">도보 {{ detail.walk }}분,</span>
              <span class="color-primary2">{{ detail.meter }}m</span>
            </div>
          </div>
          <span class="_link ml-auto">매장상세 <i class="icon-qs-right-circle color-primary"></i></span>
        </div>
        <div class="_map" id="map" @click="goSurroundList"></div>
      </div>
    </div>
    <hr class="_space">

    <div class="container py-20">
      <header class="d-flex align-items-center mb-16">
        <h2 class="header_tit"><span class="color-primary">{{ detail.title }}</span> 가게</h2>
        <nuxt-link :to="{ name: 'fid-store', params: { fid: 1 } }" class="btn_link ml-auto">전체보기 <i class="icon-qs-right"></i></nuxt-link>
      </header>

      <!-- Swiper -->
      <div v-swiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide_item" v-for="n in 8" :key="n">
            <ItemStore :to="{ name: 'fid-sid', params: { fid: 1, sid: 1} }"/>
          </div>
        </div>
        <div class="swiper_pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemStore from '~/components/item/store'

export default {
  components: {
    ItemStore
  },
  global: {
    navColor: 'primary',
    navBot: true
  },
  head: {
    script: [
      { src: 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mqc6xtncwo&callback=initMap' }
    ]
  },
  asyncData () {
    return {
      detail: {
        title: '메세나폴리스',
        position: {
          latitude: 37.550614,
          longitude: 126.913728
        },
        meter: '27',
        walk: '2'
      }
    }
  },
  data () {
    return {
      currentPosition: '현재위치',
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 8
      }
    }
  },
  beforeMount () {
    window.initMap = () => {
      this.setMap()
    }
  },
  methods: {
    goStore (id) {
      this.$router.push({ name: 'fid-menu', params: { fid: id } })
    },
    goSurroundList () {
      this.$router.push({ name: 'main-surround-list' })
    },
    setMap () {
      const { latitude, longitude } = this.detail.position
      const position = new window.naver.maps.LatLng(latitude, longitude)
      const map = new window.naver.maps.Map('map', {
        center: position,
        draggable: false,
        zoom: 16,
        scrollWheel: false, // 마우스 스크롤 휠을 이용한 지도 확대/축소 허용 여부
        pinchZoom: false, // 핀치 제스처를 이용한 지도 확대/축소 허용 여부
        scaleControl: false, // 지도 축척 컨트롤의 표시 여부
        mapDataControl: false // 지도 데이터 저작권 컨트롤의 표시 여부
        // zoomOrigin: position // 줌 효과 시 고정하여 적용할 기준 좌표
      })
      const marker = new window.naver.maps.Marker({
        position: position,
        map: map,
        icon: {
          content: `<div class="map_marker"><img src="/img/icon/marker2.svg"><span>${this.detail.title}</span></div>`,
          scaledSize: new window.naver.maps.Size(18, 23),
          origin: new window.naver.maps.Point(0, 0)
        }
        // animation: window.naver.maps.Animation.DROP
      })
      console.log(marker)
    }
  }
}
</script>

<style lang="scss" scoped>
.group_spot {
  ._item {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: $font-weight-bold;
    color: $black;
    background-color: #f8f9fa;
    padding: 7px 12px;
    box-shadow: 2px 4px 9px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    border-top-right-radius: 0;

    i {
      margin-right: 5px;
      margin-bottom: 1px;
    }
  }
}

.item_foodcourt {
  display: block;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 2px 4px 9px 0 rgba(0, 0, 0, 0.2);

  ._tit {
    font-size: 16px;
  }

  ._location {
    font-size: 12px;
    font-weight: $font-weight-bold;
  }

  ._link {
    font-size: 12px;
    color: #999dad;
  }

  ._map {
    width: 100%;
    height: 133px;
    background-color: $gray-500;
  }
}

.header_tit {
  font-size: 20px;
}

.btn_link {
  font-size: 12px;
  color: #999dad;
}

.slide_item {
  width: 128px;
  margin-right: 8px;
}
</style>

<style lang="scss">
.map_marker {
  img {
    width: 18px;
    height: 23px;
    box-shadow: 0 1px 4px 0 rgba(3, 3, 3, 0.1);
  }

  span {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, calc(100% + 2px));
    font-size: 12px;
    font-weight: $font-weight-bold;
    color: #232323;
    letter-spacing: -.1px;
    white-space: nowrap;
  }
}
</style>

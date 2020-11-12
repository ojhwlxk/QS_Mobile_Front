<template>
  <div>
    <div class="_map" id="map" @click="goSurroundMap"></div>
    <div class="container">
      <ul class="list_">
        <li v-for="(item, index) in list" :key="index">
          <!-- Item -->
          <nuxt-link :to="{ name: 'fid-menu', params: { fid: index+1 } }" class="map_item">
            <div>
              <h2 class="_tit">{{ item.title }}</h2>
              <div class="_address mt-4">{{ item.address }}</div>
            </div>
            <div class="_info">
              <span class="color-primary">{{ item.meter }}m,</span>
              <span class="color-primary2">도보 {{ item.walk }}분</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MixinMap from '~/components/mixins/map'

export default {
  mixins: [MixinMap],
  global: {
    nav: ['back', '주변매장']
  },
  asyncData ({ store }) {
    return {
      list: [
        { title: '푸드코트 메세나폴리스', address: '서울 마포구 서교동 391-5', meter: 27, walk: 4 },
        { title: 'KT&G 상상마당', address: '서울 마포구 서교동 391-5', meter: 30, walk: 4 },
        { title: '푸드코트 홈플러스', address: '서울 마포구 서교동 391-5', meter: 70, walk: 5 },
        { title: '연세대 푸드코트', address: '서울 마포구 서교동 391-5', meter: 154, walk: 10 },
        { title: '홈플러스 월드컵점', address: '서울 마포구 서교동 391-5', meter: 181, walk: 10 },
        { title: '이마트 수색점', address: '서울 마포구 서교동 391-5', meter: 200, walk: 15 }
      ]
    }
  },
  methods: {
    goSurroundMap () {
      this.$router.push({ name: 'main-surround-map' })
    },
    async setMap () {
      const { coords: {latitude, longitude} } = await this.getCurrentPosition()
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
          url: '/img/icon/marker2.svg',
          scaledSize: new window.naver.maps.Size(18, 23),
          origin: new window.naver.maps.Point(0, 0)
        },
        animation: window.naver.maps.Animation.DROP
      })
      console.log(marker)
    }
  }
}
</script>

<style lang="scss" scoped>
._map {
  width: 100%;
  height: 135px;
}

.map_item {
  display: flex;
  align-items: center;

  ._tit {
    font-size: 14px;
  }

  ._address {
    font-size: 12px;
    letter-spacing: -.5px;
    color: $body-color;
  }

  ._info {
    font-size: 12px;
    font-weight: $font-weight-bold;
    line-height: -.5px;
    margin-left: auto;
  }
}
</style>

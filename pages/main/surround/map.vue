<template>
  <div class="surround_map">
    <div class="_map" id="map"></div>
    <button type="button" @click="" class="btn btn-white btn_on_map _research"><i class="icon-qs-location"></i> 이 지역 재검색</button>
    <button type="button" @click="goBack" class="btn btn-white btn_on_map _list"><i class="icon-qs-menu"></i> 목록</button>
    <button type="button" @click="panToMyPositon" class="btn btn_on_map _current"><i class="icon-qs-spot"></i></button>
  </div>
</template>

<script>
import MixinMap from '~/components/mixins/map'

export default {
  mixins: [MixinMap],
  layout: 'empty',
  asyncData () {
    return {
      list: [
        { title: '푸드코트 메세나폴리스', address: '서울 마포구 서교동 391-5', meter: 27, walk: 4, position: { lat: 37.550993, lng: 126.913772 } },
        { title: 'KT&G 상상마당', address: '서울 마포구 서교동 391-5', meter: 30, walk: 4, position: { lat: 37.550918, lng: 126.921122 } },
        { title: '홈플러스 월드컵점', address: '서울 마포구 서교동 391-5', meter: 70, walk: 5, position: { lat: 37.567539, lng: 126.897327 } },
        { title: '연세대 푸드코트', address: '서울 마포구 서교동 391-5', meter: 154, walk: 10, position: { lat: 37.565705, lng: 126.938475 } },
        { title: '이마트 수색점', address: '서울 마포구 서교동 391-5', meter: 200, walk: 15, position: { lat: 37.579924, lng: 126.898447 } },
        { title: '이마트 수색점', address: '서울 마포구 서교동 391-5', meter: 200, walk: 15, position: { lat: 37.532346, lng: 126.901953 } }
      ]
    }
  },
  data () {
    return {
      map: null,
      currentPosition: { lat: 37.566270, lng: 126.977913 }
    }
  },
  methods: {
    async setMap () {
      const { coords: { latitude, longitude } } = await this.getCurrentPosition()
      this.currentPosition = new window.naver.maps.LatLng(latitude, longitude)
      this.map = new window.naver.maps.Map('map', {
        center: this.currentPosition,
        // draggable: false,
        zoom: 14,
        minZoom: 11,
        // scrollWheel: false, // 마우스 스크롤 휠을 이용한 지도 확대/축소 허용 여부
        // pinchZoom: false, // 핀치 제스처를 이용한 지도 확대/축소 허용 여부
        scaleControl: false, // 지도 축척 컨트롤의 표시 여부
        mapDataControl: false // 지도 데이터 저작권 컨트롤의 표시 여부
        // zoomOrigin: position // 줌 효과 시 고정하여 적용할 기준 좌표
      })

      this.setMyLocation()
      this.initMarkers()
    },
    setMyLocation () {
      const myLocation = new window.naver.maps.Marker({
        position: this.currentPosition,
        map: this.map,
        icon: {
          content: `<div class="marker_my_location"></div>`,
          origin: new window.naver.maps.Point(0, 0)
        }
      })
      console.log(myLocation)
    },
    initMarkers () {
      const latlngs = this.list.map(t => new window.naver.maps.LatLng(t.position.lat, t.position.lng))
      const markerList = []

      for (let i = 0, ii = latlngs.length; i < ii; i++) {
        let icon = {
          url: '/img/icon/marker2.svg',
          scaledSize: new window.naver.maps.Size(18, 23),
          anchor: new window.naver.maps.Point(12, 37)
        }
        let marker = new window.naver.maps.Marker({
          position: latlngs[i],
          map: this.map,
          icon
        })

        marker.set('seq', i)
        markerList.push(marker)

        // marker.addListener('mouseover', (e) => { this.onMouseOver(e, icon) })
        // marker.addListener('mouseover', (e) => { this.onMouseOut(e, icon) })
      }
    },
    onMouseOver (e, icon) {
      const marker = e.overlay
      marker.setIcon(icon)
    },
    onMouseOut (e, icon) {
      const marker = e.overlay
      marker.setIcon(icon)
    },
    panToMyPositon () {
      this.map.panTo(this.currentPosition)
    },
    goBack () {
      window.history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.surround_map {
  position: relative;
  width: 100%;
  height: 100vh;

  ._map {
    width: 100%;
    height: 100%;
  }

  .btn_on_map {
    position: absolute;
    z-index: 10;
    box-shadow: 2px 4px 9px 0 rgba(3, 3, 3, 0.2);

    &._research {
      top: 32px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      color: $primary;
      padding: 6px 10px;
    }

    &._list {
      bottom: 44px;
      left: 16px;
      color: $primary;
    }

    &._current {
      width: 44px;
      height: 44px;
      bottom: 44px;
      right: 16px;
      font-size: 17px;
      color: $black;
      background-color: $white;
      padding: 12px;

      i {
        display: block;
      }
    }
  }
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

<style lang="scss">
.marker_my_location {
  width: 16px;
  height: 16px;
  background-color: $primary;
  border: 2px solid $white;
  border-radius: 50%;
  box-shadow: 2px 4px 9px 0 rgba(3, 3, 3, 0.16);
}
</style>

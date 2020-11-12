<script>
export default {
  head: {
    script: [
      { src: 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mqc6xtncwo&callback=initMap' }
    ]
  },
  beforeMount () {
    window.initMap = () => {
      this.setMap()
    }
    if (window.naver && window.naver.maps) {
      window.initMap()
    }
  },
  methods: {
    getCurrentPosition () {
      return new Promise((resolve, reject) => {
        if ('geolocation' in window.navigator) {
          window.navigator.geolocation.getCurrentPosition((position) => {
            resolve(position)
          })
        } else {
          reject(new Error('위치정보 사용불가'))
        }
      })
    }
  }
}
</script>

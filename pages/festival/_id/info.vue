<template>
  <div>
    <div>
      <img src="/sample/festival01.jpg" class="img-fluid">
      <img src="/sample/festival02.jpg" class="img-fluid">
    </div>
    <div class="container pt-20 pb-40">
      <h4 class="info_tit">기획사 정보</h4>
      <ul class="list_info mt-8">
        <li>주최 : DSP미디어</li>
        <li>주관 : 주식회사 어웨이크</li>
        <li>문의 : 02-337-7785</li>
      </ul>
      <div class="mt-32">
        <nuxt-link :to="{ name: 'festival-id', params: { id: 1 } }"
                   :style="{ backgroundColor: detail.color, borderColor: detail.color }"
                   class="btn btn-primary btn-block">{{ detail.title }} 상품 보러가기
        </nuxt-link>
        <nuxt-link :to="{ name: 'festival', query: { search: detail.title } }"
                   :style="{ color: detail.color }"
                   class="btn btn-darker btn-block">{{ detail.title }} 지난 페스티벌 보기
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  global: {
    nav: ['back', '워터밤 서울', 'share']
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info_tit {
  font-size: 16px;
  font-weight: $font-weight-normal;
  color: $white;
  letter-spacing: -.5px;
}

.list_info li {
  font-size: 14px;
  font-weight: $font-weight-normal;
  color: #999dad;
  letter-spacing: -.5px;

  & + li {
    margin-top: 8px;
  }
}
</style>

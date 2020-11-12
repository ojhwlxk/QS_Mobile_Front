<template>
  <div class="container pt-20 pb-40">
    <h3 class="info_tit">가게정보</h3>
    <dl class="dl_info mt-8">
      <dt>운영시간</dt>
      <dd>11:30 ~ 22:00</dd>
      <dt>휴무일</dt>
      <dd>월요일 휴무</dd>
      <dt>브레이크타임</dt>
      <dd>15:00 ~ 17:00</dd>
      <dt>전화번호</dt>
      <dd>02-1234-5678</dd>
    </dl>
    <hr>

    <h3 class="info_tit">사업자정보</h3>
    <dl class="dl_info mt-8">
      <dt>상호명</dt>
      <dd>헝그리베어</dd>
      <dt>사업자등록번호</dt>
      <dd>101-81-123456</dd>
    </dl>
    <hr>

    <h3 class="info_tit">원산지정보</h3>
    <div class="color-black mt-8">
      헝그리베어 피자 L<br>
      비프스트립(호주산 쇠고기), 바질페스토(스페인산), 새우(베트남산), 불고기(호주산 쇠고기), 스파이시치킨(국내산과 브라질산 닭고기 섞음), 돼지고기(프랑스산), 오징어(칠레산), 배추김치(중국산), 쌀(국내산)<br><br>
      헝그리베어 핫도그<br>
      비프스트립(호주산 쇠고기), 바질페스토(스페인산), 새우(베트남산), 불고기(호주산 쇠고기), 스파이시치킨(국내산과 브라질산 닭고기 섞음), 돼지고기(프랑스산), 오징어(칠레산), 배추김치(중국산), 쌀(국내산)<br><br>
      헝그리베어 치킨<br>
      비프스트립(호주산 쇠고기), 바질페스토(스페인산), 새우(베트남산), 불고기(호주산 쇠고기), 스파이시치킨(국내산과 브라질산 닭고기 섞음), 돼지고기(프랑스산), 오징어(칠레산), 배추김치(중국산), 쌀(국내산)
    </div>
  </div>
</template>

<script>
  export default {
    asyncData ({ store }) {
    }
  }
</script>

<style lang="scss" scoped>
  .info_tit {
    font-size: 16px;
  }
</style>

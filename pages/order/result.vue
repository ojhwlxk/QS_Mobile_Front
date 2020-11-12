<template>
  <div>
    <hr class="_space">
    <div class="container pt-20">
      <h2 class="sec_tit">주문정보</h2>
      <ul class="list_">
        <li v-for="n in 2">
          <div class="txt_base color-black">헝그리베어 피자 L</div>
          <div class="txt_sm mt-4">
            12:00 / 페퍼로니 / 콜라 / 1개<br>
            12:00 / 콤비네이션 / 콜라 / 1개
          </div>
        </li>
      </ul>
    </div>
    <hr class="_space">

    <div class="container py-20">
      <h2 class="sec_tit">결제정보</h2>
      <hr>
      <dl class="dl_info _between">
        <dt>주문금액</dt>
        <dd>40,000원</dd>
        <dt>할인쿠폰사용</dt>
        <dd>- 2,000 원</dd>
        <dt>포인트사용</dt>
        <dd>- 100원</dd>
        <dt>적립예정금액</dt>
        <dd>37원</dd>
        <dt>결제수단</dt>
        <dd>신용/체크카드</dd>
      </dl>
      <hr>
      <dl class="dl_info _between">
        <dt class="font-weight-bold">총 결제금액</dt>
        <dd class="font-weight-bold">37,900원</dd>
      </dl>
    </div>

    <div class="container pt-40 pb-20">
      <div class="row gx-4">
        <div class="col">
          <nuxt-link :to="{ name: 'fid-menu', params: { fid: 1 } }" class="btn btn-outline-primary btn-block" replace>다른 메뉴 보기</nuxt-link>
        </div>
        <div class="col">
          <nuxt-link :to="{ name: 'main-pickup' }" class="btn btn-primary btn-block" replace>픽업상품</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    global: {
      nav: ['', '주문/결제완료']
    },
    asyncData ({ store }) {
    }
  }
</script>

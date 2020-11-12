<template>
  <div>
    <hr class="_space">
    <section class="container pt-20">
      <h2>주문상품</h2>
      <ul class="list_order mt-16">
        <li v-for="n in 2">
          <div class="_item">
            <h2 class="_tit">헝그리베어 피자 라지 사이즈</h2>
            <div class="_info mt-4">12:00 / 콤비네이션 1개 / 쉬림프 1개 / 마운틴듀 L 3개<br>
              12:20 / 콤비네이션 1개 / 쉬림프 1개 / 콜라 L 3개</div>
            <div class="d-flex align-items-end mt-12">
              <div>
                <div class="_status">조리중</div>
                <div class="_date">
                  주문일시 : 2020-02-20  오후 12:53<br>
                  결제일시 : 2020-02-20  오후 12:53
                </div>
              </div>
              <div class="_price ml-auto">35,000원</div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <hr class="_space">

    <section class="container py-20">
      <h2>결제정보</h2>
      <hr>
      <dl class="dl_info _between">
        <dt>주문금액</dt>
        <dd>65,000원</dd>
        <dt>할인쿠폰사용</dt>
        <dd>- 2,000원</dd>
        <dt>포인트사용</dt>
        <dd>- 100 P</dd>
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

      <button type="button" class="btn btn-outline-default btn-block mt-20 color-dark">주문취소</button>
      <p class="txt_notice mt-4 text-center">주문 취소는 “<b>결제완료</b>” 상태일 경우에만 가능합니다.</p>
    </section>
  </div>
</template>

<script>
  export default {
    global: {
      nav: ['back', '주문/결제내역']
    },
    asyncData ({ store }) {
    }
  }
</script>

<style lang="scss" scoped>
  .list_order {
    li {
      padding: 16px 0;
      border-top: 1px solid $border-color;
    }

    ._item {
      ._tit {
        font-size: 14px;
      }

      ._info {
        font-size: 12px;
        color: $black;
        letter-spacing: -.5px;
      }

      ._status {
        font-size: 12px;
        color: $primary;
        letter-spacing: -.5px;
      }

      ._date {
        font-size: 10px;
        letter-spacing: -.5px;
        margin-top: 2px;
      }

      ._price {
        color: $black;
        font-weight: $font-weight-bold;
      }
    }
  }

  .txt_notice {
    font-size: 10px;
  }
</style>

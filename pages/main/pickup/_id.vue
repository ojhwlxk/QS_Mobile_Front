<template>
  <div class="pickup_detail">
    <div class="_bg" :style="{ backgroundImage: `url(/sample/food-23.jpg)` }"></div>
    <div class="container _inner">
      <div class="_date"><i class="icon-qs-time mr-8"></i>{{ detail.timestamp | date }}</div>
      <div class="_time mt-4">{{ detail.timestamp | date('A hh:mm') }}</div>
      <div class="_store my-16">{{ detail.storeName }}</div>
      <button class="btn btn-outline-light _location"><i class="icon-qs-location mr-4"></i> 매장 위치 보기</button>
      <div class="_qr mt-28 mx-auto" :style="`backgroundImage: url('/sample/qr.jpg')`"></div>
      <div class="_orderId mt-12">주문번호 : <span class="font-weight-bold">{{ detail.id }}</span></div>
    </div>

    <div class="pickup_backdrop" @click="() => { isPickupBot = false }" v-if="isPickupBot"></div>
    <div class="pickup_bot_area fixed-top" :class="{ 'active': isPickupBot }" @click="handleBot">
      <div class="container pickup_detail_bot">
        <dl class="dl_info _info">
          <dt>상품명</dt>
          <dd>크림새우우동</dd>
          <dt>종류/수량</dt>
          <dd>크림새우우동(매운맛) / 1개<br>
            크림새우우동(순한맛) / 2개
          </dd>
          <dt>추가상품</dt>
          <dd>콜라 L / 3개</dd>
          <dt>주문금액</dt>
          <dd>40,000원</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  global: {
    nav: ['back'],
    navFloat: true
  },
  asyncData ({ store }) {
    return {
      detail: {
        id: 486,
        timestamp: +new Date(),
        storeName: '개화기요정',
        storeAddress: '경기 가평군 가평읍 달전리 1-1'
      }
    }
  },
  data () {
    return {
      isPickupBot: false
    }
  },
  methods: {
    handleBot () {
      this.isPickupBot = !this.isPickupBot
    }
  }
}
</script>

<style lang="scss" scoped>
.pickup_detail {
  position: relative;

  ._bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -10;
    background-size: cover;
    background-position: center;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: calc(100vh - #{$navbar-height});
      background-color: rgba($black, .3);
    }
  }

  ._inner {
    text-align: center;
    color: $white;
    padding-top: 40px;
    padding-bottom: 40px;

    ._date {
      font-size: 16px;
    }

    ._time {
      font-size: 60px;
      font-weight: $font-weight-bold;
      line-height: 1;
    }

    ._store {
      font-size: 12px;
    }

    ._location {
      width: 128px;
      font-size: 12px;
      font-weight: $font-weight-normal;
      text-align: center;
      padding: 6px;
    }

    ._qr {
      width: 232px;
      height: 232px;
      background-position: center;
      background-size: 140px;
      background-repeat: no-repeat;
      background-color: $white;
      border-radius: 50%;
    }

    ._orderId {
      font-size: 20px;
    }
  }

  .pickup_bot_area {
    top: calc(100vh - 83px);
    z-index: $zindex-modal;
    @include transition(top .2s ease-out);

    &.active {
      top: 62vh;
    }
  }

  .pickup_backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $zindex-modal-backdrop;
    width: 100vw;
    height: 100vh;
  }
}

.pickup_detail_bot {
  position: relative;
  height: 700vh;
  padding: 40px 16px;
  border-top-left-radius: $border-radius-lg;
  border-top-right-radius: $border-radius-lg;
  background-color: $white;
  box-shadow: 0 3px 30px 0 rgba(3, 3, 3, 0.18);
  @include transition(all .3s ease-out);

  &:before {
    content: '';
    position: absolute;
    top: 16px;
    left: calc(50% - 20px);
    display: block;
    width: 40px;
    height: 3px;
    border-radius: 2px;
    background-color: #ecedee;
  }

  ._info {
    dt {
      font-size: 16px;
      color: $body-color;
      letter-spacing: -.5px;
    }

    dd {
      font-size: 16px;
      font-weight: $font-weight-bold;
      color: $black;
      letter-spacing: -.5px;
      margin-left: 90px;
    }
  }
}
</style>

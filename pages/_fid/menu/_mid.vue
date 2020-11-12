<template>
  <div>
    <header class="menu_header container py-20">
      <div class="_img" :style="`backgroundImage: url('/sample/food-6.jpg')`"></div>
      <h1 class="_tit mt-16">헝그리베어 피자 L</h1>
      <div class="_txt mt-4">입 안 가득 퍼지는<br>다섯 가지 프리미엄 치즈의 풍부한 맛!
      </div>
      <dl class="dl_info _between mt-32">
        <dt class="font-weight-bold">기본</dt>
        <dd class="font-weight-bold mb-0">15,000원</dd>
      </dl>
    </header>
    <hr class="_space">

    <!-- 픽업 시간 -->
    <section class="container">
      <div class="menu_body d-flex py-20" :class="{ 'active': isPickupSec }" @click="() => { isPickupSec = !isPickupSec }">
        <div class="mr-8">
          <span class="_num">1</span>
        </div>
        <div>
          <h3 class="_tit">픽업 시간을 입력해주세요.</h3>
          <p class="_txt">입력하신 시간에 픽업이 가능한 수량이 노출됩니다.</p>
        </div>
        <div class="ml-auto">
          <i class="arr_rotate icon-qs-down color-black"></i>
        </div>
      </div>
      <transition name="collapse">
        <div v-show="isPickupSec">
          <ul class="list_pickup">
            <li>
              <h4 class="_tit">날짜</h4>
              <div class="_txt">
                <client-only>
                  <datetime v-model="pickupTime"
                            type="datetime"
                            inputClass="datetime_input"
                            format="yyyy.MM.dd"
                            :phrases="{ ok: '확인', cancel: '취소' }"
                            :use12Hour="true"
                            :minuteStep="60"
                            :minDatetime="today"
                            :maxDatetime="maxDay"
                            :auto="true"
                            @close="handlePickupTimes"
                  />
                </client-only>
                <i class="icon-qs-down ml-8"></i>
              </div>
            </li>
            <li>
              <h4 class="_tit">시간</h4>
              <div class="_txt">
                <client-only>
                  <datetime v-model="pickupTime"
                            type="time"
                            inputClass="datetime_input"
                            format="a h시"
                            :phrases="{ ok: '확인', cancel: '취소' }"
                            :use12Hour="true"
                            :minuteStep="60"
                            :minDatetime="today"
                            @close="handlePickupTimes"
                  />
                </client-only>
                <i class="icon-qs-down ml-8"></i>
              </div>
            </li>
            <li class="py-0">
              <ul class="list_pickup_time">
                <li v-for="(item, index) in pickupTimes" :class="{ 'active': activePickupTimeIndex === index }"
                    @click="() => { handlePickupTime(index) }">
                  <div>{{item.time}}</div>
                  <div>잔여 수량 : {{item.qty}}개</div>
                </li>
              </ul>
            </li>
            <li>
              <h4 class="_tit">선택 시간</h4>
              <div class="_txt" :class="{ 'color-primary': activePickupTimeIndex !== '' }">{{selectedPickup}}</div>
            </li>
          </ul>
        </div>
      </transition>
    </section>
    <hr class="_space">

    <!-- 종류 -->
    <section class="container">
      <div class="menu_body d-flex py-20" :class="{ 'active': isKindSec }" @click="() => { isKindSec = !isKindSec }">
        <div class="mr-8">
          <span class="_num">2</span>
        </div>
        <div>
          <h3 class="_tit">종류를 선택해주세요.</h3>
          <p class="_txt">상품의 종류와 수량을 선택해주세요.</p>
        </div>
        <div class="ml-auto">
          <i class="arr_rotate icon-qs-down color-black"></i>
        </div>
      </div>
      <transition name="collapse">
        <div class="" v-show="isKindSec" style="max-height: 480px;">
          <ul class="list_pickup">
            <li v-for="(item, index) in menuKinds" :key="index">
              <!-- Item -->
              <div class="menu_item">
                <div class="mr-12">
                  <div class="_img" :style="`backgroundImage: url('${item.imgURL}')`"></div>
                </div>
                <div class="mr-auto">
                  <h4 class="_tit">{{item.title}}</h4>
                  <div class="_price">{{item.price | price}}원</div>
                </div>
                <div>
                  <QsCount v-model="item.qty" width="118px"/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </section>
    <hr class="_space">

    <section class="container">
      <div class="menu_body d-flex py-20" :class="{ 'active': isSubSec }" @click="() => { isSubSec = !isSubSec }">
        <div class="mr-8">
          <span class="_num">!</span>
        </div>
        <div>
          <h3 class="_tit">이런 상품은 어떠세요?</h3>
        </div>
        <div class="ml-auto">
          <i class="arr_rotate icon-qs-down color-black"></i>
        </div>
      </div>
      <transition name="collapse">
        <div class="" v-show="isSubSec" style="max-height: 480px;">
          <ul class="list_pickup">
            <li v-for="(item, index) in subMenus" :key="index">
              <!-- Item -->
              <div class="menu_item">
                <div class="mr-12">
                  <div class="_img" :style="`backgroundImage: url('${item.imgURL}')`"></div>
                </div>
                <div class="mr-auto">
                  <h4 class="_tit">{{item.title}}</h4>
                  <div class="_price">{{item.price | price}}원</div>
                </div>
                <div>
                  <QsCount v-model="item.qty" width="118px"/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </section>
    <hr class="_space">

    <section class="container py-20">
      <h2>주문정보</h2>
      <hr>
      <dl class="dl_info _between">
        <dt>픽업시간</dt>
        <dd>2020.02.12 / 12:00</dd>
        <dt>종류/수량</dt>
        <dd>콤비네이션 / 1개
          <br>
          쉬림프 / 1개
        </dd>
        <dt>추가상품</dt>
        <dd>콜라 L / 3개</dd>
      </dl>
      <hr>
      <dl class="dl_info _between">
        <dt class="font-weight-bold">결제예정금액</dt>
        <dd class="font-weight-bold">51,000원</dd>
      </dl>
      <div class="row gx-4 mt-20">
        <div class="col">
          <nuxt-link :to="{ name: 'order', query: { id: $route.params.mid } }" class="btn btn-outline-primary btn-block">선물하기</nuxt-link>
        </div>
        <div class="col">
          <button type="button" @click="() => { isModal = true }" class="btn btn-primary btn-block">장바구니</button>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <QsModal v-model="isModal">
      <h3 class="_tit">장바구니에는 같은 가게의 메뉴만<br>
        담을 수 있습니다.</h3>
      <p class="_txt mt-8">선택하신 메뉴를 장바구니에 담을 경우<br>
        이전에 담은 메뉴가 삭제됩니다.</p>
      <div class="row gx-4 mt-20">
        <div class="col">
          <button type="button" class="btn btn-outline-primary btn-block">취소</button>
        </div>
        <div class="col">
          <button type="button" @click="() => { isModal = false }" class="btn btn-primary btn-block">확인</button>
        </div>
      </div>
    </QsModal>
  </div>
</template>

<script>
  import moment from 'moment'
  import QsCount from '~/components/ui/QsCount'
  import QsModal from '~/components/ui/QsModal/bot'

  export default {
    components: {
      QsCount,
      QsModal
    },
    global: {
      nav: ['back', '', ['info']]
    },
    asyncData ({ store }) {
    },
    computed: {
      selectedPickup () {
        if (this.activePickupTimeIndex === '') return '선택해주세요'
        const { time, qty } = this.pickupTimes[this.activePickupTimeIndex]
        return moment(this.pickupTime).format('YYYY.MM.DD') + ` ${time}Ⅰ잔여수량 : ${qty}개`
      }
    },
    data () {
      const today = moment().add(1, 'h').format()
      const maxDay = moment().set({ 'hour': 23, 'second': 59 }).add(2, 'd').format()
      return {
        today,
        maxDay,
        isOptionSec: true,

        isPickupSec: true,
        pickupTime: today,
        activePickupTimeIndex: '',
        pickupTimes: [],

        isKindSec: true,
        menuKinds: [
          { title: '페퍼로니', price: 5000, qty: 0, imgURL: '/sample/food-18.jpg' },
          { title: '콤비네이션', price: 5000, qty: 0, imgURL: '/sample/food-16.jpg' },
          { title: '쉬림프', price: 8000, qty: 0, imgURL: '/sample/food-19.jpg' }
        ],

        isSubSec: true,
        subMenus: [
          { title: '콜라', price: 2000, qty: 0, imgURL: '/sample/food-4.jpg' },
          { title: '사이드', price: 2000, qty: 0, imgURL: '/sample/food-3.jpg' },
          { title: '웰치스', price: 2000, qty: 0, imgURL: '/sample/food-2.jpg' }
        ],
        isModal: false
      }
    },
    mounted () {
      this.$bus.$on('info', () => {
        this.$router.push({ name: 'fid-sid-info', params: { fid: 1, sid: 1 } })
      })
      this.handlePickupTimes()
    },
    methods: {
      handlePickupTimes () {
        const hour = moment(this.pickupTime).format('h')
        this.pickupTimes = [
          { time: `오후 ${hour}시 00분`, qty: 10 },
          { time: `오후 ${hour}시 10분`, qty: 7 },
          { time: `오후 ${hour}시 20분`, qty: 6 },
          { time: `오후 ${hour}시 30분`, qty: 8 },
          { time: `오후 ${hour}시 40분`, qty: 2 },
          { time: `오후 ${hour}시 50분`, qty: 8 }
        ]
        this.activePickupTimeIndex = '' // init
      },
      handlePickupTime (index) {
        this.activePickupTimeIndex = index
      }
    },
    beforeDestroy () {
      this.$bus.$off('info')
    }
  }
</script>

<style lang="scss" scoped>
  .menu_header {
    text-align: center;

    ._img {
      width: 128px;
      height: 128px;
      border-radius: $border-radius;
      background-size: cover;
      background-position: center;
      margin: 0 auto;
    }

    ._tit {
      font-size: 16px;
    }

    ._txt {
      font-size: 12px;
    }
  }

  .menu_body {
    ._num {
      display: block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 50%;
      font-size: 12px;
      color: $white;
      text-align: center;
      background-color: $primary2;
    }

    ._tit {
      font-size: 16px;
    }

    ._txt {
      font-size: 12px;
      letter-spacing: -.5px;
    }
  }

  .list_pickup {
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;
      border-top: 1px solid $border-color;
    }

    ._tit {
      font-size: 14px;
      font-weight: $font-weight-normal;
    }

    ._txt {
      font-size: 14px;
      font-weight: $font-weight-bold;
      color: $black;
      letter-spacing: -.5px;
    }
  }

  .list_pickup_time {
    width: 100%;
    /*width: calc(100% + 32px);*/
    padding: 8px 16px;
    /*margin-left: -16px;
    margin-right: -16px;*/
    background-color: #f8f9fa;

    li {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 14px;
      /*font-weight: $font-weight-bold;*/
      letter-spacing: -.5px;

      &.active {
        color: $primary;
        font-weight: $font-weight-bold;
      }
    }
  }

  .menu_item {
    display: flex;
    align-items: center;
    width: 100%;

    ._img {
      width: 62px;
      height: 62px;
      border-radius: $border-radius;
      background-size: cover;
      background-position: center;
    }

    ._tit {
      font-size: 14px;
      font-weight: $font-weight-bold;
    }

    ._price {
      font-size: 14px;
      /*letter-spacing: -.5px;*/
      color: $black;
    }
  }
</style>

<style lang="scss">
  .vdatetime {
    display: inline-block;

    .datetime_input {
      font-size: 14px;
      font-weight: $font-weight-bold;
      color: $black;
      text-align: right;
      border: none;
    }

    /* style */
    .vdatetime-popup {
      font-family: $font-family-sans-serif;
    }

    .vdatetime-overlay,
    .vdatetime-popup {
      z-index: 1040;
    }

    .vdatetime-popup__header,
    .vdatetime-calendar__month__day--selected > span > span,
    .vdatetime-calendar__month__day--selected:hover > span > span {
      background-color: $primary;
    }

    .vdatetime-month-picker__item--selected,
    .vdatetime-time-picker__item--selected,
    .vdatetime-popup__actions__button {
      color: $primary;
    }
  }
</style>

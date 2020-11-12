<template>
  <div>
    <hr class="_space">
    <div class="container py-20">
      <h2 class="sec_tit">주문정보</h2>
      <div class="mt-8">
        <div class="txt_base color-black">헝그리베어 피자 L</div>
        <div class="txt_sm mt-4">
          12:00 / 페퍼로니 / 콜라 / 1개<br>
          12:00 / 콤비네이션 / 콜라 / 1개
        </div>
      </div>
    </div>
    <hr class="_space">

    <div class="container py-20">
      <h2 class="sec_tit">요청사항</h2>
      <QsFormGroup name="request"
                   placeholder="예) 덜 맵게 해주세요"
                   v-model="inputData.request"
                   v-validate="'required'"
                   class="mt-16"
      />
      <QsCheckbox v-model="request2">
        <div class="checkbox_label">일회용 수저, 젓가락은 안주셔도 돼요.</div>
        <span class="txt_xs">일회용품 줄이기 함께 시작해요.</span>
      </QsCheckbox>
    </div>
    <hr class="_space">

    <div class="container py-20">
      <h2 class="sec_tit">주문자 정보</h2>
      <p class="txt_sm mt-4">주문자 정보 변경은 <span class="color-black">마이페이지 > 내정보수정</span> 메뉴에서 가능합니다.</p>
      <hr>
      <dl class="dl_info _between">
        <dt>보내는 분</dt>
        <dd>홍길동</dd>
        <dt>휴대폰 번호</dt>
        <dd>010-1234-1234</dd>
        <dt>아이디</dt>
        <dd>hong</dd>
      </dl>
    </div>
    <hr class="_space">

    <div class="container py-20">
      <h2 class="sec_tit">선물하기</h2>
      <hr>
      <QsFormGroup name="receiveName"
                   label="받는 분"
                   v-model="inputData.receiveName"
                   v-validate="'required'"
                   labelClass="txt_base font-weight-normal mb-8"
      />
      <QsFormGroup name="receiveMobile"
                   label="휴대폰"
                   type="tel"
                   v-model="inputData.receiveMobile"
                   v-validate="'required|mobile'"
                   labelClass="txt_base font-weight-normal mb-8"
                   class="mb-0"
      />
    </div>
    <hr class="_space">

    <div class="container pt-20">
      <h2 class="sec_tit">할인</h2>
      <hr class="mb-0">
      <ul class="dc_area list_between">
        <li>
          <span class="_tit">할인쿠폰</span>
          <span class="_link" @click="() => { isModalCoupon = true }">2개 보유 <i class="icon-qs-right"></i></span>
        </li>
        <li>
          <span class="_tit">보유포인트</span>
          <span class="_link" @click="() => { isModalPoint = true }">100원 사용 가능 <i class="icon-qs-right"></i></span>
        </li>
      </ul>
    </div>
    <hr class="_space">

    <div class="container py-20">
      <h2 class="sec_tit mb-16">결제수단</h2>
      <button type="button" @click="() => { isModalPaymentMethod = true }" class="btn btn-outline-default btn-block color-black">
        {{txt_payment_method}}
      </button>
    </div>
    <hr class="_space">

    <div class="container py-20">
      <h2 class="sec_tit">결제 정보</h2>
      <hr>
      <dl class="dl_info _between">
        <dt>주문금액</dt>
        <dd>40,000원</dd>
        <dt>할인쿠폰사용</dt>
        <dd>0원</dd>
        <dt>포인트사용</dt>
        <dd>0원</dd>
        <dt>적립예정금액</dt>
        <dd>37원</dd>
      </dl>
      <hr>
      <dl class="dl_info _between">
        <dt class="font-weight-bold">총 결제금액</dt>
        <dd class="font-weight-bold">40,000원</dd>
      </dl>
    </div>

    <div class="policy_area">
      <div class="container">
        <div class="d-flex py-16" :class="{ 'active': isPolicyActive }" @click="() => { isPolicyActive = !isPolicyActive }">
          <h3 class="_tit">유의사항</h3>
          <i class="arr_rotate icon-qs-down ml-auto"></i>
        </div>
        <transition name="collapse">
          <div v-show="isPolicyActive" style="max-height: 230px;">
            <div class="policy_box">
              <b>제 1조 (목적)</b><br><br>

              이 약관은 주식회사 에이아트(이하 “회사”라 합니다)이 제공하는 에이아트 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을
              이 약관은 주식회사 에이아트(이하 “회사”라 합니다)이 제공하는 에이아트 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을
              이 약관은 주식회사 에이아트(이하 “회사”라 합니다)이 제공하는 에이아트 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을
            </div>
            <hr class="mb-0">
            <p class="_txt text-center py-16">본인이 만 14세 이상이고,<br>
              위 내용을 확인하였으며 결제에 동의합니다.</p>
          </div>
        </transition>
      </div>
    </div>

    <div class="container pt-20 pb-40">
      <div class="d-flex justify-content-center">
        <QsCheckbox v-model="inputData.policy">
          <button @click.self.stop="() => { isModalPolicy = true }" class="btn_ txt_underline color-body">개인정보 제3자 제공</button>에 동의합니다.
        </QsCheckbox>
      </div>
      <button type="button" @click="submit" class="btn btn-outline-default btn-block mt-20">40,000원 결제하기</button>
    </div>

    <!-- Modal Coupon -->
    <QsModal v-model="isModalCoupon" title="할인쿠폰" bodyClass="bg-light">
      <hr class="_space">
      <div class="container bg-white py-20">
        <h2 class="sec_tit">쿠폰번호 입력</h2>
        <QsFormGroup name="coupon"
                     placeholder="쿠폰코드를 입력해주세요"
                     v-model="inputCoupon"
                     v-validate="'required'"
                     class="mt-16 mb-0"
        >
          <button type="button" class="btn_ color-primary px-8">등록</button>
        </QsFormGroup>
      </div>
      <hr class="_space">

      <div class="container bg-white pt-20">
        <h2 class="sec_tit">적용가능쿠폰</h2>
        <hr class="mb-0">
        <ul class="list_">
          <li v-for="(item, index) in coupons" :key="index">
            <!-- Item -->
            <label class="coupon_item" :for="`coupon_${index}`">
              <div>
                <div class="_price">{{item.price | price}}원</div>
                <div class="_tit mt-8">{{item.title}}</div>
                <div class="txt_xs">{{item.date}}</div>
              </div>
              <div>
                <QsCheckbox v-model="item.isActive" :id="`coupon_${index}`"/>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <hr class="_space">

      <div class="fixed-bottom container pb-20">
        <button type="button" @click="isModalCoupon = false" class="btn btn-primary btn-block">적용하기</button>
      </div>
    </QsModal>

    <!-- Modal Point -->
    <QsModal v-model="isModalPoint" title="포인트">
      <hr class="_space">
      <div class="container py-20">
        <div class="d-flex">
          <div>
            <h2 class="sec_tit">보유포인트</h2>
            <p class="sec_txt">1원 이상, 1원 단위로 사용 가능합니다.</p>
          </div>
          <div class="ml-auto">
            <span class="txt_point">100 P</span>
          </div>
        </div>
        <QsFormGroup name="coupon"
                     placeholder="사용할 포인트를 입력해주세요"
                     type="tel"
                     v-model="inputPoint"
                     v-validate="'required'"
                     class="mt-16 mb-12"
        />
        <QsCheckbox v-model="isUseAllPoints" label="모두 사용"/>
      </div>

      <div class="fixed-bottom container pb-20">
        <button type="button" @click="isModalCoupon = false" class="btn btn-primary btn-block">사용하기</button>
      </div>
    </QsModal>

    <!-- Modal payment method -->
    <QsModal v-model="isModalPaymentMethod" title="결제수단" bodyClass="bg-light">
      <hr class="_space">
      <div class="container bg-white">
        <ul class="list_">
          <li v-for="(item, index) in paymentMethods" :key="index">
            <QsRadiobox v-model="inputPaymentMethod" name="paymentMethod" :inputValue="item.value" :label="item.title"/>
          </li>
        </ul>
      </div>
      <hr class="_space">

      <div class="fixed-bottom container pb-20">
        <button type="button" @click="isModalPaymentMethod = false" class="btn btn-primary btn-block">사용하기</button>
      </div>
    </QsModal>

    <!-- Modal Policy -->
    <QsModal v-model="isModalPolicy" title="개인정보 제3자 제공">
      <hr class="_space">
      <div class="modal_policy container py-20">
        <h2 class="sec_tit">개인정보 제3자 제공</h2>
        <hr>
        <div class="modal_policy">
          이 약관은 주식회사 퀸스스마일 (이하 “회사”라 합니다)이 제공하는 퀸스스마일 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을
          규정함을 목적으로 합니다. 본 약관은 PC통신, 스마트폰(안드로이드폰, 아이폰 등) 앱 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 준용됩니다.<br><br>

          <b>1. 개인정보의 수집･이용</b><br><br>

          (1) 회원 정보의 수집･이용목적, 수집항목, 보유･이용기간은 아래와 같습니다.
        </div>
      </div>
    </QsModal>
  </div>
</template>

<script>
  import QsFormGroup from '~/components/ui/QsFormGroup'
  import QsCheckbox from '~/components/ui/QsCheckbox'
  import QsModal from '~/components/ui/QsModal/full'
  import QsRadiobox from '~/components/ui/QsRadiobox'

  export default {
    components: {
      QsFormGroup,
      QsCheckbox,
      QsModal,
      QsRadiobox
    },
    global: {
      nav: ['back', '주문하기']
    },
    asyncData ({ store }) {
    },
    computed: {
      txt_payment_method () {
        return this.inputPaymentMethod ? this.paymentMethods.filter(t => {
          return t.value === this.inputPaymentMethod
        })[0].title : '선택해주세요'
      }
    },
    data () {
      return {
        inputData: {
          request: '',
          receiveName: '',
          receiveMobile: '',
          policy: false
        },
        request2: '',

        inputCoupon: '',
        coupons: [
          { title: '헝그리베어 감사 쿠폰', price: 5000, date: '2020.02.20 ~ 2020.03.31', isActive: false },
          { title: '퀸스스마일 새해 감사 쿠폰', price: 1000, date: '2020.02.20 ~ 2020.03.31', isActive: false }
        ],
        isModalCoupon: false,

        inputPoint: '',
        isModalPoint: false,
        isUseAllPoints: false,

        isModalPaymentMethod: false,
        inputPaymentMethod: '',
        paymentMethods: [
          { title: '신용/체크카드', value: 'CARD' },
          { title: '휴대폰결제', value: 'MOBILE' },
          { title: '네이버페이', value: 'NAVER_PAY' },
          { title: '카카오페이', value: 'KAKAO_PAY' },
          { title: '토스', value: 'TOSS_PAY' },
          { title: '만나서 카드결제', value: 'MEET_CARD' },
          { title: '만나서 현금결제', value: 'MEET_CASH' }
        ],

        isPolicyActive: true,
        isModalPolicy: false
      }
    },
    methods: {
      submit () {
        this.$router.replace({ name: 'order-result', params: { id: 1 } })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .checkbox_label {
    font-size: 14px;
    color: $black;
  }

  .dc_area {
    ._tit {
      font-size: 14px;
      color: $black;
      letter-spacing: -.5px;
    }

    ._link {
      font-size: 14px;
      font-weight: $font-weight-bold;
      color: $primary;
      letter-spacing: -.5px;
    }
  }

  .coupon_item {
    display: flex;
    justify-content: space-between;

    ._price {
      font-size: 14px;
      font-weight: $font-weight-bold;
      color: $black;
    }

    ._tit {
      font-size: 12px;
      letter-spacing: -.5px;
      color: $black;
      margin-bottom: 2px;
    }
  }

  .txt_point {
    font-size: 16px;
    font-weight: 700;
    color: $primary;
  }

  .policy_area {
    background-color: $gray-100;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;

    ._tit {
      font-size: 14px;
      color: $body-color;
    }

    .policy_box {
      font-size: 10px;
      color: $body-color;
      max-height: 75px;
      overflow-y: auto;
    }

    ._txt {
      font-size: 14px;
      letter-spacing: -.5px;
      color: $body-color;
    }
  }

  .modal_policy {
    font-size: 12px;
    color: $black;
  }
</style>

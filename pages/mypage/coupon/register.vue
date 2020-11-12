<template>
  <div>
    <QsTab :list="tabs"/>
    <hr class="_space">
    <div class="container py-20">
      <h2 class="sec_tit">쿠폰코드</h2>
      <p class="sec_txt">쿠폰에 표시된 코드를 입력해주세요.</p>
      <form @submit.prevent="validateForm(register)">
        <div class="row gx-4 mt-16">
          <QsFormGroup name="coupon"
                       placeholder="쿠폰코드 8자리"
                       v-model="inputCoupon"
                       v-validate="'required'"
                       class="col mb-0"
          />
          <div class="col-3">
            <button type="submit" class="btn btn-primary">확인</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import QsTab from '~/components/ui/QsTab/index'
  import QsFormGroup from '~/components/ui/QsFormGroup'

  export default {
    components: {
      QsTab,
      QsFormGroup
    },
    global: {
      nav: ['back', '쿠폰등록']
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        tabs: [
          { name: '쿠폰코드 입력', to: { name: 'mypage-coupon-register' }, isReplace: true },
          { name: 'QR코드 스캔', func: this.callCamera }
        ],
        inputCoupon: ''
      }
    },
    methods: {
      register () {},
      callCamera () {
        console.log('callCamera')
      }
    }
  }
</script>

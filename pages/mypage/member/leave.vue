<template>
  <div>
    <hr class="_space">
    <form @submit.prevent="validateForm(leave)">
      <div class="container py-20">
        <h2 class="leave_tit">유의사항</h2>
        <div class="policy_box mt-16 mb-12">
          <div class="_inner">
            ･ 신용정보조회 관련 유의사항
            항상 저희 신한금융투자를 거래하여 주시는데 대하여 감사드립니다.
            고객님께서 저희 회사를 이용하고자 계좌를 개설하시는 경우 당사는 관련법령에 따라 고객님의 개인신용정보를 신용정보집중기관에 집중과 함께 건전한 금융거래를 위하여 신용조회를 실시하고 있습니다.
            ･ 금융거래시 유의사항
            거래를 위한 통장·카드·인감 등은 항상 고객님께서 직접 보관하여 주시기 바랍니다.
            ･ 당사는 파출수납을 실시하지 않고 있습니다. 영업점 방문이 어려우신 고객님께서는 은행이체거래를 이용하시면 안전하고 편리하게 고객님 계좌로 입·출금이 가능합니다.
            ･ 손실보전계약(각서, 차용증)에 의한 거래는 증권거래법에 의거 금지하고 있는 행위이므로 금하여 주시기 바랍니다.
            ･ 금융거래시 사용하는 계좌번호와 비밀번호가 노출되지 않도록 주의하여 주시기 바랍니다.
            ･ 주소지 등 연락처가 변경되는 경우 즉시 회사 고객지원센터(1588-0365)나 거래영업점에 변경된 사항을 통지해주시기 바랍니다.
            ･ 평소 본인의 잔고 등 거래내역에 대해 주기적으로 조회하여 확인하는 습관을 권합니다.
          </div>
        </div>
        <QsCheckbox name="policy"
                    label="보유하신 쿠폰이 있으신 경우, 탈퇴 시 함께 소멸됩니다."
                    v-model="inputData.agree"
                    v-validate="'policy'"
        />
      </div>
      <div class="container fixed-bottom pb-20">
        <button type="submit" class="btn btn-primary">탈퇴하기</button>
      </div>
    </form>
    <QsNotify v-model="isCompleted" @close="redirect" text="계정이 삭제되었습니다."/>
  </div>
</template>

<script>
  import QsCheckbox from '~/components/ui/QsCheckbox'
  import QsNotify from '~/components/ui/QsNotify'

  export default {
    components: {
      QsCheckbox,
      QsNotify
    },
    global: {
      nav: ['back', '회원탈퇴']
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        inputData: {
          agree: false
        },
        isCompleted: false
      }
    },
    methods: {
      leave () {
        this.$store.dispatch('deleteAccessToken').then(res => {
          this.isCompleted = true
        })
      },
      redirect () {
        window.location.replace('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .leave_tit {
    font-size: 16px;
  }

  .policy_box {
    padding: 16px 0;
    background-color: $gray-100;

    ._inner {
      height: calc(100vh - 300px);
      padding: 0 16px;
      overflow-y: auto;
      font-size: 12px;
      letter-spacing: -.5px;
      @include media-breakpoint-up(xl) {
        height: 500px;
      }
    }
  }
</style>

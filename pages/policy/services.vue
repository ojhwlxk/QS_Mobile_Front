<template>
  <div>
    <QsTab :list="tabs"/>
    <hr class="_space">
    <div class="container py-20">
      <h2 class="sec_tit">이용약관</h2>
      <div class="policy_dropdown my-16" :class="{ 'active': isDropdownActive }">
        <div class="d-flex justify-content-between py-16" @click="() => { isDropdownActive = !isDropdownActive }">
          <h3 class="_tit">[현행] 2020년 3월 17일 시행안</h3>
          <i class="arr_rotate icon-qs-down"></i>
        </div>
        <transition name="collapse">
          <ul class="list_ver list_" v-show="isDropdownActive">
            <li v-for="n in 3" @click="handleVersion"><span class="_tit">2020년 {{n}}월 17일 시행안</span></li>
          </ul>
        </transition>
      </div>
      <div class="policy_box">
        <b>제 1 조 (목적)</b><br><br>
        이 약관은 주식회사 퀸스스마일 (이하 “회사”라 합니다)이 제공하는 퀸스스마일 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을 규정함을
        목적으로 합니다. 본 약관은 PC통신, 스마트폰(안드로이드폰, 아이폰 등) 앱 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 준용됩니다.<br><br>
        <b>제 2 조 (용어의 정의)</b><br><br>
        1. 이 약관은 주식회사 퀸스스마일 (이하 “회사”라 합니다)이 제공하는 퀸스스마일 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을
        규정함을 목적으로 합니다.<br>
        2. 본 약관은 PC통신, 스마트폰(안드로이드폰, 아이폰 등) 앱 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 준용됩니다.<br>
        3. 이 약관은 주식회사 퀸스스마일 (이하 “회사”라 합니다)이 제공하는 퀸스스마일 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을
        규정함을 목적으로 합니다.<br>
        4. 이 약관은 주식회사 퀸스스마일 (이하 “회사”라 합니다)이 제공하는 퀸스스마일 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을
        규정함을 목적으로 합니다.<br>
        5. 이 약관은 주식회사 퀸스스마일 (이하 “회사”라 합니다)이 제공하는 퀸스스마일 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 기타 필요한 사항을
        규정함을 목적으로 합니다.
      </div>
    </div>
  </div>
</template>

<script>
  import QsTab from '~/components/ui/QsTab/index'

  export default {
    components: {
      QsTab
    },
    global: {
      nav: ['close', '이용약관'],
      footer: false
    },
    async asyncData ({ redirect, query }) {
      if (!query.type) redirect({ name: 'policy-services', query: { type: 'queenssmile' } })
    },
    data () {
      return {
        tabs: [
          { name: '이용약관', to: { name: 'policy-services', query: { type: 'queenssmile' } }, isReplace: true, isExact: true },
          { name: '위치기반 서비스 이용약관', to: { name: 'policy-services', query: { type: 'location' } }, isReplace: true, isExact: true }
        ],
        isDropdownActive: false
      }
    },
    methods: {
      handleVersion () {
        this.isDropdownActive = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .policy_box {
    font-size: 12px;
    color: $black;
  }

  .policy_dropdown {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;

    ._tit {
      font-size: 12px;
      font-weight: $font-weight-normal;
      color: $black;
    }
  }

  .list_ver {
    padding: 0 16px;
    margin-left: -16px;
    margin-right: -16px;
    background-color: $gray-100;
  }
</style>

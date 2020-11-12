<template>
  <div>
    <hr class="_space" v-if="stepIndex === 0">
    <div class="container py-20">
      <!-- STEP: 1 -->
      <template v-if="stepIndex === 0">
        <h2 class="sec_tit mb-16">아이디를 찾기 위해선<br>
          휴대폰번호 인증이 필요합니다.</h2>
        <form @submit.prevent="validateScope('form-1', certMobile)" data-vv-scope="form-1">
          <div class="row gx-4">
            <QsFormGroup name="mobile"
                         type="tel"
                         placeholder="전화번호 입력 ('-' 제외)"
                         v-model="inputData.mobile"
                         v-validate="'required|mobile'"
                         :isReadonly="isCodeSend"
                         class="col mb-0"
                         scope="form-1"
            />
            <div class="col-4">
              <button type="submit" class="btn btn-outline-default color-body">
                {{ isCodeSend ? '재전송' : '인증번호' }}
              </button>
            </div>
          </div>
        </form>
        <form @submit.prevent="validateScope('form-2', certMobileConfirm)" data-vv-scope="form-2" class="mt-16" v-if="isCodeSend">
          <div class="row gx-4">
            <QsFormGroup name="code"
                         placeholder="인증번호(6자리 숫자)"
                         v-model="inputData.code"
                         v-validate="'required|code'"
                         :isTimer="true"
                         class="col"
                         scope="form-2"
            />
            <div class="col-4">
              <button type="submit" class="btn btn-primary">완료</button>
            </div>
          </div>
        </form>
      </template>

      <!-- STEP: 2 -->
      <template v-else-if="stepIndex === 1">
        <!-- Result: Success -->
        <template v-if="result && result.length">
          <div class="text-center mt-12">
            <h2 class="sec_tit">인증이 완료되었습니다.</h2>
            <p class="sec_txt color-black mt-16">고객님의 퀸스스마일 아이디 목록입니다.</p>

            <ul class="list_result text-center mt-16">
              <li v-for="(item, index) in result" :key="index">
                {{item.email | security}} (가입일: {{item.signUpDate | date}})
              </li>
            </ul>
          </div>

          <div class="container fixed-bottom pb-20">
            <nuxt-link :to="{ name: 'account-login' }" class="btn btn-primary btn-block">로그인</nuxt-link>
            <div class="text-center mt-20">
              <nuxt-link :to="{ name: 'account-find-pw' }" class="btn btn_link">비밀번호 찾기</nuxt-link>
            </div>
          </div>
        </template>

        <!-- Result: Fail -->
        <template v-else>
          <div class="text-center mt-12">
            <h2 class="sec_tit">입력한 정보와 일치하는 계정이 없습니다.</h2>
            <p class="sec_txt color-black mt-16">회원 정보를 확인 후 다시 입력하시기 바랍니다.</p>

            <ul class="list_result text-center mt-16">
              <li v-for="(item, index) in result" :key="index">
                {{item.email | security}} (가입일: {{item.signUpDate | date}})
              </li>
            </ul>
          </div>

          <div class="container fixed-bottom pb-20">
            <nuxt-link :to="{ name: 'account-sign-up' }" class="btn btn-primary btn-block">회원가입</nuxt-link>
            <div class="text-center mt-20">
              <nuxt-link :to="{ name: 'account-login' }" class="btn btn_link">로그인</nuxt-link>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
  import QsFormGroup from '~/components/ui/QsFormGroup'

  export default {
    components: {
      QsFormGroup
    },
    global: {
      nav: ['back', '아이디 찾기']
    },
    data () {
      return {
        stepIndex: 0,
        inputData: {
          name: '',
          mobile: '',
          code: '',
          mode: 'FIND_ACCOUNT_MOBILE'
        },

        result: [
          { email: 'hong', signUpDate: new Date() }
        ],
        errMsg: '',
        isCodeSend: false
      }
    },
    methods: {
      certMobile () {
        this.isCodeSend = true
        // this.$aart.api.find.findAccountMobile(this.inputData).then(res => {
        //   this.isCodeSend = true
        // }).catch(err => {
        //   this.errMsg = err.message
        // })
      },
      certMobileConfirm () {
        this.stepIndex = 1
        // this.$aart.api.find.findAccountMobileConfirm(this.inputData).then(res => {
        //   this.result = res.data
        //   this.stepIndex = 1
        // }).catch(err => {
        //   this.errMsg = err.message
        // })
      }
    },
    watch: {
      inputData: {
        deep: true,
        handler () {
          this.errMsg = ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn_link {
    font-size: 12px;
    font-weight: $font-weight-normal;
    letter-spacing: -.5px;
    text-decoration: underline;
    padding: 0;
    border: none;
  }

  .list_result li {
    font-size: 12px;
  }
</style>

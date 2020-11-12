<template>
  <div>
    <hr class="_space">
    <!-- STEP 1 -->
    <form @submit.prevent="validateScope('form-1', goStep2)" data-vv-scope="form-1" v-if="stepIndex === 0">
      <div class="container py-20">
        <h2 class="sec_tit mb-16">회원가입</h2>
        <QsFormGroup name="email"
                     type="email"
                     placeholder="아이디"
                     v-model="inputData.email"
                     v-validate="'required|email'"
                     scope="form-1"
                     class="mb-16"
        />
        <QsFormGroup name="password"
                     type="password"
                     placeholder="비밀번호 (영문+숫자+특수문자 조합 8자리 이상)"
                     v-model="inputData.password"
                     v-validate="'required|password'"
                     ref="password"
                     scope="form-1"
                     class="mb-16"
        />
        <QsFormGroup name="pwConfirm"
                     type="password"
                     placeholder="비밀번호 확인"
                     v-model="inputPwConfirm"
                     v-validate="'required|confirmed:password'"
                     scope="form-1"
        />
      </div>
      <hr class="_space">

      <div class="container py-20">
        <h2 class="sec_tit mb-20">약관동의</h2>
        <QsCheckbox v-model="isSelectAll" label="전체 동의" labelClass="txt_base"/>
        <hr>
        <ul class="list_policy">
          <li>
            <QsCheckbox name="policy"
                        label="이용약관 동의 (필수)"
                        v-model="inputData.termsAgree.taService"
                        v-validate="'policy'"
                        scope="form-1"
            />
          </li>
          <li>
            <QsCheckbox name="policy2"
                        label="개인정보 수집 및 이용 동의 (필수)"
                        v-model="inputData.termsAgree.taPrivacy"
                        v-validate="'policy'"
                        scope="form-1"
            />
          </li>
          <li>
            <QsCheckbox name="policy3"
                        label="전자금융거래 이용약관 (필수)"
                        v-model="inputData.termsAgree.taMarketing"
                        v-validate="'policy'"
                        scope="form-1"
            />
          </li>
          <li>
            <QsCheckbox name="policy4"
                        label="만 14세 이상 이용자 (필수)"
                        v-model="inputData.termsAgree.taMarketing"
                        v-validate="'policy'"
                        scope="form-1"
            />
          </li>
          <li>
            <QsCheckbox name="policy5"
                        label="퀸스스마일 혜택 알림 동의 (선택)"
                        v-model="inputData.termsAgree.taMarketing"
            />
          </li>
        </ul>

        <button type="submit" class="btn btn-outline-default mt-40">다음</button>
      </div>
    </form>

    <template v-if="stepIndex === 1">
      <div class="container py-20">
        <h2 class="sec_tit mb-16">회원가입을 위한<br>
          전화번호 등록이 필요합니다</h2>
        <form @submit.prevent="validateScope('form-2', certMobile)" data-vv-scope="form-2">
          <div class="row gx-4">
            <QsFormGroup name="mobile"
                         type="tel"
                         placeholder="전화번호 입력 ('-' 제외)"
                         v-model="inputData.mobile"
                         v-validate="'required|mobile'"
                         :isReadonly="isCodeSend"
                         class="col mb-0"
                         scope="form-2"
            />
            <div class="col-4">
              <button type="submit" class="btn btn-outline-default">
                {{ isCodeSend ? '재전송' : '인증번호' }}
              </button>
            </div>
          </div>
        </form>
        <form @submit.prevent="validateScope('form-3', certMobileConfirm)" data-vv-scope="form-3" class="mt-16" v-if="isCodeSend">
          <div class="row gx-4">
            <QsFormGroup name="code"
                         placeholder="인증번호(6자리 숫자)"
                         v-model="inputData.code"
                         v-validate="'required|code'"
                         :isTimer="true"
                         class="col"
                         scope="form-3"
            />
            <div class="col-4">
              <button type="submit" class="btn btn-primary">완료</button>
            </div>
          </div>
        </form>
      </div>
    </template>

    <QsNotify v-model="isCompleted" @close="redirect" text="회원가입이 완료되었습니다."/>
  </div>
</template>

<script>
  import QsFormGroup from '~/components/ui/QsFormGroup'
  import QsCheckbox from '~/components/ui/QsCheckbox'
  import QsNotify from '~/components/ui/QsNotify'

  export default {
    components: {
      QsFormGroup,
      QsCheckbox,
      QsNotify
    },
    global: {
      nav: ['back', '회원가입']
    },
    async asyncData ({ app }) {
      return {}
    },
    computed: {
      isSelectAll: {
        get () {
          const agree = this.inputData.termsAgree
          return agree.taService && agree.taPrivacy && agree.taMarketing
        },
        set (val) {
          const agree = this.inputData.termsAgree
          agree.taService = agree.taPrivacy = agree.taMarketing = val
        }
      }
    },
    data () {
      return {
        stepIndex: 0,
        inputData: {
          email: '',
          password: '',
          fullName: '',
          mobile: '',
          termsAgree: {
            taService: false,
            taPrivacy: false,
            taMarketing: false
          },
          verification: {
            email: false,
            mobile: false
          }
        },
        inputPwConfirm: '',
        isCodeSend: false,
        isCompleted: false
      }
    },
    methods: {
      goStep2 () {
        this.stepIndex = 1
      },
      certMobile () {
        this.isCodeSend = true
        // this.$aart.api.cert.cert({
        //   mobile: this.inputData.mobile,
        //   mode: 'CERT_MOBILE'
        // }).then(res => {
        //   if (this.stepIndex === 0) this.stepIndex = 1
        // })
      },
      certMobileConfirm () {
        this.isCompleted = true
      },
      redirect () {
        window.location.replace('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list_policy {
    li + li {
      margin-top: 16px;
    }
  }
</style>

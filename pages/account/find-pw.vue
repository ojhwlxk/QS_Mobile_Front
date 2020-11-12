<template>
  <div>
    <hr class="_space" v-if="stepIndex !== 2">
    <div class="container py-20">
      <!-- STEP: 1 -->
      <template v-if="stepIndex === 0">
        <h2 class="sec_tit mb-16">아이디와 휴대폰 번호를 입력하세요</h2>
        <form @submit.prevent="validateScope('form-1', certMobile)" data-vv-scope="form-1">
          <QsFormGroup name="email"
                       type="email"
                       placeholder="가입시 사용한 이메일 입력"
                       v-model="inputData.email"
                       v-validate="'required|email'"
                       scope="form-1"
          />
          <div class="row gx-4">
            <QsFormGroup name="mobile"
                         placeholder="전화번호 입력 ('-' 제외)"
                         v-model="inputData.mobile"
                         class="col"
                         v-validate="'required|mobile'"
                         scope="form-1"
            />
            <div class="col-4">
              <button type="submit" class="btn btn-outline-default btn-block">
                {{ isCodeSend ? '재전송' : '인증번호' }}
              </button>
            </div>
          </div>
        </form>
        <form @submit.prevent="validateScope('form-2', certMobileConfirm)" data-vv-scope="form-2" v-if="isCodeSend">
          <div class="row gx-4">
            <QsFormGroup name="code"
                         placeholder="인증번호를 입력해주세요"
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
      <template v-if="stepIndex === 1">
        <h2 class="sec_tit mb-16">인증이 완료되었습니다.<br>
          새로운 비밀번호를 설정해주세요</h2>
        <form @submit.prevent="validateScope('form-3', changePassword)" data-vv-scope="form-3" v-if="isCodeSend">
          <QsFormGroup name="password"
                       type="password"
                       placeholder="새 비밀번호"
                       v-model="inputData.password"
                       v-validate="'required|password'"
                       ref="password"
                       scope="form-3"
                       class="mb-16"
          />
          <QsFormGroup name="pwConfirm"
                       type="password"
                       placeholder="비밀번호 확인"
                       v-model="inputPwConfirm"
                       v-validate="'required|confirmed:password'"
                       scope="form-3"
                       class="mb-16"
          />
          <button type="submit" class="btn btn-primary">완료</button>
        </form>
      </template>
    </div>

    <QsNotify v-model="isCompleted" @close="goLogin" text="비밀번호가 재설정 되었습니다." :closeAuto="true"/>
  </div>
</template>

<script>
import QsCheckbox from '~/components/ui/QsCheckbox'
import QsFormGroup from '~/components/ui/QsFormGroup'
import QsNotify from '~/components/ui/QsNotify'

export default {
  components: {
    QsCheckbox,
    QsFormGroup,
    QsNotify
  },
  global: {
    nav: ['back', '비밀번호 찾기']
  },
  data () {
    return {
      stepIndex: 0,
      inputData: {
        email: '',
        mobile: '',
        code: '',
        password: ''
      },
      inputPwConfirm: '',
      isCodeSend: false,
      isCompleted: false
    }
  },
  methods: {
    certMobile () {
      this.isCodeSend = true
    },
    certMobileConfirm () {
      this.stepIndex = 1
    },
    changePassword () {
      this.isCompleted = true
    },
    goLogin () {
      this.$router.push({name: 'account-login'})
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

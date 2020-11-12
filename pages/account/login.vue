<template>
  <div class="page_login">
    <div class="container">
      <div class="_logo text-center py-32">
        <img src="~assets/img/logo.svg" alt="queens smile">
      </div>
      <form @submit.prevent="validateForm(login)">
        <QsFormGroup name="loginEmail"
                     type="email"
                     placeholder="이메일"
                     v-model="inputData.email"
                     v-validate="'required'"
                     class="mb-16"
        />
        <QsFormGroup name="loginPassword"
                     type="password"
                     placeholder="비밀번호"
                     v-model="inputData.password"
                     v-validate="'required'"
        />

        <div class="row align-items-center my-20">
          <div class="col">
            <QsCheckbox v-model="isLoginAuto">자동로그인</QsCheckbox>
          </div>
          <div class="col">
            <div class="group_link text-right">
              <nuxt-link :to="{ name: 'account-find-id' }" class="btn _item">아이디 찾기</nuxt-link>
              Ⅰ
              <nuxt-link :to="{ name: 'account-find-pw' }" class="btn _item">비밀번호 찾기</nuxt-link>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary mt-5">로그인</button>
        <small class="invalid-feedback mt-1" v-show="errMsg">{{ errMsg }}</small>
      </form>
    </div>
    <div class="container fixed-bottom py-20">
      <button type="button" class="btn btn-outline-default btn-block color-black">카카오톡으로 로그인</button>
      <div class="txt_sign-up text-center mt-20">
        퀸스스마일이 처음이신가요?
        <nuxt-link :to="{ name: 'account-sign-up' }">회원가입</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import QsFormGroup from '~/components/ui/QsFormGroup'
import QsCheckbox from '~/components/ui/QsCheckbox'

export default {
  global: {
    nav: ['close'],
    footer: false
  },
  components: {
    QsFormGroup,
    QsCheckbox
  },
  async asyncData () {
    return {
      inputData: {
        email: '',
        password: ''
      },
      isLoginAuto: false,
      errMsg: ''
    }
  },
  methods: {
    ...mapActions(['setAccessToken', 'setRememberId', 'deleteRememberId']),
    login () {
      this.setAccessToken('accesstoken_data')
      if (this.isLoginAuto) {
        this.setRememberId(this.inputData.email)
      } else {
        this.deleteRememberId()
      }
      this.$router.replace({name: 'main'})
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
.page_login {
  ._logo > img {
    height: 31px;
    width: auto;
  }

  .group_link ._item {
    font-size: 12px;
    font-weight: $font-weight-normal;
    letter-spacing: -.5px;
    text-decoration: underline;
    padding: 0;
    border: none;
  }

  .txt_sign-up {
    font-size: 12px;
    letter-spacing: -.5px;

    > a {
      color: $primary;
    }
  }
}
</style>

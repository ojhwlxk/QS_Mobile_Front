<template>
  <div>
    <hr class="_space">
    <div class="container py-20" v-if="activeStep === 0">
      <p class="mb-20">회원님의 정보를 안전하게 보호하기 위해 비밀번호를 한 번 더 입력해주세요.</p>
      <form @submit.prevent="validateScope('form-1', checkPw)" data-vv-scope="form-1">
        <label class="form_label mb-16">비밀번호</label>
        <div class="row gx-4">
          <QsFormGroup name="password"
                       type="password"
                       placeholder="비밀번호를 입력하새요"
                       v-model="inputData.password"
                       v-validate="'required'"
                       class="col mb-0"
                       scope="form-1"
          />
          <div class="col-3">
            <button type="submit" class="btn btn-outline-gray color-black">확인</button>
          </div>
        </div>
      </form>
    </div>
    <div class="container py-20" v-if="activeStep === 1">
      <QsFormGroup name="id"
                   label="아이디"
                   v-model="inputData.id"
                   :isReadonly="true"
      />
      <QsFormGroup name="id"
                   label="이름"
                   v-model="inputData.fullName"
                   :isReadonly="true"
                   class="mb-20"
      />

      <form @submit.prevent="validateScope('form-2', modify)" data-vv-scope="form-2">
        <label class="form_label mb-16">휴대폰 인증</label>
        <div class="row gx-4">
          <QsFormGroup name="mobile"
                       type="tel"
                       v-model="inputData.mobile"
                       v-validate="'required|mobile'"
                       class="col mb-0"
                       scope="form-2"
          />
          <div class="col-3">
            <button type="submit" class="btn btn-outline-gray color-black">재인증</button>
          </div>
        </div>
      </form>
      <div class="group_link text-right mt-20">
        <button type="button" @click="logout" class="btn _item">로그아웃</button>
        Ⅰ
        <nuxt-link :to="{ name: 'mypage-member-leave' }" class="btn _item">회원탈퇴</nuxt-link>
      </div>
    </div>
    <div class="container fixed-bottom pb-20" v-show="activeStep === 1">
      <button type="submit" class="btn btn-primary">수정하기</button>
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
      nav: ['back', '내정보수정']
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        activeStep: 0,
        inputData: {
          id: 'hong',
          password: '',
          fullName: '홍길동',
          mobile: '01012341234'
        }
      }
    },
    methods: {
      checkPw () {
        this.activeStep = 1
      },
      modify () {
      },
      logout () {
        this.$store.dispatch('deleteAccessToken').then(res => {
          window.location.replace('/')
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .group_link ._item {
    font-size: 12px;
    font-weight: $font-weight-normal;
    letter-spacing: -.5px;
    text-decoration: underline;
    padding: 0;
    border: none;
  }
</style>

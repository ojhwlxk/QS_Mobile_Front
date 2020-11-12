<template>
  <div>
    <hr class="_space">
    <form @submit.prevent="validateForm(pointPw)">
      <div class="container py-20">
        <QsFormGroup name="password"
                     type="password"
                     label="비밀번호"
                     placeholder="6자리 숫자 입력"
                     v-model="inputData.password"
                     v-validate="'required|pointPw'"
                     ref="password"
                     class="mb-20"
        />
        <QsFormGroup name="pwConfirm"
                     type="password"
                     label="비밀번호 확인"
                     placeholder="6자리 숫자 입력"
                     v-model="inputPwConfirm"
                     v-validate="'required|confirmed:password'"
        />
      </div>
      <div class="container fixed-bottom pb-20">
        <button type="submit" class="btn btn-primary">비밀번호 변경하기</button>
      </div>
    </form>
    <QsNotify v-model="isCompleted" @close="redirect" text="비밀번호 설정이 완료되었습니다."/>
  </div>
</template>

<script>
  import QsFormGroup from '~/components/ui/QsFormGroup'
  import QsNotify from '~/components/ui/QsNotify'

  export default {
    components: {
      QsFormGroup,
      QsNotify
    },
    global: {
      nav: ['back', '포인트 비밀번호 설정']
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        inputData: {
          password: ''
        },
        inputPwConfirm: '',
        isCompleted: false
      }
    },
    methods: {
      pointPw () {
        this.isCompleted = true
      },
      redirect () {
        this.$router.replace({ name: 'mypage-point' })
      }
    }
  }
</script>

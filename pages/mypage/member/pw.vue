<template>
  <div>
    <hr class="_space">
    <form @submit.prevent="validateForm(pointPw)">
      <div class="container py-20">
        <QsFormGroup name="password"
                     type="password"
                     label="기존 비밀번호"
                     placeholder="기존 비밀번호 입력"
                     v-model="inputData.password"
                     v-validate="'required'"
                     ref="password"
                     class="mb-0"
        />
      </div>
      <hr class="_space">
      <div class="container py-20">
        <QsFormGroup name="newPassword"
                     type="password"
                     label="새 비밀번호"
                     placeholder="8~16자리 영문자, 숫자, 특수문자만 사용가능"
                     v-model="inputData.newPassword"
                     v-validate="'required|password'"
                     ref="password"
                     class="mb-20"
        />
        <QsFormGroup name="pwConfirm"
                     type="password"
                     label="새 비밀번호 확인"
                     placeholder="비밀번호 확인"
                     text="아이디와 동일한 비밀번호나 전화번호, 생일 등 개인정보와 관련된 숫자, 연속되거나 반복되는 숫자 등 다른 사람이 쉽게 알아낼 수 있는 비밀번호는 유출의 위험이 있습니다."
                     v-model="inputPwConfirm"
                     v-validate="'required|confirmed:password'"
        />
      </div>
      <div class="container fixed-bottom pb-20">
        <button type="submit" class="btn btn-primary">비밀번호 변경하기</button>
      </div>
    </form>
  </div>
</template>

<script>
  import QsFormGroup from '~/components/ui/QsFormGroup'

  export default {
    components: {
      QsFormGroup
    },
    global: {
      nav: ['back', '비밀번호 수정']
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        inputData: {
          password: '',
          newPassword: ''
        },
        inputPwConfirm: ''
      }
    },
    methods: {
      pointPw () {
      }
    }
  }
</script>

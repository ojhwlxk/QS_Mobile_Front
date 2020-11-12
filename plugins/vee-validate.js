import Vue from 'vue'
import ko from 'vee-validate/dist/locale/ko'
import VeeValidate, {Validator} from 'vee-validate'
import moment from 'moment'

const customKo = {
  custom: {
    pwConfirm: {
      confirmed: '비밀번호가 일치하지 않습니다.'
    },
    file: {
      required: '필수 첨부 항목입니다.'
    },
    star: {
      min_value: '별점을 선택해주세요.'
    }
  },
  messages: {
    required: ' ',
    regex: '형식에 맞지 않습니다.',
    numeric: '숫자만 입력해주세요.',
    email: '이메일 형식에 맞지 않습니다.',
    min: (name, val) => {
      return `최소 ${val[0]}글자 이상을 입력해주세요.`
    }
  }
}

// ko의 원래 dic을 먼저 불러오고 그 다음에 custom을 merge 시켜야 컴포넌트에서 extend를 사용할 수 있다.
Validator.localize('ko', ko)
Validator.localize('ko', customKo)

Vue.use(VeeValidate, {
  locale: 'ko'
})

/* Custom Rule */
Validator.extend('mobile', {
  validate: value => {
    const regExp = /^01([0|1|6|7|8|9]{1})(\d{7,8})$/
    return regExp.test(value)
  },
  getMessage: () => {
    return '휴대폰 번호 형식에 맞지 않습니다.'
  }
})

Validator.extend('policy', {
  validate: value => !!value,
  getMessage: () => {
    return '필수 동의 항목입니다.'
  }
})

Validator.extend('code', {
  validate: value => {
    const regExp = /^\d{6}$/
    return regExp.test(value)
  },
  getMessage: () => {
    return '인증번호 6자리를 확인해 주세요.'
  }
})

Validator.extend('businessNum', {
  validate: value => {
    const regExp = /^\d{10}$/
    return regExp.test(value)
  },
  getMessage: () => {
    return '사업자등록번호 10자리를 확인해 주세요.'
  }
})

Validator.extend('password', {
  validate: value => {
    const regExp = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/
    return regExp.test(value)
  },
  getMessage: () => {
    return '8~20자 이내의 영문자, 숫자 조합으로 입력해 주세요.'
  }
})

Validator.extend('pointPw', {
  validate: value => {
    const regExp = /^\d{6}$/
    return regExp.test(value)
  },
  getMessage: () => {
    return '숫자 6자리를 입력해 주세요.'
  }
})

Validator.extend('birth', {
  validate: value => {
    const today = moment().format('YYMMDD')
    const regExp = /^(\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/
    return value < today || regExp.test(value)
  },
  getMessage: () => {
    return '생년월일 6자리를 다시 한번 확인해 주세요.'
  }
})

// Global Mixin
const ValidateMixin = {
  install (Vue, options) {
    Vue.mixin({
      methods: {
        validateForm (func) {
          this.$validator.validate().then(result => {
            if (result) func()
          })
        },
        validateScope (scope, func) {
          this.$validator.validateAll(scope).then((result) => {
            if (result) func()
          })
        }
      }
    })
  }
}

Vue.use(ValidateMixin)

<!--
** Radiobox
* props
- id: this._uid 값으로 Default 값 자동 생성 -> newId
※ 서버와 클라이언트의 _uid 값이 다름 => mounted 에서 선언
- name: **Validation 처리시 필수**
- modelValue(v-model): 필수
- inputValue: 필수
- disabled
-->
<template>
  <div class="custom-control custom-radio">
    <input type="radio"
           :name="name"
           :id="newId"
           :value="inputValue"
           :checked="checked"
           :disabled="disabled"
           :class="['custom-control-input', {'is-invalid':errors.has(`${name}`)}]"
           @change="$emit('input', $event.target.value)"
    >
    <label class="custom-control-label radio_label" :for="newId">
      {{label}}
      <slot/>
    </label>
  </div>
</template>

<script>
  export default {
    inject: ['$validator'],
    model: {
      prop: 'modelValue'
    },
    props: {
      id: String,
      name: String,
      modelValue: {
        required: true
      },
      inputValue: {
        type: String,
        required: true
      },
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      checked () {
        return this.modelValue === this.inputValue
      }
    },
    data () {
      return {
        newId: ''
      }
    },
    mounted () {
      this.newId = this.id ? this.id : `radiobox_${this._uid}`
    }
  }
</script>

<style lang="scss" scoped>
  .radio_label {
    width: 100%;
    color: $black;
    font-weight: $font-weight-bold;
  }
</style>

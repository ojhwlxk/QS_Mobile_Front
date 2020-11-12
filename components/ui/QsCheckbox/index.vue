<!--
** Checkbox
* props
※ 서버와 클라이언트의 _uid 값이 다름 => mounted 에서 선언
- name: **Validation 처리시 필수**
- v-model(modelValue): 필수
- inputValue: 1. 값이 없을 때 - $emit('input', Boolean), validate 내부 처리
              2. 값이 있을 때 - $emit('input', Array), validate 외부 처리
- disabled
-->
<template>
  <div class="custom-control custom-checkbox" :class="{ 'onlyCheck': !isLabel }">
    <input type="checkbox"
           :name="name"
           :id="newId"
           :value="inputValue"
           :checked="checked"
           :disabled="isDisabled"
           :class="['custom-control-input', {'is-invalid': validErr}]"
           @change="onChange">
    <label class="custom-control-label custom_label" :class="labelClass" :for="newId">
      {{label}}
      <slot/>
    </label>
    <small class="invalid-feedback" v-if="!inputValue && validErr">{{ validErr }}</small>
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
      label: {
        type: String,
        default: ''
      },
      modelValue: {
        required: true
      },
      inputValue: {
        type: [String, Number, Boolean],
        default: false
      },
      scope: String,

      /* status */
      labelClass: String,
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      nameForValid () {
        return this.scope ? `${this.scope}.${this.name}` : this.name
      },
      validErr () {
        return this.errors.has(this.nameForValid) && this.errors.first(this.nameForValid)
      },
      isModelValueArray () {
        return Array.isArray(this.modelValue)
      },
      checked () {
        if (this.isModelValueArray) {
          return this.modelValue.some(item => {
            return item === this.inputValue
          })
        } else {
          return !!this.modelValue
        }
      },
      isLabel () {
        return !!this.label || !!this.$slots.default
      }
    },
    data () {
      return {
        newId: ''
      }
    },
    mounted () {
      this.newId = this.id || `checkbox_${this._uid}`
    },
    methods: {
      onChange () {
        if (this.inputValue !== false) {
          if (this.isModelValueArray) {
            this.handleValueInArray()
          } else {
            this.$emit('input', this.checked ? [] : [this.inputValue])
          }
        } else {
          this.$emit('input', !this.checked)
        }
      },
      handleValueInArray () {
        const index = this.modelValue.indexOf(this.inputValue)
        if (index !== -1) {
          this.modelValue.splice(index, 1)
        } else {
          this.modelValue.push(this.inputValue)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .onlyCheck {
    padding-left: $custom-control-indicator-size;

    .custom-control-label::after,
    .custom-control-label::before {
      left: -$custom-control-indicator-size;
    }
  }

  .invalid-feedback {
    display: block;
    line-height: 1;
  }

  .custom_label {
    font-size: 12px;
    letter-spacing: -.5px;
    color: $body-color;
    line-height: $font-size-base * $line-height-base;
  }
</style>

<template>
  <div class="form-group" :key="name">
    <label :for="id" class="_label" :class="[labelClass, {'color-danger': validErr}]" v-if="label">{{label}}</label>
    <div class="area_input">
      <input :type="newType"
             :name="name"
             :id="id"
             :placeholder="placeholder"
             v-model="newValue"
             :readonly="isReadonly"
             :disabled="isDisabled"
             :maxlength="maxlength"
             @keyup.enter="$emit('enter', $event)"
             class="form-control"
             :class="[inputClass, {'icon2': type === 'password'}, {'is-invalid':validErr}]"
      >
      <div class="group_icon" v-if="newType !== 'hidden'">
        <div class="_inner d-flex align-items-center">
          <i class="icon-qs-close" @click="clear" v-show="newValue && !isIconClear"></i>
          <i :class="`icon-qs-eye${isShowPw ? '' : '-off'}`" @click="isShowPw = !isShowPw" v-if="!isIconClear && type === 'password'"></i>
          <slot/>
          <QsTimer v-model="isTimer" v-if="isTimer"/>
          <button type="button" @click="$emit('enter'), $event"
                  class="btn p-0 ml-1" v-if="type === 'search'"><i class="icon-qs-search _search"></i></button>
        </div>
      </div>
    </div>
    <small class="form-text form_txt" v-if="text">{{text}}</small>
    <small class="invalid-feedback" v-show="err || validErr" v-html="err || validErr"></small>
  </div>
</template>

<script>
  import QsTimer from '~/components/ui/QsTimer'

  export default {
    components: {
      QsTimer
    },
    inject: ['$validator'],
    props: {
      value: null,
      label: String,
      inputClass: String,
      id: {
        type: String,
        default: function () {
          return `form-${this._uid}`
        }
      },
      type: {
        type: String,
        default: 'text'
      },
      name: String,
      placeholder: String,
      text: String,
      err: String,
      maxlength: {
        type: [Number, Boolean],
        default: false
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      isReadonly: {
        type: Boolean,
        default: false
      },
      isTimer: {
        type: Boolean,
        default: false
      },
      scope: String,
      labelClass: String
    },
    computed: {
      newValue: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', this.type === 'number' ? parseInt(val) : val)
        }
      },
      newType () {
        return this.isShowPw ? 'text' : this.type
      },
      nameForValid () {
        return this.scope ? `${this.scope}.${this.name}` : this.name
      },
      validErr () {
        return this.errors.has(this.nameForValid) && this.errors.first(this.nameForValid)
      },
      isIconClear () {
        return this.isDisabled || this.isReadonly
      }
    },
    data () {
      return {
        isShowPw: false
      }
    },
    methods: {
      clear () {
        this.$emit('input', '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $group-icon-mr: 10px;
  $icon-size: 20px;

  .form-group {
    ._label {
      font-size: 16px;
      font-weight: $font-weight-bold;
      color: $black;
      letter-spacing: -.5px;
      margin-bottom: 16px;
    }

    .form_txt {
      font-size: 12px;
      letter-spacing: -.5px;
    }

    .invalid-feedback {
      line-height: 1.2;
    }
    .area_input {
      position: relative;

      > input {
        padding-right: $group-icon-mr * 2 + $icon-size;
        &.icon2 {
          padding-right: $group-icon-mr * 2 + $icon-size * 2 + 3px;
        }
        &[type='number'] {
          padding-right: $group-icon-mr;
        }
      }

      .group_icon {
        position: absolute;
        top: calc(50% - #{$icon-size/2});
        right: $group-icon-mr;

        ._inner {
          min-height: $icon-size;
        }

        i {
          float: left;
          font-size: $icon-size;
          color: #e4e5e9;
          cursor: pointer;
          & + i {
            margin-left: 3px;
          }

          &.icon-qs-eye {
            color: #e4e5e9;
          }

          &._search {
            font-size: 16px;
            color: $primary;
          }
        }
      }
    }
  }
</style>

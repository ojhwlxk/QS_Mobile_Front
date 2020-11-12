<template>
  <div class="qs_textarea">
    <div class="_inner">
      <textarea :id="id"
                :name="name"
                :rows="rows"
                :maxlength="maxlength"
                :placeholder="placeholder"
                v-model="newValue"
                :class="['form-control', {'is-invalid':errors.has(name)}]"
      />
      <div class="_length">{{value.length}}/{{maxlength}}</div>
    </div>
    <small class="invalid-feedback" v-show="errors.has(name)" v-html="errors.first(name)"></small>
  </div>
</template>

<script>
  export default {
    inject: ['$validator'],
    props: {
      value: null,
      id: String,
      name: String,
      placeholder: String,
      rows: {
        type: Number,
        default: 5
      },
      maxlength: {
        type: Number,
        default: 100
      }
    },
    computed: {
      newValue: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .qs_textarea {
    ._inner {
      position: relative;

      > textarea {
        padding-bottom: 40px + $input-padding-y;
      }

      ._length {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-top: 1px solid $border-color;
        font-size: 12px;
        color: $body-color;
        line-height: 40px;
        text-align: right;
        padding: 0 $input-padding-x;
      }
    }
  }
</style>

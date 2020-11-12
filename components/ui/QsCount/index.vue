<template>
  <div class="qs_count" :style="width ? { 'max-width': width } : ''">
    <button type="button" @click="handleValue(false)" :disabled="newValue === min" class="btn count_btn">
      <i class="icon-qs-minus-circle" :style="color ? {color:color} : ''"></i></button>
    <input type="text" :value="newValue" class="count_input" readonly>
    <button type="button" @click="handleValue(true)" :disabled="newValue === max" class="btn count_btn">
      <i class="icon-qs-plus-circle" :style="color ? {color:color} : ''"></i></button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        required: true
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: [Number, String],
        default: 9999
      },
      width: String,
      color: String
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
    },
    methods: {
      handleValue (flag) {
        if (flag) {
          if (this.newValue < this.max) {
            this.newValue++
          }
        } else {
          if (this.newValue > this.min) {
            this.newValue--
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .qs_count {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .count_btn {
      border: none;
      padding: 0;

      i {
        display: block;
        color: $primary;
        &:before {
          font-size: 22px;
          color: inherit;
        }
      }

      &:disabled {
        opacity: 1;

        i:before {
          color: #ecedee;
        }
      }
    }

    .count_input {
      width: 100%;
      border: none;
      font-size: 16px;
      font-weight: $font-weight-bold;
      text-align: center;

      &:focus {
        outline: none;
      }
    }
  }
</style>

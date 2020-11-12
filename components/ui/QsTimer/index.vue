<template>
  <div class="timer">{{txt_time}}</div>
</template>

<script>
  import moment from 'moment'

  export default {
    model: {
      prop: 'isValid'
    },
    props: {
      isValid: {
        type: Boolean,
        default: false
      },
      time: {
        type: Number,
        default: (3 * 60) // 3분
      },
      format: {
        type: String,
        default: 'mm:ss'
      }
    },
    mounted () {
      this.setTimer()
    },
    beforeDestroy () {
      this.clearTimer()
    },
    computed: {
      txt_time () {
        return moment(this.realTime * 1000).format(this.format)
      }
    },
    data () {
      return {
        timer: null,
        realTime: this.time // init
      }
    },
    watch: {
      isValid (val) {
        if (val) this.setTimer()
        else this.clearTimer()
      }
    },
    methods: {
      setTimer () {
        this.clearTimer()
        this.realTime = this.time
        this.timer = setInterval(() => {
          this.realTime--
          if (this.realTime === 0) {
            this.$emit('input', false)
            this.$emit('timeover')
            this.clearTimer()
          }
        }, 1000)
      },
      clearTimer () {
        if (this.timer) {
          clearInterval(this.timer)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .timer {
    width: 2.5em;
    line-height: $font-size-base * $line-height-base;
    color: $primary;
    @include font-size(12px);
  }
</style>

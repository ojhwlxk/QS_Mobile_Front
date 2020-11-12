<template>
  <div class="qs_star clearfix" :style="size ? { fontSize: size } : ''">
    <template v-for="n in one"><img src="~assets/img/star.svg"></template>
    <template v-if="half"><img src="~assets/img/star-half.svg"></template>
    <template v-for="n in empty"><img src="~assets/img/star-empty.svg"></template>
  </div>
</template>

<script>
  export default {
    props: {
      score: {
        type: Number,
        default: 3.6
      },
      size: {
        type: String
      }
    },
    computed: {
      one () {
        return Math.floor(this.score)
      },
      half () {
        return Math.round(this.score - this.one)
      },
      empty () {
        return 5 - this.one - this.half
      }
    }
  }
</script>

<style lang="scss" scoped>
  .qs_star {
    padding-bottom: .12em;

    > img {
      float: left;
      width: 1.15em;
      height: auto;
    }
  }
</style>

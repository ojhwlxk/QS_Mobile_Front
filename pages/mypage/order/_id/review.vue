<template>
  <div>
    <div class="container py-32">
      <h1 class="text-center">리뷰를 남겨주세요.</h1>
      <div class="review_star mt-20">
        <template v-for="n in 5">
          <button type="button" @click="() => { handleStar(n) }" class="btn _item" :class="{ 'active': inputStar >= n }">
            <i class="icon-qs-star"></i></button>
        </template>
      </div>
      <QsFormGroup name="star"
                   type="hidden"
                   v-model="inputStar"
                   v-validate="'min_value:1'"
                   class="text-center mt-8"
      />
      <QsTextarea name="content"
                  placeholder="다음 이용자를 위해 방문 시 분위기나 서비스 만족도에 대해 적어 주세요. (최소 5자 이상)"
                  v-model="inputData.content"
                  v-validate="'required|min:5'"
                  class="mt-32"
      />
      <div class="group_img row gx-4 mt-16">
        <div class="col-3">
          <button type="button" class="btn _item _add"><i class="icon-qs-plus"></i></button>
        </div>
        <div class="col-3" v-for="n in 2">
          <div class="_item" :style="`backgroundImage: url('/sample/menu.jpg')`">
            <button type="button" class="btn btn_delete"><i class="icon-qs-close"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div class="bot_box fixed-bottom">
      <div class="_inner container py-16">
        솔직하게 작성하신 리뷰는 주문을 고민하는 분들께 큰 도움이 됩니다. 하지만 허위 리뷰나 명예회손, 욕설, 타인비방글 등 선량한 업주나 제3자의 권리를 침해하는 게시물은 서비스이용약관이나 관련 법률에 따라 제재를 받을 수 있습니다.
      </div>
    </div>
  </div>
</template>

<script>
  import QsTextarea from '~/components/ui/QsTextarea'
  import QsFormGroup from '~/components/ui/QsFormGroup'

  export default {
    components: {
      QsTextarea,
      QsFormGroup
    },
    global: {
      nav: ['close', '', 'finish'],
      footer: false
    },
    asyncData ({ store }) {
    },
    mounted () {
      this.$bus.$on('finish', () => { this.validateForm(this.submit) })
    },
    beforeDestroy () {
      this.$bus.$off('finish')
    },
    data () {
      return {
        inputData: {
          content: ''
        },
        inputStar: 0
      }
    },
    methods: {
      handleStar (num) {
        this.inputStar = num
      },
      submit () {
        this.$router.replace({ name: 'mypage-order' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bot_box {
    background-color: $gray-100;
    border-top: 1px solid $border-color;

    > ._inner {
      font-size: 10px;
    }
  }

  .group_img {
    ._item {
      position: relative;
      width: 100%;
      padding: 0 0 100%;
      border-radius: $border-radius;
      border: solid 1px #d5d4e1;
      background-position: center;
      background-size: cover;

      &._add > i {
        position: absolute;
        top: calc(50% - 8px);
        left: calc(50% - 8px);

        &:before {
          font-size: 16px;
        }
      }
    }

    .btn_delete {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      border: none;
      font-size: 10px;
      color: $white;

      i:before {
        display: block;
      }
    }
  }

  .review_star {
    display: flex;
    justify-content: center;

    ._item {
      padding: 0;
      border: none;

      & + ._item {
        margin-left: 12px;
      }

      > i:before {
        font-size: 40px;
        color: $gray-200;
      }

      &.active > i:before {
        color: $primary;
      }
    }
  }
</style>

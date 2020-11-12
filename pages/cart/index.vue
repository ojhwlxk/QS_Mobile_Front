<template>
  <div>
    <hr class="_space">
    <div class="container pb-20">
      <ul class="list_cart">
        <li v-for="n in 2">
          <!-- Item -->
          <div class="_item">
            <div>
              <h2 class="_tit">헝그리피자 피자 L / 1개 (최대 2줄)</h2>
              <div class="_info mt-4">12:00 / 페퍼로니 / 콜라 / 1개</div>
              <div class="_price mt-4">20,000원</div>
            </div>
            <div class="ml-auto">
              <button type="button" class="btn btn_delete">삭제</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="container pb-20">
      <button type="button" @click="submit" class="btn btn-primary btn-block">40,000원 결제하기</button>
    </div>
  </div>
</template>

<script>
  export default {
    global: {
      nav: ['back', '장바구니']
    },
    head () {
      return {
        bodyAttrs: {
          class: 'bg-light'
        }
      }
    },
    asyncData ({ store }) {
    },
    methods: {
      submit () {
        this.$router.push({ name: 'order' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list_cart {
    li {
      border-bottom: 1px solid $border-color;
    }

    ._item {
      display: flex;
      padding: 16px;
      margin-left: -16px;
      margin-right: -16px;
      background-color: $white;

      ._tit {
        font-size: 16px;
      }

      ._info {
        font-size: 12px;
        letter-spacing: -.5px;
      }

      ._price {
        font-size: 16px;
        font-weight: $font-weight-bold;
        color: $black;
      }

      .btn_delete {
        padding: 0;
        border: none;
      }
    }
  }
</style>

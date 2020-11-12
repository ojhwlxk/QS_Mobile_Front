<template>
  <div>
    <div class="container">
      <ul class="list_qna">
        <li v-for="n in 2">
          <nuxt-link :to="{ name: 'cs-qna-id', params: { id: 1 } }" class="_item d-flex align-items-center">
            <div>
              <h3 class="_tit">회원가입은 어떻게 하나요?</h3>
              <div class="_date">2020-02-20 오후 04:57</div>
            </div>
            <div class="ml-auto"><span class="_status">대기중</span></div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list_qna {
    li {
      border-bottom: 1px solid $border-color;
    }

    ._item {
      padding: 16px 0;

      ._tit {
        font-size: 14px;
      }

      ._date {
        font-size: 10px;
        color: #999dad;
        margin-top: 2px;
      }

      ._status {
        font-size: 10px;
        color: #999dad;
      }
    }
  }
</style>

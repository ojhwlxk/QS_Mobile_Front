<template>
  <div>
    <hr class="_space">
    <div class="container">
      <ul class="list_notice">
        <li v-for="n in 5">
          <!-- Item -->
          <nuxt-link :to="{ name: 'cs-notice-id', params: { id: 1 } }" class="_item">
            <h3 class="_tit">퀸스스마일 모바일앱이 새롭게 오픈되었습니다.</h3>
            <div class="_date">2020-02-20 오후 04:57</div>
          </nuxt-link>
        </li>
      </ul>
      <!--<p class="txt_notice text-center mt-16">목록이 없습니다.</p>-->
    </div>
  </div>
</template>

<script>
  export default {
    global: {
      nav: ['back', '공지사항']
    },
    head () {
      return {
        bodyAttrs: {
          class: 'bg-light'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .txt_notice {
    font-size: 12px;
    letter-spacing: -.5px;
  }

  .list_notice {
    padding: 0 16px;
    margin-left: -16px;
    margin-right: -16px;
    background-color: $white;

    li + li {
      border-top: 1px solid $border-color;
    }

    ._item {
      display: block;
      padding: 16px 0;

      ._tit {
        font-size: 14px;
      }

      ._date {
        font-size: 10px;
        color: #999dad;
        margin-top: 2px;
      }
    }
  }
</style>

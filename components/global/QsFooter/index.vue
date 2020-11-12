<template>
  <footer class="qs_footer d-xl-block pb-20">
    <div class="container">
      <div class="py-16">
        <nuxt-link to="/" class="_notice">[이벤트] 포토리뷰 쓰면, 100포인트 적립해 드립니다!</nuxt-link>
      </div>

      <div class="list_link py-16">
        <ul class="row mx-0">
          <li class="col">
            <nuxt-link :to="{ name: 'mypage-coupon-register' }">쿠폰등록</nuxt-link>
          </li>
          <li class="col">
            <nuxt-link :to="{ name: 'cs-qna-register' }">문의하기</nuxt-link>
          </li>
          <li class="col">
            <nuxt-link :to="{ name: 'cs-qna-register' }">입점문의</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="group_link text-center mt-16">
        <p class="mb-8">주식회사 퀸즈스마일은 통신판매중개자로서 입점판매자와의 거래당사자가 아니며,
          입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.</p>
        <nuxt-link :to="{ name: 'policy-services' }">이용약관</nuxt-link>
        <nuxt-link :to="{ name: 'policy-type', params: { type: 'privacy' } }">개인정보취급방침</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    computed: {
      isMobile () {
        return this.$store.getters.isMobile
      }
    }
  }
</script>

<style lang="scss" scoped>
  .qs_footer {
    background-color: $light;
    @include media-breakpoint-down(sm) {
      border-top: 1px solid $border-color;
    }

    ._notice {
      font-size: 12px;
      color: $black;
      letter-spacing: -0.5px;
    }

    .list_link {
      border-top: 1px solid $border-color;
      border-bottom: 1px solid $border-color;

      li + li {
        border-left: 1px solid $border-color;
      }

      a {
        display: block;
        text-align: center;
        font-size: 12px;
        color: #999dad;
        line-height: 1;
      }
    }

    .group_link {
      p {
        font-size: 9px;
        word-break: keep-all;
      }

      a {
        font-size: 10px;
        color: #999dad;
        margin: 0 6px;
      }
    }

    .sec_app {
      height: 70px;
      font-size: 22px;
      color: $white;
      text-align: center;
      background-color: $primary;
      cursor: pointer;
    }

    /* dark mode */
    .dark & {
      background-color: $dark-background-color;

      &, .list_link, .list_link li {
        border-color: $dark-border-color;
      }

      ._notice,
      .group_link p {
        font-weight: $font-weight-light;
        color: $dark-text-gray;
      }
    }
  }
</style>

<template>
  <div>
    <header class="main_logout">
      <div class="_inner container pt-40 pb-12">
        <div class="_txt">시간으로 예약하는 서비스</div>
        <h1 class="_tit">퀸스스마일</h1>
        <div class="group_btn row gx-4">
          <div class="col-12 col-xl">
            <nuxt-link :to="{ name: 'account-login' }" class="btn btn-primary btn-block btn_login">로그인하기</nuxt-link>
          </div>
          <div class="col-12 col-xl mt-8 mt-xl-0">
            <nuxt-link :to="{ name: 'account-sign-up' }" class="btn btn-block btn_sign-up">회원가입하기</nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <hr class="_space">
    <section class="container pt-20 pb-40">
      <h2 class="main_tit"><span class="color-primary">퀸스</span> 추천 상품</h2>
      <ul>
        <li v-for="n in 3" class="mt-16">
          <ItemMenu v-bind="menuData"/>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import ItemMenu from '~/components/item/menu'

export default {
  components: {
    ItemMenu
  },
  global: {
    nav: ['', 'logo', 'cart'],
    navColor: 'primary',
    navBot: true,
    footer: true
  },
  asyncData ({ store, redirect }) {
    /* TODO 임시 */
    redirect({name: 'main'})
    // if (store.getters.isLogin) redirect({name: 'main'})
  },
  data () {
    return {
      menuData: {
        to: { name: 'fid-menu-mid', params: { fid: 1, mid: 1 } },
        imageURL: '/sample/food-23.jpg',
        title: '크림새우우동',
        text: '메세나폴리스 I 테이스틸러',
        location: {
          meter: 59,
          text: '도보 4분'
        },
        price: 6900
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main_logout {
  background-color: $primary2;

  ._inner {
    background: url('/img/main_logout.png') right 30px no-repeat;
    background-size: 237px;
  }

  ._tit {
    font-size: 37px;
    color: #fff;
  }

  ._txt {
    font-size: 15px;
    /*font-weight: $font-weight-bold;*/
    color: $white;
    letter-spacing: -.5px;
  }

  .group_btn {
    margin-top: 75px;

    .btn_login {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
    }

    .btn_sign-up {
      color: $primary;
      background-color: $white;
      border: solid 1px $primary;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

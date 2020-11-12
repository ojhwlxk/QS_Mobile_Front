<template>
  <div>
    <hr class="_space">
    <section class="member_info px-16 pt-20">
      <div class="d-flex">
        <div class="_name">홍길동님</div>
        <div class="color-primary text-right ml-auto">
          <div class="_grade">핑크</div>
          <div class="_point mt-8">124 P</div>
        </div>
      </div>
      <ul class="member_points list_between mt-8">
        <li>
          <span class="_tit">적립예정</span>
          <span class="_txt">0 P</span>
        </li>
        <li>
          <span class="_tit">소멸예정</span>
          <span class="_txt">0 P</span>
        </li>
      </ul>
    </section>
    <hr class="_space">

    <template v-for="menus in menuList">
      <ul class="member_menus px-16">
        <li v-for="item in menus">
          <nuxt-link :to="item.to" class="_item">
            <img :src="`/img/icon/${item.icon}.svg`" v-if="item.icon">
            <span>{{ item.name }}</span>
            <i class="icon-qs-right"></i>
          </nuxt-link>
        </li>
      </ul>
      <hr class="_space">
    </template>
  </div>
</template>

<script>
export default {
  global: {
    nav: ['', 'logo'],
    navBot: true
  },
  data () {
    return {
      menuList: [
        [
          {name: '찜한가게', icon: 'favorite', to: {name: 'mypage-zzim'}},
          {name: '포인트', icon: 'point', to: {name: 'mypage-point'}},
          {name: '쿠폰', icon: 'coupon', to: {name: 'mypage-coupon'}}
        ],
        [
          {name: '주문/결제내역', icon: 'order-list', to: {name: 'mypage-order'}}
        ],
        [
          {name: '공지사항', to: {name: 'cs-notice'}},
          {name: '자주하는 질문', to: {name: 'cs-faq'}},
          {name: '1:1문의', to: {name: 'cs-qna'}}
        ],
        [
          {name: '내정보수정', to: {name: 'mypage-member-modify'}},
          {name: '비밀번호수정', to: {name: 'mypage-member-pw'}},
          {name: '알림설정', to: {name: 'mypage-setting'}}
        ],
        [
          {name: '로그아웃', to: {name: 'index'}}
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.member_info {
  background-color: $white;

  ._name {
    color: $black;
    font-weight: $font-weight-bold;
  }

  ._grade {
    font-weight: $font-weight-bold;
  }

  ._point {
    font-size: 30px;
    font-weight: bold;
  }
}

.member_points {
  ._tit {
    font-size: 14px;
    color: $black;
  }

  ._txt {
    font-weight: 700;
    color: $black;
  }
}

.member_menus {
  background-color: $white;

  li + li {
    border-top: 1px solid $border-color;
  }

  ._item {
    display: flex;
    height: 52px;
    align-items: center;
    color: $black;
    letter-spacing: -.5px;

    > img {
      width: 1.15em;
      height: auto;
      margin-right: 8px;
    }

    > i {
      color: #999dad;
      margin-left: auto;
    }
  }
}
</style>

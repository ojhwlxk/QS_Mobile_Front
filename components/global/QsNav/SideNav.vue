<template>
  <nav class="qs_side_nav fixed-top" ref="sideNav">
    <header class="side_nav_header px-16 d-flex align-items-center">
      <button type="button" @click="$emit('close')" class="btn btn_icon"><i class="icon-qs-close"></i></button>
      <nuxt-link :to="{ name: 'mypage-setting' }" class="btn btn_icon ml-auto"><i class="icon-qs-setting"></i></nuxt-link>
    </header>
    <div class="px-16 mt-4">
      <div class="side_nav_info d-flex">
        <div class="_name">홍길동(hong)님</div>
        <div class="color-primary text-right ml-auto">
          <div class="_grade">핑크</div>
          <div class="_point mt-8">124 P</div>
        </div>
      </div>
      <ul class="side_nav_points list_between mt-8">
        <li>
          <span class="_tit">적립예정</span>
          <span class="_point">0 P</span>
        </li>
        <li>
          <span class="_tit">소멸예정</span>
          <span class="_point">0 P</span>
        </li>
      </ul>
    </div>
    <hr class="_space">
    <ul class="side_nav_menus px-16">
      <li v-for="item in menus">
        <nuxt-link :to="item.to" class="_item">
          <img :src="`/img/icon/${item.icon}.svg`" alt="">
          <span>{{ item.name }}</span>
          <i class="icon-qs-right"></i>
        </nuxt-link>
      </li>
    </ul>
    <hr class="_space">
    <ul class="side_nav_menus px-16">
      <li v-for="item in menus2">
        <nuxt-link :to="item.to" class="_item">
          <span>{{ item.name }}</span>
          <i class="icon-qs-right"></i>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { name: '찜한가게', icon: 'favorite', to: { name: 'mypage-zzim' } },
        { name: '포인트', icon: 'point', to: { name: 'mypage-point' } },
        { name: '쿠폰', icon: 'coupon', to: { name: 'mypage-coupon' } },
        { name: '주문/결제내역', icon: 'order-list', to: { name: 'mypage-order' } },
        { name: '내정보수정', icon: 'mypage', to: { name: 'mypage-member-modify' } },
        { name: '비밀번호수정', icon: 'password', to: { name: 'mypage-member-pw' } }
      ],
      menus2: [
        { name: '공지사항', to: { name: 'cs-notice' } },
        { name: '1:1문의', to: { name: 'cs-qna-register' } }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.qs_side_nav {
  right: auto;
  z-index: $zindex-fixed + 1;
  width: 90%;
  max-width: 337px;
  height: 100%;
  overflow-y: auto;
  background-color: $white;
}

.side_nav_header {
  height: $navbar-height;

  .btn_icon i:before {
    color: $black;
  }
}

.side_nav_info {
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

.btn_icon {
  padding: 0;
  border: none;

  i:before {
    display: block;
    font-size: 20px;
    color: $black;
  }
}

.side_nav_points {
  ._tit {
    font-size: 14px;
    color: $black;
  }

  ._point {
    font-weight: 700;
    color: $black;
  }
}

.side_nav_menus {
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

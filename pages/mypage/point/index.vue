<template>
  <div>
    <hr class="_space">
    <div class="container py-20">
      <div class="point_box px-16 py-4">
        <ul class="list_ list_point">
          <li>
            <span class="color-primary font-weight-bold">총 포인트</span>
            <span class="_point _total color-primary">1,000 P</span>
          </li>
          <li>
            <span>적립예정</span>
            <span class="_point">300 P</span>
          </li>
          <li>
            <span>소멸예정</span>
            <span class="_point">100 P</span>
          </li>
        </ul>
      </div>
      <div class="text-right mt-12">
        <nuxt-link :to="{ name: 'mypage-point-pw' }" class="btn_link">포인트 비밀번호 설정 <i class="icon-qs-right"></i></nuxt-link>
      </div>
    </div>
    <hr class="_space">

    <div class="container py-20">
      <h2 class="list_tit">이용내역</h2>
      <ul class="list_ mt-16">
        <li v-for="n in 5">
          <!-- Item -->
          <div class="point_history_item">
            <div>
              <h3 class="_tit">헝그리베어</h3>
              <div class="_date">2020-02-20 오후 04:57</div>
            </div>
            <div class="text-right ml-auto">
              <div class="_point">+ 100 P</div>
              <div class="_type">구매적립</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    global: {
      nav: ['back', '포인트']
    },
    asyncData ({ store }) {
    }
  }
</script>

<style lang="scss" scoped>
  .point_box {
    border-radius: $border-radius;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);

    .list_point {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $black;
      }

      ._point {
        font-weight: 700;
      }
    }

    ._total {
      font-size: 30px;
    }
  }

  .btn_link {
    padding: 0;
    border: none;
    color: $primary;
    font-size: 12px;
    letter-spacing: -.5px;
  }

  .point_history_item {
    display: flex;
    align-items: center;

    ._tit {
      font-size: 14px;
      font-weight: $font-weight-normal;
    }

    ._date {
      font-size: 10px;
      margin-top: 2px;
    }

    ._point {
      font-size: 14px;
      font-weight: 700;
      color: $primary;
    }

    ._type {
      font-size: 10px;
    }
  }
</style>

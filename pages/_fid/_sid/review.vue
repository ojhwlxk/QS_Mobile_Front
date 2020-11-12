<template>
  <div>
    <header class="review_header container py-20">
      <div class="d-flex align-items-center">
        <div>
          <h3 class="_tit">최근 리뷰 24개</h3>
          <div class="_txt">사장님댓글 22개</div>
        </div>
        <div class="ml-auto">
          <QsCheckbox label="사진리뷰만" :modelValue="isOnlyPhoto"/>
        </div>
      </div>
    </header>
    <hr class="my-0">
    <div class="container py-4 pb-32">
      <ul class="list_">
        <li v-for="n in 3">
          <!-- Item -->
          <div class="review_item">
            <h4 class="_tit">하씨는 먹방중</h4>
            <div class="_info d-flex align-items-center mt-4">
              <QsStar/>
              <span class="ml-8">오늘</span>
            </div>
            <ul class="list_food row mt-8">
              <li class="col-6" v-for="n in 4">
                <div class="_img" :style="`backgroundImage: url('/sample/food-10.jpg')`"></div>
              </li>
            </ul>
            <div class="_comment mt-12">우선 사장님 정말 친절하세요!! 가자마자 바로 픽업해서 한 입 먹었는데 맛도 좋고 가격도 합리적이고, 감동받은 건 저희 인원 보시고 소스랑 피클 더 얹어주신거...크 감동입니다!!
              사장님 번창하세요~~~
            </div>
          </div>
          <div class="recomment_box mt-28">
            <div class="d-flex align-items-center">
              <h4 class="_tit">사장님</h4> <span class="_date ml-4">1주 전</span>
            </div>
            <div class="color-black mt-12">먹는게제일좋아 님, 죄송합니다.<br>
              다음부터는 꼭 늦지 않게 배송하겠습니다.<br>
              맛있게 드셔주셔서 감사합니다.
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import QsCheckbox from '~/components/ui/QsCheckbox'
  import QsStar from '~/components/ui/QsStar'

  export default {
    components: {
      QsCheckbox,
      QsStar
    },
    asyncData ({ store }) {
    },
    data () {
      return {
        isOnlyPhoto: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .review_header {
    ._tit {
      font-size: 20px;
    }
  }

  .review_item {
    ._tit {
      font-size: 16px;
    }

    ._info {
      font-size: 11px;
    }

    ._img {
      width: 100%;
      padding-bottom: 100%;
      background-position: center;
      background-size: cover;
      border-radius: $border-radius;
      bottom: 1px solid $border-color;
    }

    ._comment {
      letter-spacing: -.5px;
      color: $black;
    }
  }

  .list_food {
    margin-left: -3px;
    margin-right: -3px;

    li {
      padding: 3px;
    }
  }

  .recomment_box {
    position: relative;
    padding: 16px;
    background-color: #f8f9fa;
    border-radius: $border-radius;
    border-top-left-radius: 0;

    &:before {
      content: '';
      position: absolute;
      top: -16px;
      left: 0;
      display: block;
      width: 0;
      height: 0;
      border-bottom: 16px solid #f8f9fa;
      border-right: 16px solid transparent;
    }

    ._tit {
      font-size: 16px;
    }

    ._date {
      font-size: 10px;
    }
  }
</style>

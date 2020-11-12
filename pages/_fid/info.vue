<template>
  <div>
    <hr class="_space">
    <div class="container py-20">
      <h2 class="info_tit">매장 소개</h2>
      <div class="info_txt mt-8">안녕하세요. 메세나폴리스입니다.</div>
      <hr>

      <h2 class="info_tit">위치</h2>
      <div class="info_txt mt-8">서울 마포구 독막로 9길 6</div>

      <div class="info_map mt-16"></div>

      <dl class="dl_info mt-20">
        <dt>운영시간</dt>
        <dd>오전 11:00 ~ 오후 9:00</dd>
        <dt>휴무일</dt>
        <dd>연중무휴</dd>
        <dt>전화번호</dt>
        <dd>02-0000-0000</dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    global: {
      nav: ['back', '푸드코트 메세나폴리스', 'share cart']
    },
    asyncData ({ store }) {
    }
  }
</script>

<style lang="scss" scoped>
  .info_tit {
    font-size: 16px;
  }

  .info_txt {
    letter-spacing: -.5px;
    color: $black;
  }

  .info_map {
    height: 190px;
    background-color: $gray-400;
    border-radius: 13px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .dl_info {
    dt, dd {
      color: $black;
      letter-spacing: -.5px;
    }

    dt {
      float: left;
      font-weight: $font-weight-bold;
    }

    dd {
      margin-left: 87px;
      margin-bottom: 8px;
    }
  }
</style>

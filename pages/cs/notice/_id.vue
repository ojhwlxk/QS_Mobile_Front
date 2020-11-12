<template>
  <div>
    <hr class="_space">
    <div class="detail_area container py-20">
      <h2 class="_tit">우리은행 서비스 중단 안내 (2/23 토)</h2>
      <div class="_date mt-8">2020-02-20  오후 04:57</div>
      <hr>
      <div class="_content">
        <img src="https://dummyimage.com/600x400/000/fff">
        안녕하세요. 퀸스스마일입니다.<br><br>

        우리은행 시스템 점검으로 인해 일정 시간 동안 바로 결제 서비스 이용이 제한될 예정으로 안내드립니다.<br><br>

        <b>• 시스템 작업</b><br>
        - 작업일시 : 2월 20일(목) 00:00 ~ 00:10<br>
        - 작업내용 : 시스템 작업<br>
        - 작업영향: 퀸스스마일 바로결제 이용 불가<br><br>

        더 나은 서비스 제공을 위해 최선을 다하겠습니다.<br>
        감사합니다.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    global: {
      nav: ['back', '공지사항']
    },
    asyncData ({ redirect }) {
      return {}
    }
  }
</script>

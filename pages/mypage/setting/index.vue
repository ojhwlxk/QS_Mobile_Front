<template>
  <div>
    <hr class="_space">
    <div class="bg-white">
      <div class="container">
        <ul class="list_">
          <li>
            <div class="setting_item">
              <span class="_txt">푸쉬 알림 동의</span>
              <QsToggle class="_toggle"/>
            </div>
          </li>
          <li>
            <div class="setting_item">
              <span class="_txt">SMS 수신 동의</span>
              <QsToggle class="_toggle"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <hr class="_space">

    <div class="bg-white">
      <div class="container">
        <ul class="list_">
          <li>
            <nuxt-link :to="{ name: 'policy-services' }" class="setting_item">
              <div class="_txt">이용약관</div>
              <i class="icon-qs-right"></i>
            </nuxt-link>
          </li>
          <li>
            <div class="setting_item">
              <div class="_txt">현재 버전 V1.0.0
                <div class="_desc">최신 버전 V(2.0.0)으로 업데이트 가능합니다.</div>
              </div>
              <div>
                <button type="button" class="btn btn-outline-default btn-sm color-black">업데이트</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <hr class="_space">
  </div>
</template>

<script>
  import QsToggle from '~/components/ui/QsToggle/index'

  export default {
    components: {
      QsToggle
    },
    head () {
      return {
        bodyAttrs: {
          class: 'bg-light'
        }
      }
    },
    global: {
      nav: ['back', '설정']
    },
    asyncData ({ store }) {
    }
  }
</script>

<style lang="scss" scoped>
  .setting_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $black;

    ._txt {
      font-size: 14px;
      letter-spacing: -.5px;
    }

    ._desc {
      font-size: 10px;
      color: #999dad;
    }

    ._toggle {
      font-size: 30px;
    }
  }
</style>

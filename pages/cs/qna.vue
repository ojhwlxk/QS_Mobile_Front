<template>
  <div>
    <QsTab :list="tabs" v-show="!$route.params.id"/>
    <hr class="_space">
    <nuxt-child/>
  </div>
</template>

<script>
  import QsTab from '~/components/ui/QsTab/index'

  export default {
    components: {
      QsTab
    },
    global: {
      nav: ['back', '1:1문의']
    },
    data () {
      return {
        tabs: [
          { name: '문의하기', to: { name: 'cs-qna-register' }, isReplace: true },
          { name: '나의 문의내역', to: { name: 'cs-qna' }, isReplace: true, isExact: true }
        ]
      }
    }
  }
</script>

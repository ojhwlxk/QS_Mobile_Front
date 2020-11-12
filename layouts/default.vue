<template>
  <div :class="{ 'pb_bot': isNavBot }">
    <QsNav/>
    <div class="xl_wrap">
      <div class="_inner">
        <nuxt/>
      </div>
    </div>
    <QsFooter v-show="isFooter"/>
    <QsNavBot v-show="isNavBot"/>
  </div>
</template>

<script>
  import MixinGlobal from '~/components/mixins/global'
  import MixinScrolled from '~/components/mixins/scrolled'
  import QsNav from '~/components/global/QsNav'
  import QsNavBot from '~/components/global/QsNavBot'
  import QsFooter from '~/components/global/QsFooter'

  export default {
    mixins: [MixinGlobal, MixinScrolled],
    components: {
      QsNav,
      QsNavBot,
      QsFooter
    },
    head () {
      return {
        bodyAttrs: {
          class: this.bodyClasses
        }
      }
    },
    computed: {
      bodyClasses () {
        let temp = ''
        if (this.isScrolled) temp += 'scrolled '
        if (this.isDarkMode) temp += 'dark '
        return temp
      },
      isMobile () {
        return this.$store.getters.isMobile
      },
      isDarkMode () {
        return this.$route.name.split('-')[0] === 'festival'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .xl_wrap {
    @include media-breakpoint-up(xl) {
      max-width: map-get($container-max-widths, "xl");
      min-height: 600px;
      margin: 0 auto;

      > ._inner {
        background-color: $white;
        .dark & {
          background-color: $dark-background-color;
        }
      }
    }
  }

  .pb_bot {
    padding-bottom: $nav-bot-height;
  }
</style>

<style lang="scss">
  body {
    @include media-breakpoint-up(xl) {
      background-color: #f8f9fa;
    }

    &.dark {
      color: $white;
      background-color: $dark-background-color;
    }
  }
</style>

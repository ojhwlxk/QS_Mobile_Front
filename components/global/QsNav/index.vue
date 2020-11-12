<template>
  <div class="nav_area" :class="[{ '_float': isNavfloat }, navColor ? `_${navColor}` : '']">
    <nav class="qs_nav fixed-top container">
      <div class="row no-gutters align-items-center h-100">
        <!-- left -->
        <div class="col">
          <NavIcon v-bind="icons[navOption[0]]" v-if="navOption[0]"/>
        </div>
        <!-- center -->
        <div class="col-auto" v-if="navOption[1]">
          <nuxt-link to="/" class="_logo" v-if="navOption[1] === 'logo'">
            <NavLogo/>
          </nuxt-link>
          <template v-else>
            <h1 class="_tit" v-if="typeof navOption[1] === 'string'">{{ navOption[1] }}</h1>
            <h1 class="_tit" :class="{ 'scrollActive': navOption[1].scrollActive }" v-else-if="navOption[1].text">{{ navOption[1].text }}</h1>
          </template>
        </div>
        <!-- right -->
        <div class="col text-right" v-if="navOption.length > 1">
          <template v-if="Array.isArray(navOption[2])">
            <template v-for="item in navOption[2]">
              <NavIcon v-bind="icons[item]" :key="icons[item].name" v-if="icons[item]"/>
              <NavIcon :name="item" :key="item" v-else/>
            </template>
          </template>
          <template v-else-if="navOption[2]">
            <NavIcon v-bind="icons[navOption[2]]" v-if="icons[navOption[2]]"/>
            <NavIcon :name="navOption[2]" v-else/>
          </template>
        </div>
      </div>
    </nav>

    <!-- backdrop -->
    <transition name="fade">
      <div class="nav_backdrop fixed-top" @click="deleteBackdrop" v-show="isBackdrop"></div>
    </transition>

    <!-- search -->
    <transition name="fade">
      <NavSearch @close="() => { isSearch = false }" v-if="isSearch"/>
    </transition>

    <!-- side nav -->
    <transition name="slide-left">
      <SideNav @close="() => { isSideNav = false }" v-show="isSideNav"/>
    </transition>
  </div>
</template>

<script>
import MixinGlobal from '~/components/mixins/global'
import NavLogo from '~/components/global/QsNav/Logo'
import SideNav from './SideNav'
import NavSearch from './Search'
import NavIcon from './Icon'

export default {
  mixins: [MixinGlobal],
  components: {
    NavLogo,
    SideNav,
    NavSearch,
    NavIcon
  },
  computed: {
    isLogin () {
      return this.$store.getters.isLogin
    },
    isBackdrop () {
      return this.isSideNav || (this.isSearch && !this.isSearchResult)
    },
    isSearchResult () {
      return !!this.$route.query.search
    }
  },
  data () {
    return {
      isSideNav: false,
      isSearch: !!this.$route.query.search,
      icons: {
        menu: {
          name: 'menu',
          func: () => {
            this.isSideNav = true
          }
        },
        back: {
          name: 'back',
          func: this.goBack
        },
        close: {
          name: 'close',
          func: this.goBack
        },
        cart: {
          name: 'cart',
          to: { name: 'cart' }
        },
        search: {
          name: 'search',
          func: () => {
            this.isSearch = true
          }
        }
      }
    }
  },
  methods: {
    goBack () {
      window.history.back()
    },
    handleScroll (val) {
      document.body.style.overflow = val ? 'hidden' : ''
    },
    deleteBackdrop () {
      this.isSideNav = false
      this.isSearch = false
    }
  },
  watch: {
    $route (to, from) {
      this.isSideNav = false
      this.isSearch = to.query.search

      // console.log('to', to)
      // console.log('from', from)
    },
    isSideNav (val) {
      if (!val) {
        setTimeout(() => {
          this.$refs.sideNav.scroll(0, 0)
        }, 300)
      }
      this.handleScroll(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_area {
  padding-top: $navbar-height;

  /* float */
  &._float {
    padding-top: 0;
  }
}

.qs_nav {
  height: $navbar-height;
  background-color: $white;
  @include transition(background-color $transition-nav);

  ._tit {
    font-size: 16px;
    @include transition($transition-fade);

    &.scrollActive {
      opacity: 0;
    }
  }

  ._logo img {
    height: 25px;
    width: auto;
  }

  /* float */
  ._float & {
    background-color: transparent;

    ._tit {
      font-weight: $dark-font-weight-bold;
      color: $white;
    }
  }

  /* scrolled */
  .scrolled & {
    background-color: $white;

    ._tit {
      font-weight: $font-weight-bold;
      color: $black;

      &.scrollActive {
        opacity: 1;
      }
    }
  }

  /* primary */
  ._primary & {
    background-color: $primary;
  }

  /* dark */
  .dark & {
    background-color: $dark-background-color;

    ._tit {
      font-weight: $dark-font-weight-bold;
      color: $white;
    }
  }
}

.nav_backdrop {
  height: 100%;
  background-color: rgba($black, .6);
}
</style>

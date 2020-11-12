<script>
  export default {
    computed: {
      globalOption () {
        return this.$route ? (this.$route.matched.map((r) => {
          return r.components.default.options.global
        })[0] || {}) : {}
      },
      isFooter () {
        return this.globalOption.hasOwnProperty('footer') ? this.globalOption.footer : false
      },
      isNavBot () {
        return this.globalOption.hasOwnProperty('navBot') ? this.globalOption.navBot : false
      },
      navOption () {
        return this.globalOption.hasOwnProperty('nav') ? this.globalOption.nav : ['', 'logo']
      },
      isNavfloat () {
        return this.globalOption.hasOwnProperty('navFloat') ? this.globalOption.navFloat : false
      },
      navColor () {
        return this.globalOption.hasOwnProperty('navColor') ? this.globalOption.navColor : ''
      },
      mode () {
        return this.globalOption.hasOwnProperty('mode') ? this.globalOption.mode : ''
      }
    }
  }
</script>

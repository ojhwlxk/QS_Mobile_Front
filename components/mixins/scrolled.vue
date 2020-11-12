<script>
  import {throttle} from 'lodash'

  export default {
    data () {
      return {
        isScrolled: false
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('scroll', throttle(() => this.scrolled(), 100))
        this.scrolled()
      })
    },
    methods: {
      scrolled () {
        const doc = document.documentElement
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
        this.isScrolled = (top > 0)
      }
    }
  }
</script>

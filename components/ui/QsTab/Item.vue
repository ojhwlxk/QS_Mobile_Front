<script>
export default {
  props: {
    name: String,
    isExact: Boolean,
    isReplace: Boolean,
    isActive: Boolean,
    to: Object,
    color: String
  },
  render: function (createElement) {
    let spanText = createElement('span', {
      style: {
        borderColor: this.color
      }
    }, this.name)

    if (this.to) {
      return createElement('nuxt-link', {
        class: '_item',
        props: {
          to: this.to,
          exact: this.isExact,
          replace: this.isReplace
        }
      }, [spanText])
    } else {
      return createElement('div', {
        class: {
          _item: true,
          active: this.isActive
        }
      }, [spanText])
    }
  }
}
</script>

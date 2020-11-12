<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    to: Object,
    func: Function
  },
  render: function (createElement) {
    const icon = createElement('i', {
      class: `icon-qs-${this.icon || this.name}`
    })
    const iconClass = 'btn nav_icon'

    if (this.to) {
      return createElement('nuxt-link', {
        class: iconClass,
        props: {
          to: this.to
        }
      }, [icon])
    } else if (this.func) {
      return createElement('button', {
        class: iconClass,
        attrs: {
          type: 'button'
        },
        on: {
          click: () => {
            this.func()
          }
        }
      }, [icon])
    } else {
      return createElement('button', {
        class: iconClass,
        attrs: {
          type: 'button'
        },
        on: {
          click: () => {
            this.$bus.$emit(this.name)
          }
        }
      }, [icon])
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_icon {
  padding: 0;
  border: none;

  & + .nav_icon {
    margin-left: 12px;
  }

  i:before {
    display: block;
    font-size: 20px;
    color: $black;
    @include transition(color $transition-nav);

    /* float */
    ._float & {
      color: $white;
    }

    /* scrolled */
    .scrolled & {
      color: $black;
    }

    /* primary */
    ._primary & {
      color: $white;
    }

    /* dark */
    .dark & {
      color: $white;
    }
  }
}
</style>

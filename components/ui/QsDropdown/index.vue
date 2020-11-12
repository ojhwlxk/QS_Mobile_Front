<template>
  <div class="qs_dropdown" :class="{ 'show': isShow }">
    <div class="_inner">
      <div class="dropdown_btn d-flex align-items-center" @click="isShow = !isShow">
        <span class="_txt text-truncate mr-auto">{{selected.title}}</span>
        <i class="_arr icon-qs-down ml-2"></i>
      </div>
      <template v-if="isShow">
        <ul class="dropdown_menu">
          <template v-for="(item, index) in list">
            <li class="_txt" :class="[{'active':item === selected}, {'disabled': item.isDisabled}]"
                @click="selectItem(item)" :key="index">{{item.title}}
            </li>
          </template>
        </ul>
        <div class="_backdrop" @click="isShow = false"></div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: function () {
          return [
            { title: '드롭다운1' },
            { title: '드롭다운2' },
            { title: '드롭다운3', isDisabled: true }
          ]
        }
      },
      placeholder: {
        type: String,
        default: '전체'
      }
    },
    data () {
      return {
        isShow: false,
        selected: {
          title: this.placeholder
        }
      }
    },
    methods: {
      selectItem (item) {
        if (item.isDisabled) return
        this.isShow = false
        if (this.selected === item) return
        this.selected = item
        this.$emit('select', item)
      },
      reset () {
        this.selected = {
          title: this.placeholder
        }
        this.$emit('select', '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $dropdown-px: 12px;

  .qs_dropdown {
    position: relative;
    z-index: $zindex-dropdown;
    height: $input-height;

    &.show {
      z-index: $zindex-dropdown + 10;
    }

    ._inner {
      border: $input-border-width solid $input-border-color;
      background-color: $white;
      @include border-radius($input-border-radius, 0);
    }

    ._backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -10;
    }

    ._txt {
      color: $body-color;
    }
  }

  .dropdown_btn {
    height: $input-btn-height - 2px; // border-width
    padding: 0 $dropdown-px;
    cursor: pointer;

    ._arr {
      color: $body-color;

      .qs_dropdown.show & {
        transform: rotate(180deg);
      }
    }
  }

  .dropdown_menu {
    li {
      line-height: $input-btn-height;
      padding: 0 $dropdown-px;

      &:not(.disabled) {
        cursor: pointer;

        &:hover,
        &.active {
          background-color: #fafafa;
        }
      }

      &.disabled {
        opacity: .6;
      }
    }
  }
</style>

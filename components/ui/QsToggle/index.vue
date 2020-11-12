<template>
  <label class="qs_toggle" @click.stop="$emit('input')">
    <input type="checkbox" :checked="value">
    <span class="_slider"></span>
  </label>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  $toggle-width: 1.6em;
  $toggle-height: 1em;
  $toggle-slider-width: 0.8em;
  $toggle-space: ($toggle-height - $toggle-slider-width) / 2;
  $toggle-distance: $toggle-width - $toggle-slider-width - $toggle-space * 2;

  .qs_toggle {
    position: relative;
    display: inline-block;
    width: $toggle-width;
    height: $toggle-height;
    margin-bottom: 0;

    > input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    ._slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
      background-color: #fafafa;
      border-radius: $toggle-height/2;
      @include transition(.4s);

      &:before {
        position: absolute;
        content: "";
        height: $toggle-slider-width;
        width: $toggle-slider-width;
        left: $toggle-space;
        bottom: $toggle-space;
        background-color: $white;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        @include transition(.4s);
      }
    }

    input:checked + ._slider {
      background-color: $primary;

      &:before {
        -webkit-transform: translateX($toggle-distance);
        -ms-transform: translateX($toggle-distance);
        transform: translateX($toggle-distance);
      }
    }
  }
</style>

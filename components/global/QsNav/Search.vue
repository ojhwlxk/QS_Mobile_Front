<template>
  <div class="search_area fixed-top">
    <div class="input_wrap">
      <input type="search"
             v-model="inputSearch"
             placeholder="검색어를 입력해주세요."
             @keyup.enter="search"
             class="form-control"
             ref="navSearch"
      >
      <button type="button" @click="cancelSearch" class="btn btn_search_cancel">취소</button>
    </div>
    <QsNotify v-model="isNotify"
              text="검색어를 입력해주세요."
              :closeAuto="true"/>
  </div>
</template>

<script>
import QsNotify from '~/components/ui/QsNotify'

export default {
  components: {
    QsNotify
  },
  data () {
    return {
      inputSearch: this.$route.query.search || '',
      isNotify: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.navSearch.focus()
    })
  },
  methods: {
    search () {
      if (!this.inputSearch) {
        this.isNotify = true
        return
      }
      this.$bus.$emit('search', this.inputSearch)
      this.$router.replace({ query: { search: this.inputSearch } })
    },
    cancelSearch () {
      this.$emit('close')
      this.$router.replace({ query: null })
    }
  }
}
</script>

<style lang="scss" scoped>
.search_area {
  position: fixed;

  .input_wrap {
    position: relative;

    > input {
      border-radius: 0;
      border-color: $white;
      background-color: $white;
    }

    .btn_search_cancel {
      position: absolute;
      top: 0;
      right: 0;
      color: $primary;
    }
  }

  .dark & {
    .input_wrap {
      > input {
        color: $dark-text-white;
        background-color: $dark-background-color;
        border-color: transparent;
      }

      .btn_search_cancel {
        color: $dark-text-white;
        font-weight: $font-weight-normal;
      }
    }
  }
}
</style>

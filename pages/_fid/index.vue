<template>
<div>{{$route.name}}</div>
</template>

<script>
  export default {
    asyncData ({ redirect, params }) {
      redirect({ name: 'fid-menu', params })
    }
  }
</script>

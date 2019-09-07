<template>
  <div class="home">
    <router-view></router-view>
    <mymain></mymain>
  </div>
</template>

<script>
import mymain from './Main'

export default {
  name: 'home',
  components: {
    mymain
  }
}
</script>

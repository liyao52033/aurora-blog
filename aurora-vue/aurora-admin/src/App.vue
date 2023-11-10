<template>
  <div id="app">
<!--    <router-view v-if="isRouterAlive"/>-->
    <router-view />
  </div>
</template>

<script>
import { generaMenu } from '@/assets/js/menu'

export default {
  created() {
    if (this.$store.state.userInfo != null) {
      generaMenu()
    }
    this.axios.post('/api/report')
  }
}
</script>
